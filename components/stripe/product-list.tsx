"use client";

import { useState } from "react";
import { ChevronDown, Layers3, RefreshCcw, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export type StripeProduct = {
    id: string;
    name: string;
    price: string | null;
    currency: string;
    isRecurring?: boolean;
    billingPeriod?: string | null;
};

const PERIOD_LABELS: Record<string, string> = {
    day: "jour",
    week: "semaine",
    month: "mois",
    year: "an",
};

const PREVIEW_COUNT = 3;

function ProductPrice({ product }: { product: StripeProduct }) {
    if (product.price === null || product.price === undefined) {
        return (
            <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                Sans prix
            </span>
        );
    }

    const amount = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: product.currency,
    }).format(Number(product.price));

    const period = product.isRecurring
        ? PERIOD_LABELS[product.billingPeriod ?? ""] ?? product.billingPeriod
        : null;

    return (
        <span className="shrink-0 font-mono text-sm font-medium tabular-nums text-foreground">
            {amount}
            {period && <span className="text-muted-foreground">/{period}</span>}
        </span>
    );
}

function ProductRow({ product, index }: { product: StripeProduct; index: number }) {
    return (
        <div
            className="flex items-center justify-between gap-3 border-b border-border/60 py-2 last:border-0 animate-in fade-in-0 slide-in-from-top-1 fill-mode-both duration-300"
            style={{ animationDelay: `${index * 40}ms` }}
        >
            <div className="flex min-w-0 items-center gap-2">
                <span
                    className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-md border",
                        product.isRecurring
                            ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : "border-border bg-muted text-muted-foreground"
                    )}
                    title={product.isRecurring ? "Abonnement récurrent" : "Paiement unique"}
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
}

export function ProductList({ products }: { products: StripeProduct[] | undefined }) {
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
                        <ProductRow
                            key={p.id}
                            product={p}
                            index={expanded ? Math.min(i, PREVIEW_COUNT) : i}
                        />
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
                    {expanded
                        ? "Voir moins"
                        : `Voir ${hiddenCount} produit${hiddenCount > 1 ? "s" : ""} de plus`}
                    <ChevronDown
                        className={cn(
                            "size-3.5 transition-transform duration-200",
                            expanded && "rotate-180"
                        )}
                        strokeWidth={2}
                    />
                </button>
            )}
        </div>
    );
}
