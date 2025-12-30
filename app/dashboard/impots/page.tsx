'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Euro, TrendingUp, AlertCircle, FileText, Calendar } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useRecettesList } from '@/hooks/use-recettes';


export default function ImpotsPage() {
    const { data: recettesList } = useRecettesList();
    const [ca, setCa] = useState<number>(recettesList ? recettesList.reduce((total, recette) => total + parseFloat(recette.amount), 0) : 4500);

    // Tax rates for 2025 BNC (Bénéfices Non Commerciaux)
    const SOCIAL_RATE = 0.22; // 22%
    const INCOME_TAX_LIBERATOIRE = 0.01; // 1%
    const ABATTEMENT = 0.34; // 34% tax-free allowance
    const CA_THRESHOLD = 77700; // Revenue threshold

    const calculations = useMemo(() => {
        const cotisationsSociales = ca * SOCIAL_RATE;
        const impotLiberatoire = ca * INCOME_TAX_LIBERATOIRE;
        const beneficeImposable = ca * (1 - ABATTEMENT);
        const revenuNetAvecLiberatoire = ca - cotisationsSociales - impotLiberatoire;
        const revenuNetSansLiberatoire = ca - cotisationsSociales;

        return {
            cotisationsSociales,
            impotLiberatoire,
            beneficeImposable,
            revenuNetAvecLiberatoire,
            revenuNetSansLiberatoire,
        };
    }, [ca]);

    const formatCurrency = (value: number) =>
        value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold md:text-2xl">Impôts & Taxes</h1>
                    <p className="text-sm text-muted-foreground">
                        Comprendre vos obligations fiscales en tant que micro-entrepreneur
                    </p>
                </div>
            </div>

            {/* Tax Calculator */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5" />
                        Simulateur de Taxes
                    </CardTitle>
                    <CardDescription>
                        Calculez vos charges et votre revenu net en fonction de votre chiffre d'affaires
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="ca">Chiffre d'Affaires (€)</Label>
                        <Input
                            id="ca"
                            type="number"
                            value={ca}
                            onChange={(e) => setCa(Number(e.target.value))}
                            className="text-lg font-semibold"
                        />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Card className="border-2">
                            <CardHeader>
                                <CardTitle className="text-base">Avec Versement Libératoire</CardTitle>
                                <CardDescription className="text-xs">Option fiscale simplifiée</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Cotisations Sociales (22%)</span>
                                    <span className="font-semibold">
                                        {formatCurrency(calculations.cotisationsSociales)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Impôt sur le Revenu (1%)</span>
                                    <span className="font-semibold">
                                        {formatCurrency(calculations.impotLiberatoire)}
                                    </span>
                                </div>
                                <div className="border-t pt-3 flex justify-between">
                                    <span className="font-semibold">Revenu Net</span>
                                    <span className="text-lg font-bold text-green-600">
                                        {formatCurrency(calculations.revenuNetAvecLiberatoire)}
                                    </span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Total des charges: {formatCurrency(calculations.cotisationsSociales + calculations.impotLiberatoire)}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2">
                            <CardHeader>
                                <CardTitle className="text-base">Sans Versement Libératoire</CardTitle>
                                <CardDescription className="text-xs">Barème progressif de l'IR</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Cotisations Sociales (22%)</span>
                                    <span className="font-semibold">
                                        {formatCurrency(calculations.cotisationsSociales)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Bénéfice Imposable (66%)</span>
                                    <span className="font-semibold">
                                        {formatCurrency(calculations.beneficeImposable)}
                                    </span>
                                </div>
                                <div className="border-t pt-3 flex justify-between">
                                    <span className="font-semibold">Revenu Avant IR</span>
                                    <span className="text-lg font-bold text-green-600">
                                        {formatCurrency(calculations.revenuNetSansLiberatoire)}
                                    </span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    L'IR sera calculé selon votre tranche marginale
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>

            {/* Tax Rates Information */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                            Cotisations Sociales
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{SOCIAL_RATE * 100}%</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            URSSAF, retraite, santé obligatoire
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <Euro className="h-4 w-4 text-muted-foreground" />
                            Versement Libératoire
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{INCOME_TAX_LIBERATOIRE * 100}%</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Option simplifiée (si éligible)
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            Abattement Forfaitaire
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{ABATTEMENT * 100}%</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Pour frais professionnels
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-muted-foreground" />
                            Seuil de CA
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{formatCurrency(CA_THRESHOLD)}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Plafond annuel BNC
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Breakdown Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Récapitulatif Détaillé</CardTitle>
                    <CardDescription>
                        Comparaison des deux options fiscales pour {formatCurrency(ca)} de CA
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Poste</TableHead>
                                <TableHead className="text-right">Avec Versement Libératoire</TableHead>
                                <TableHead className="text-right">Sans Versement Libératoire</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Chiffre d'Affaires</TableCell>
                                <TableCell className="text-right">{formatCurrency(ca)}</TableCell>
                                <TableCell className="text-right">{formatCurrency(ca)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Cotisations Sociales (22%)</TableCell>
                                <TableCell className="text-right text-red-600">
                                    -{formatCurrency(calculations.cotisationsSociales)}
                                </TableCell>
                                <TableCell className="text-right text-red-600">
                                    -{formatCurrency(calculations.cotisationsSociales)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Impôt sur le Revenu</TableCell>
                                <TableCell className="text-right text-red-600">
                                    -{formatCurrency(calculations.impotLiberatoire)} (1%)
                                </TableCell>
                                <TableCell className="text-right text-muted-foreground">
                                    Selon barème progressif
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bénéfice Imposable (66%)</TableCell>
                                <TableCell className="text-right text-muted-foreground">N/A</TableCell>
                                <TableCell className="text-right">
                                    {formatCurrency(calculations.beneficeImposable)}
                                </TableCell>
                            </TableRow>
                            <TableRow className="bg-muted/50">
                                <TableCell className="font-bold">Revenu Net</TableCell>
                                <TableCell className="text-right font-bold text-green-600">
                                    {formatCurrency(calculations.revenuNetAvecLiberatoire)}
                                </TableCell>
                                <TableCell className="text-right font-bold text-green-600">
                                    {formatCurrency(calculations.revenuNetSansLiberatoire)}*
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground mt-4">
                        * Avant impôt sur le revenu (IR). L'IR sera calculé selon votre tranche marginale d'imposition (0%, 11%, 30%, 41%, ou 45%)
                    </p>
                </CardContent>
            </Card>

            {/* Important Information */}
            <Card className="border-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        Informations Importantes
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Déclaration et Paiement
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Déclaration mensuelle ou trimestrielle sur{' '}
                                <a
                                    href="https://autoentrepreneur.urssaf.fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                >
                                    autoentrepreneur.urssaf.fr
                                </a>
                            </li>
                            <li>Paiement des cotisations sociales dès le premier euro de CA</li>
                            <li>Option versement libératoire : à demander lors de l'immatriculation ou via l'URSSAF</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Obligations Comptables
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Tenir un registre des recettes (factures émises)</li>
                            <li>Tenir un registre des achats (si dépenses professionnelles)</li>
                            <li>Conserver toutes les factures pendant 10 ans minimum</li>
                            <li>Ouvrir un compte bancaire dédié si CA {'>'} 10 000 € pendant 2 années consécutives</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Seuils et Limites 2025
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Plafond CA pour BNC (prestations de services) : {formatCurrency(CA_THRESHOLD)}</li>
                            <li>Au-delà, passage obligatoire au régime réel d'imposition</li>
                            <li>Éligibilité versement libératoire : revenu fiscal de référence {'<'} certains seuils</li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t">
                        <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Note :</strong> Les informations présentées sont à titre indicatif pour l'année 2025.
                            Consultez votre expert-comptable ou l'URSSAF pour des conseils personnalisés adaptés à votre situation.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
