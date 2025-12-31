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
        padding: 30,
        fontWeight: 400,
        fontFamily: 'Helvetica',
        fontSize: 9,
        color: colors.text,
    },

    // Header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingBottom: 12,
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
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 6,
        letterSpacing: 2,
    },
    documentNumber: {
        fontSize: 11,
        color: colors.secondary,
        marginBottom: 3,
    },
    documentDate: {
        fontSize: 9,
        color: colors.secondary,
    },

    // Company Info
    companyName: {
        fontSize: 14,
        fontWeight: 'semibold',
        color: colors.primary,
        marginBottom: 3,
    },
    companyDetail: {
        fontSize: 8,
        color: colors.secondary,
        marginBottom: 1,
    },
    siret: {
        fontSize: 8,
        color: colors.secondary,
        marginTop: 3,
        fontWeight: 'medium',
    },

    // Client Section
    clientSection: {
        marginTop: 12,
        marginBottom: 12,
        padding: 10,
        backgroundColor: colors.lightGray,
        borderRadius: 4,
    },
    clientLabel: {
        fontSize: 7,
        fontWeight: 'medium',
        color: colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 5,
    },
    clientName: {
        fontSize: 11,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 3,
    },
    clientDetail: {
        fontSize: 8,
        color: colors.textMuted,
        marginBottom: 1,
    },

    // Items Table
    table: {
        marginTop: 8,
        marginBottom: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        padding: 8,
        borderRadius: 3,
        marginBottom: 2,
    },
    tableHeaderCell: {
        color: colors.background,
        fontSize: 8,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    tableRow: {
        flexDirection: 'row',
        padding: 7,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    tableRowAlt: {
        backgroundColor: colors.lightGray,
    },
    tableCell: {
        fontSize: 8,
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
        marginTop: 10,
        alignItems: 'flex-end',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 3,
        width: 180,
    },
    totalLabel: {
        fontSize: 9,
        color: colors.secondary,
        flex: 1,
    },
    totalValue: {
        fontSize: 9,
        color: colors.text,
        fontWeight: 'medium',
        textAlign: 'right',
        width: 70,
    },
    grandTotalRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginTop: 3,
        backgroundColor: colors.primary,
        borderRadius: 3,
        width: 180,
    },
    grandTotalLabel: {
        fontSize: 11,
        color: colors.background,
        fontWeight: 'bold',
        flex: 1,
    },
    grandTotalValue: {
        fontSize: 12,
        color: colors.background,
        fontWeight: 'bold',
        textAlign: 'right',
        width: 70,
    },

    // Legal Mentions
    legalSection: {
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    legalTitle: {
        fontSize: 7,
        fontWeight: 'bold',
        color: colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 4,
    },
    legalText: {
        fontSize: 7,
        color: colors.textMuted,
        lineHeight: 1.4,
        marginBottom: 3,
    },
    vatExemption: {
        fontSize: 8,
        color: colors.text,
        fontWeight: 'medium',
        backgroundColor: colors.lightGray,
        padding: 6,
        borderRadius: 3,
        marginTop: 8,
    },

    serviceDateSection: {
        marginTop: 8,
        padding: 8,
        backgroundColor: colors.lightGray,
        borderRadius: 3,
    },
    serviceDateText: {
        fontSize: 9,
        color: colors.text,
        fontWeight: 'medium',
    },
    // Status Badge
    statusBadge: {
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 3,
        alignSelf: 'flex-start',
        marginTop: 6,
    },
    statusText: {
        fontSize: 7,
        fontWeight: 'medium',
        color: colors.background,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    // Footer
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        right: 30,
        textAlign: 'center',
    },
    footerText: {
        fontSize: 7,
        color: colors.textMuted,
    },

    // Validity (for Devis)
    validitySection: {
        marginTop: 8,
        padding: 8,
        backgroundColor: '#FEF3C7',
        borderRadius: 3,
        borderLeftWidth: 2,
        borderLeftColor: colors.warning,
    },
    validityText: {
        fontSize: 8,
        color: '#92400E',
    },

    // Payment Terms
    paymentSection: {
        marginTop: 8,
        padding: 7,
        backgroundColor: colors.lightGray,
        borderRadius: 3,
    },
    paymentTitle: {
        fontSize: 8,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 4,
    },
    paymentSubtitle: {
        fontSize: 7,
        fontWeight: 'bold',
        color: colors.secondary,
        marginTop: 4,
        marginBottom: 2,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    paymentText: {
        fontSize: 7,
        color: colors.textMuted,
        marginBottom: 2,
        lineHeight: 1.3,
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
