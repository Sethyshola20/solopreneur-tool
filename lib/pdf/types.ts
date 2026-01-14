// Types for PDF generation of French-compliant Factures and Devis

export interface CompanyInfo {
    name: string;
    siret: string | null;
    address?: string | null;
    email?: string | null;
    logoUrl?: string | null;
    ape: string | null; // AJOUT : Code APE
    legalMentions: string | null;
    paymentTerms: string | null; // AJOUT : Conditions de paiement
    latePaymentPenalty: string | null; // AJOUT : Pénalités de retard
    recoveryFee: string | null; // AJOUT : Indemnité de recouvrement

}

export interface ClientInfo {
    name: string;
    email?: string | null;
    address?: string | null;
    phone?: string | null;
    siret?: string | null;
}

export interface LineItem {
    id?: string;
    description: string;
    quantity: number;
    price: number;
    total: number;
}

export interface DevisPDFData {
    number: string;
    date: string;
    validUntil: string | null; // Date de validité du devis
    serviceStartDate?: string; // Date de début de prestation (pour les factures)
    serviceEndDate?: string; // Date de fin de prestation (pour les factures)
    company: CompanyInfo;
    client: ClientInfo;
    items: LineItem[];
    total: number;
    status: 'draft' | 'sent' | 'accepted' | 'rejected';

    // Project Details
    projectDescription?: string | null;
    specificationReference?: string | null;

    // General Conditions
    deliveryTimeWeeks?: number | null;
    deliverables?: string | null;
    revisionCycles?: number | null;
    exclusions?: string | null;

    // Payment & Support
    paymentSchedule?: string | null;
    postDeliverySupport?: string | null;

    // Legal clauses
    ipRightsTransfer?: string | null;
}

export interface FacturePDFData {
    number: string;
    date: string;
    dueDate?: string | null;
    serviceStartDate: string | null; // AJOUT : Date de début de prestation
    serviceEndDate: string | null; // AJOUT : Date de fin de prestation
    company: CompanyInfo;
    client: ClientInfo;
    items: LineItem[];
    total: number;
    status: 'pending' | 'paid' | 'cancelled';
}

// Status labels in French
export const DEVIS_STATUS_LABELS: Record<DevisPDFData['status'], string> = {
    draft: 'Brouillon',
    sent: 'Envoyé',
    accepted: 'Accepté',
    rejected: 'Refusé',
};

export const FACTURE_STATUS_LABELS: Record<FacturePDFData['status'], string> = {
    pending: 'En attente',
    paid: 'Payée',
    cancelled: 'Annulée',
};

// Status colors for badges
export const DEVIS_STATUS_COLORS: Record<DevisPDFData['status'], string> = {
    draft: '#6B7280', // gray
    sent: '#3B82F6', // blue
    accepted: '#10B981', // green
    rejected: '#EF4444', // red
};

export const FACTURE_STATUS_COLORS: Record<FacturePDFData['status'], string> = {
    pending: '#F59E0B', // amber
    paid: '#10B981', // green
    cancelled: '#EF4444', // red
};
