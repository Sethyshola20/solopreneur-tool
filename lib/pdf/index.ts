// PDF Generator for French-compliant Factures and Devis
// Main entry point for all PDF generation functionality

export * from './types';
export * from './generator';
export { styles, colors, formatCurrency, formatDate, formatShortDate } from './styles';
export { DevisDocument } from './components/DevisDocument';
export { FactureDocument } from './components/FactureDocument';
