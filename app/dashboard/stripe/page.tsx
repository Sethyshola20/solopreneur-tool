'use client';

import { useState } from 'react';
import { useStripeAccounts, useProducts, useSyncProducts, useDeleteStripeAccount } from '@/hooks/use-stripe';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Plus, RefreshCw, Trash2, Package, CheckCircle, Clock, ExternalLink, Pencil, Layers3, ChevronDown, RefreshCcw, Tag } from 'lucide-react';
import { StripeAccountDialog } from '@/components/stripe/stripe-account-dialog';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type StripeProduct = {
    id: string;
    name: string;
    price: string | null;
    currency: string;
    isRecurring?: boolean;
    billingPeriod?: string | null;
};

const PERIOD_LABELS: Record<string, string> = {
    day: 'jour',
    week: 'semaine',
    month: 'mois',
    year: 'an',
};

const PREVIEW_COUNT = 3;

const ProductPrice = ({ product }: { product: StripeProduct }) => {
    if (product.price === null || product.price === undefined) {
        return (
            <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                Sans prix
            </span>
        );
    }

    const amount = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: product.currency,
    }).format(Number(product.price));

    const period = product.isRecurring
        ? PERIOD_LABELS[product.billingPeriod ?? ''] ?? product.billingPeriod
        : null;

    return (
        <span className="shrink-0 font-mono text-sm font-medium tabular-nums text-foreground">
            {amount}
            {period && <span className="text-muted-foreground">/{period}</span>}
        </span>
    );
};

const ProductRow = ({ product, index }: { product: StripeProduct; index: number }) => (
    <div
        className="flex items-center justify-between gap-3 border-b border-border/60 py-2 last:border-0 animate-in fade-in-0 slide-in-from-top-1 fill-mode-both duration-300"
        style={{ animationDelay: `${index * 40}ms` }}
    >
        <div className="flex min-w-0 items-center gap-2">
            <span
                className={cn(
                    'flex size-6 shrink-0 items-center justify-center rounded-md border',
                    product.isRecurring
                        ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'border-border bg-muted text-muted-foreground'
                )}
                title={product.isRecurring ? 'Abonnement récurrent' : 'Paiement unique'}
            >
                {product.isRecurring ? (
                    <RefreshCcw className="size-3" strokeWidth={2} />
                ) : (
                    <Tag className="size-3" strokeWidth={2} />
                )}
            </span>
            <span className="truncate text-sm font-medium">{product.name}</span>
        </div>
        <ProductPrice product={product} />
    </div>
);

const ProductList = ({ products }: { products: StripeProduct[] | undefined }) => {
    const [expanded, setExpanded] = useState(false);
    const total = products?.length ?? 0;
    const hiddenCount = Math.max(total - PREVIEW_COUNT, 0);
    const visible = expanded ? products ?? [] : (products ?? []).slice(0, PREVIEW_COUNT);

    return (
        <div className="space-y-2">
            <div className="flex items-center text-xs font-medium text-muted-foreground">
                <Layers3 className="mr-1.5 h-3.5 w-3.5" /> Produits ({total})
            </div>

            {total === 0 ? (
                <p className="rounded-md border border-dashed border-border py-3 text-center text-xs text-muted-foreground">
                    Aucun produit synchronisé
                </p>
            ) : (
                <div className="flex flex-col">
                    {visible.map((p, i) => (
                        <ProductRow key={p.id} product={p} index={expanded ? Math.min(i, PREVIEW_COUNT) : i} />
                    ))}
                </div>
            )}

            {hiddenCount > 0 && (
                <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    className="group flex w-full items-center justify-center gap-1 rounded-md py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-[0.99]"
                    aria-expanded={expanded}
                >
                    {expanded ? 'Voir moins' : `Voir ${hiddenCount} produit${hiddenCount > 1 ? 's' : ''} de plus`}
                    <ChevronDown
                        className={cn('size-3.5 transition-transform duration-200', expanded && 'rotate-180')}
                        strokeWidth={2}
                    />
                </button>
            )}
        </div>
    );
};

