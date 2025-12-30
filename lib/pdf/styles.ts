import { StyleSheet } from '@react-pdf/renderer';

// Color palette
export const colors = {
    primary: '#1a1a1a',
    secondary: '#6B7280',
    accent: '#3B82F6',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    background: '#FFFFFF',
    border: '#E5E7EB',
    lightGray: '#F9FAFB',
    text: '#111827',
    textMuted: '#6B7280',
};

// Main document styles
export const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 40,
        fontWeight: 400,
        fontFamily: 'Helvetica',
        fontSize: 10,
        color: colors.text,
    },

    // Header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
    },
    headerLeft: {
        flex: 1,
    },
    headerRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    documentTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 8,
        letterSpacing: 2,
    },
    documentNumber: {
        fontSize: 12,
        color: colors.secondary,
        marginBottom: 4,
    },
    documentDate: {
        fontSize: 10,
        color: colors.secondary,
    },

    // Company Info
    companyName: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: colors.primary,
        marginBottom: 4,
    },
    companyDetail: {
        fontSize: 9,
        color: colors.secondary,
        marginBottom: 2,
    },
    siret: {
        fontSize: 9,
        color: colors.secondary,
        marginTop: 4,
        fontWeight: 'medium',
    },

    // Client Section
    clientSection: {
        marginTop: 20,
        marginBottom: 30,
        padding: 15,
        backgroundColor: colors.lightGray,
        borderRadius: 4,
    },
    clientLabel: {
        fontSize: 8,
        fontWeight: 'medium',
        color: colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
    },
    clientName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 4,
    },
    clientDetail: {
        fontSize: 9,
        color: colors.textMuted,
        marginBottom: 2,
    },

    // Items Table
    table: {
        marginTop: 10,
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 4,
        marginBottom: 2,
    },
    tableHeaderCell: {
        color: colors.background,
        fontSize: 9,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    tableRowAlt: {
        backgroundColor: colors.lightGray,
    },
    tableCell: {
        fontSize: 9,
        color: colors.text,
    },
    colDescription: {
        flex: 4,
    },
    colQuantity: {
        flex: 1,
        textAlign: 'center',
    },
    colPrice: {
        flex: 1.5,
        textAlign: 'right',
    },
    colTotal: {
        flex: 1.5,
        textAlign: 'right',
    },

    // Totals
    totalsSection: {
        marginTop: 20,
        alignItems: 'flex-end',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 4,
        width: 200,
    },
    totalLabel: {
        fontSize: 10,
        color: colors.secondary,
        flex: 1,
    },
    totalValue: {
        fontSize: 10,
        color: colors.text,
        fontWeight: 'medium',
        textAlign: 'right',
        width: 80,
    },
    grandTotalRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 4,
        backgroundColor: colors.primary,
        borderRadius: 4,
        width: 200,
    },
    grandTotalLabel: {
        fontSize: 12,
        color: colors.background,
        fontWeight: 'bold',
        flex: 1,
    },
    grandTotalValue: {
        fontSize: 14,
        color: colors.background,
        fontWeight: 'bold',
        textAlign: 'right',
        width: 80,
    },

    // Legal Mentions
    legalSection: {
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    legalTitle: {
        fontSize: 8,
        fontWeight: 'bold',
        color: colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
    },
    legalText: {
        fontSize: 8,
        color: colors.textMuted,
        lineHeight: 1.5,
        marginBottom: 4,
    },
    vatExemption: {
        fontSize: 9,
        color: colors.text,
        fontWeight: 'medium',
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 4,
        marginTop: 10,
    },

    serviceDateSection: {
        marginTop: 10,
        padding: 10,
        backgroundColor: colors.lightGray,
        borderRadius: 4,
    },
    serviceDateText: {
        fontSize: 10,
        color: colors.text,
        fontWeight: 'medium',
    },
    // Status Badge
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    statusText: {
        fontSize: 8,
        fontWeight: 'medium',
        color: colors.background,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    // Footer
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
    },
    footerText: {
        fontSize: 8,
        color: colors.textMuted,
    },

    // Validity (for Devis)
    validitySection: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#FEF3C7',
        borderRadius: 4,
        borderLeftWidth: 3,
        borderLeftColor: colors.warning,
    },
    validityText: {
        fontSize: 9,
        color: '#92400E',
    },

    // Payment Terms
    paymentSection: {
        marginTop: 15,
        padding: 10,
        backgroundColor: colors.lightGray,
        borderRadius: 4,
    },
    paymentTitle: {
        fontSize: 9,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 6,
    },
    paymentText: {
        fontSize: 8,
        color: colors.textMuted,
        marginBottom: 3,
    },
});

// Utility functions for formatting
// Example of how to fix the utility function
export const formatCurrency = (value: number) => {
    const formatted = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    }).format(value);

    // Replace non-breaking spaces (U+00A0 and U+202F) with a standard space
    // Or replace with a period if you prefer 45.000,00 €
    return formatted.replace(/\u00a0/g, ' ').replace(/\u202f/g, ' ');
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(date);
};

export const formatShortDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date);
};
