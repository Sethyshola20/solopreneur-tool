'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, FileText } from 'lucide-react';
import { toast } from 'sonner';
import {
    downloadDevisPDF,
    downloadFacturePDF,
    type DevisPDFData,
    type FacturePDFData,
    type CompanyInfo,
    type ClientInfo,
    type LineItem
} from '@/lib/pdf';
import { useSettings } from '@/hooks/use-settings';
import { useClient } from '@/hooks/use-clients';
import type { DevisWithItems } from '@/lib/use-cases/devis';
import type { FactureWithItems } from '@/lib/use-cases/factures';

interface PDFDownloadButtonProps {
    variant?: 'ghost' | 'outline' | 'default';
    size?: 'icon' | 'sm' | 'default';
    showLabel?: boolean;
}

interface DevisPDFDownloadButtonProps extends PDFDownloadButtonProps {
    devis: DevisWithItems;
}

interface FacturePDFDownloadButtonProps extends PDFDownloadButtonProps {
    facture: FactureWithItems;
}

/**
 * Button to download a Devis as PDF
 */
export function DevisPDFDownloadButton({
    devis,
    variant = 'ghost',
    size = 'icon',
    showLabel = false
}: DevisPDFDownloadButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const { data: settings } = useSettings();
    const { data: client } = useClient(devis.clientId);

    const handleDownload = async () => {
        if (!settings) {
            toast.error('Veuillez configurer les paramètres de votre entreprise');
            return;
        }

        setIsGenerating(true);
        try {
            const companyInfo: CompanyInfo = {
                name: settings.companyName || 'Mon Entreprise',
                siret: settings.siret,
                address: settings.address,
                email: settings.email,
                ape: settings.ape,
                paymentTerms: settings.paymentTerms,
                latePaymentPenalty: settings.latePaymentPenalty,
                recoveryFee: settings.recoveryFee,
                logoUrl: settings.logoUrl,
                legalMentions: settings.legalMentions,
            };

            const clientInfo: ClientInfo = {
                name: client?.name || devis.clientName || 'Client',
                email: client?.email,
                address: client?.address,
                phone: client?.phone,
                siret: client?.siret,
            };

            const items: LineItem[] = devis.items.map((item) => ({
                id: item.id,
                description: item.description,
                quantity: Number(item.quantity),
                price: Number(item.price),
                total: Number(item.total),
            }));

            const pdfData: DevisPDFData = {
                number: devis.number,
                date: devis.date,
                validUntil: devis.validUntil,
                company: companyInfo,
                client: clientInfo,
                items,
                total: Number(devis.total),
                status: devis.status as DevisPDFData['status'],

                // Project Details
                projectDescription: devis.projectDescription,
                specificationReference: devis.specificationReference,

                // General Conditions
                deliveryTimeWeeks: devis.deliveryTimeWeeks,
                deliverables: devis.deliverables,
                revisionCycles: devis.revisionCycles,
                exclusions: devis.exclusions,

                // Payment & Support
                paymentSchedule: devis.paymentSchedule,
                postDeliverySupport: devis.postDeliverySupport,

                // Legal clauses
                ipRightsTransfer: devis.ipRightsTransfer,
            };

            await downloadDevisPDF(pdfData);
            toast.success('PDF téléchargé avec succès');
        } catch (error) {
            console.error('Error generating PDF:', error);
            toast.error('Erreur lors de la génération du PDF');
        } finally {
            setIsGenerating(false);
        }
    };

    if (size === 'icon' && !showLabel) {
        return (
            <Button
                variant={variant}
                size="icon"
                onClick={handleDownload}
                disabled={isGenerating}
                title="Télécharger PDF"
            >
                {isGenerating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <Download className="h-4 w-4" />
                )}
            </Button>
        );
    }

    return (
        <Button
            variant={variant}
            size={size}
            onClick={handleDownload}
            disabled={isGenerating}
        >
            {isGenerating ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Génération...
                </>
            ) : (
                <>
                    <FileText className="mr-2 h-4 w-4" />
                    Télécharger PDF
                </>
            )}
        </Button>
    );
}

/**
 * Button to download a Facture as PDF
 */
export function FacturePDFDownloadButton({
    facture,
    variant = 'ghost',
    size = 'icon',
    showLabel = false
}: FacturePDFDownloadButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const { data: settings } = useSettings();
    const { data: client } = useClient(facture.clientId);

    const handleDownload = async () => {
        if (!settings) {
            toast.error('Veuillez configurer les paramètres de votre entreprise');
            return;
        }

        setIsGenerating(true);
        try {
            const companyInfo: CompanyInfo = {
                name: settings.companyName || 'Mon Entreprise',
                siret: settings.siret,
                address: settings.address,
                email: settings.email,
                logoUrl: settings.logoUrl,
                ape: settings.ape,
                paymentTerms: settings.paymentTerms,
                latePaymentPenalty: settings.latePaymentPenalty,
                recoveryFee: settings.recoveryFee,
                legalMentions: settings.legalMentions,
            };

            const clientInfo: ClientInfo = {
                name: client?.name || facture.clientName || 'Client',
                email: client?.email,
                address: client?.address,
                phone: client?.phone,
                siret: client?.siret,
            };

            const items: LineItem[] = facture.items.map((item) => ({
                id: item.id,
                description: item.description,
                quantity: Number(item.quantity),
                price: Number(item.price),
                total: Number(item.total),
            }));

            const pdfData: FacturePDFData = {
                number: facture.number,
                date: facture.date,
                dueDate: facture.dueDate,
                company: companyInfo,
                client: clientInfo,
                serviceStartDate: facture.serviceStartDate,
                serviceEndDate: facture.serviceEndDate,
                items,
                total: Number(facture.total),
                status: facture.status as FacturePDFData['status'],
            };

            await downloadFacturePDF(pdfData);
            toast.success('PDF téléchargé avec succès');
        } catch (error) {
            console.error('Error generating PDF:', error);
            toast.error('Erreur lors de la génération du PDF');
        } finally {
            setIsGenerating(false);
        }
    };

    if (size === 'icon' && !showLabel) {
        return (
            <Button
                variant={variant}
                size="icon"
                onClick={handleDownload}
                disabled={isGenerating}
                title="Télécharger PDF"
            >
                {isGenerating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <Download className="h-4 w-4" />
                )}
            </Button>
        );
    }

    return (
        <Button
            variant={variant}
            size={size}
            onClick={handleDownload}
            disabled={isGenerating}
        >
            {isGenerating ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Génération...
                </>
            ) : (
                <>
                    <FileText className="mr-2 h-4 w-4" />
                    Télécharger PDF
                </>
            )}
        </Button>
    );
}