export default function StripePage() {
    const { data: accounts, isLoading } = useStripeAccounts();
    const { data: products } = useProducts();
    const syncMutation = useSyncProducts();
    const deleteMutation = useDeleteStripeAccount();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editAccount, setEditAccount] = useState<any | null>(null);
    const [alertOpen, setAlertOpen] = useState(false);
    const [accountToDelete, setAccountToDelete] = useState<{ id: string; name: string } | null>(null);


    const handleSync = (accountId: string, accountName: string) => {
        console.log({ accountId, accountName })
        toast.promise(syncMutation.mutateAsync(accountId), {
            loading: `Synchronisation des produits pour ${accountName}…`,
            success: (data) => `${data.count} produit${data.count !== 1 ? 's' : ''} synchronisé${data.count !== 1 ? 's' : ''} !`,
            error: (error: Error) => 'Erreur de synchronisation : ' + error.message,
        });
    };

    const handleDelete = () => {
        if (!accountToDelete) return;
        toast.promise(
            deleteMutation.mutateAsync(accountToDelete.id).then(() => setAccountToDelete(null)),
            {
                loading: 'Deconnexion en cours…',
                success: ' Compte Stripe deconnecté !',
                error: (error: Error) => ' Erreur : ' + error.message,
            }
        );
        setAlertOpen(false);
    };

    const productsByAccount = products?.reduce((acc, product) => {
        if (!acc[product.stripeAccountId]) acc[product.stripeAccountId] = [];
        acc[product.stripeAccountId].push(product);
        return acc;
    }, {} as Record<string, typeof products>);

    if (isLoading) {
        return (
            <div className="space-y-8 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-64" />
                    <Skeleton className="h-4 w-96" />
                </div>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[...Array(3)].map((_, i) => (
                        <Card key={i} className="w-[280px] min-h-[380px] flex flex-col transition-all hover:shadow-md">
                            <CardHeader className="space-y-2 pb-4">
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="h-3 w-1/2" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <Skeleton className="h-3 w-12" />
                                    <Skeleton className="h-3 w-16" />
                                </div>
                                <Skeleton className="h-6 w-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-3 w-full" />
                                    <Skeleton className="h-3 w-5/6" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Skeleton className="h-9 w-full" />
                                    <div className="flex gap-2">
                                        <Skeleton className="h-9 w-full" />
                                        <Skeleton className="h-9 w-full" />
                                    </div>
                                    <Skeleton className="h-9 w-full" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Gestion des Comptes Stripe</h1>
                    <p className="text-muted-foreground mt-1 max-w-2xl">
                        Connectez vos comptes Stripe pour centraliser vos produits, revenus et statistiques.
                    </p>
                </div>
                <Button
                    onClick={() => {
                        setDialogOpen(true);
                        setEditAccount(null);
                    }}
                    size="sm"
                    className="h-9 px-4 md:px-5"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Nouveau compte
                </Button>
            </div>

            {/* Empty State */}
            {accounts?.length === 0 && (
                <Card className="py-12 text-center">
                    <div className="mx-auto mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-primary/10">
                        <Package className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">Aucun compte Stripe connecté</CardTitle>
                    <CardDescription className="max-w-md mx-auto mb-6">
                        Commencez par connecter votre premier compte pour synchroniser vos produits et suivre vos ventes.
                    </CardDescription>
                    <Button
                        onClick={() => {
                            setDialogOpen(true);
                            setEditAccount(null);
                        }}
                        size="sm"
                        className="h-9 px-5"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Connecter un compte
                    </Button>
                </Card>
            )}

            {/* Accounts Grid */}
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {accounts?.map((account) => {
                    const accountProducts = productsByAccount?.[account.id] || [];
                    const productCount = accountProducts.length;
                    const isSyncing = syncMutation.isPending && syncMutation.variables === account.id;
                    const lastSync = account.lastSyncAt
                        ? format(new Date(account.lastSyncAt), 'dd MMM yyyy, HH:mm', { locale: fr })
                        : 'Jamais';

                    return (
                        <Card key={account.id} className="w-[280px] min-h-[380px] flex flex-col transition-all hover:shadow-md">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start gap-2">
                                    <div className="min-w-0">
                                        <CardTitle className="text-base font-semibold truncate">{account.name}</CardTitle>
                                        {account.description && (
                                            <CardDescription className="text-xs line-clamp-2 mt-1">{account.description}</CardDescription>
                                        )}
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className={`px-2 py-0.5 text-xs font-medium ${account.isActive
                                            ? 'border-emerald-500 text-emerald-700 dark:text-emerald-400 dark:border-emerald-500'
                                            : 'border-muted-foreground/50 text-muted-foreground'
                                            }`}
                                    >
                                        {account.isActive ? (
                                            <CheckCircle className="mr-1 h-3 w-3 text-emerald-600" />
                                        ) : (
                                            <Clock className="mr-1 h-3 w-3" />
                                        )}
                                        {account.isActive ? 'Actif' : 'Inactif'}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col flex-1 gap-4 pb-5">
                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div>
                                        <p className="text-muted-foreground">Produits</p>
                                        <p className="font-semibold">{productCount}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-muted-foreground">Dernière synchro</p>
                                        <p className="font-semibold">{lastSync}</p>
                                    </div>
                                </div>

                                <Separator />

                                {/* Product Preview */}
                                <div className="flex-1 min-h-[80px]">
                                    <ProductList products={accountProducts} />
                                </div>

                                {/* Action Buttons – Spaced for clarity */}
                                <div className="space-y-2.5 mt-auto">
                                    <Button
                                        onClick={() => handleSync(account.id, account.name)}
                                        disabled={syncMutation.isPending}
                                        variant="outline"
                                        size="sm"
                                        className="w-full h-10 font-medium"
                                    >
                                        <RefreshCw className={`mr-2 h-4 w-4 ${isSyncing ? 'animate-spin' : ''}`} />
                                        {isSyncing ? 'Synchronisation…' : 'Synchroniser'}
                                    </Button>

                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 h-10 font-medium"
                                            onClick={() => {
                                                setEditAccount(account);
                                                setDialogOpen(true);
                                            }}
                                        >
                                            <Pencil className="mr-2 h-4 w-4" />
                                            Modifier
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 h-10 font-medium"
                                            asChild
                                        >
                                            <a
                                                href={`https://dashboard.stripe.com/connect/accounts/${account.id}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Stripe
                                            </a>
                                        </Button>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full h-10 text-destructive hover:text-destructive font-medium"
                                        onClick={() => {
                                            setAccountToDelete({ id: account.id, name: account.name });
                                            setAlertOpen(true);
                                        }}
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Déconnecter le compte
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Dialogs */}
            <StripeAccountDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                initialData={editAccount || undefined}
                accountId={editAccount?.id}
            />
            <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                        <AlertDialogDescription>
                            Vous êtes sur le point de supprimer le compte <span className="font-semibold">{accountToDelete?.name}</span>.
                            Cette action est <span className="font-semibold">irréversible</span> et supprimera toutes les données liées.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            onClick={handleDelete}
                            disabled={deleteMutation.isPending}
                        >
                            {deleteMutation.isPending ? 'Déconnexion en cours…' : 'Déconnecter le compte'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}