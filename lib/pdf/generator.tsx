'use client';

import { pdf } from '@react-pdf/renderer';
import { DevisDocument } from './components/DevisDocument';
import { FactureDocument } from './components/FactureDocument';
import type { DevisPDFData, FacturePDFData, CompanyInfo, ClientInfo, LineItem } from './types';

export type { DevisPDFData, FacturePDFData, CompanyInfo, ClientInfo, LineItem };

/**
 * Generate a PDF blob for a Devis (quote)
 */
export async function generateDevisPDF(data: DevisPDFData): Promise<Blob> {
    const doc = <DevisDocument data={data} />;
    const blob = await pdf(doc).toBlob();
    return blob;
}

/**
 * Generate a PDF blob for a Facture (invoice)
 */
export async function generateFacturePDF(data: FacturePDFData): Promise<Blob> {
    const doc = <FactureDocument data={data} />;
    const blob = await pdf(doc).toBlob();
    return blob;
}

/**
 * Trigger a browser download for a PDF blob
 */
export function downloadPDF(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * Generate and download a Devis PDF
 */
export async function downloadDevisPDF(data: DevisPDFData): Promise<void> {
    const blob = await generateDevisPDF(data);
    const filename = `${data.number}.pdf`;
    downloadPDF(blob, filename);
}

/**
 * Generate and download a Facture PDF
 */
export async function downloadFacturePDF(data: FacturePDFData): Promise<void> {
    const blob = await generateFacturePDF(data);
    const filename = `${data.number}.pdf`;
    downloadPDF(blob, filename);
}

/**
 * Open a PDF in a new browser tab for preview
 */
export function previewPDF(blob: Blob): void {
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    // Note: URL will be revoked when the tab is closed
}

/**
 * Generate and preview a Devis PDF in a new tab
 */
export async function previewDevisPDF(data: DevisPDFData): Promise<void> {
    const blob = await generateDevisPDF(data);
    previewPDF(blob);
}

/**
 * Generate and preview a Facture PDF in a new tab
 */
export async function previewFacturePDF(data: FacturePDFData): Promise<void> {
    const blob = await generateFacturePDF(data);
    previewPDF(blob);
}
