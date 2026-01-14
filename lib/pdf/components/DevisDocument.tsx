'use client';

import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles, formatCurrency, formatDate } from '../styles';
import { DevisPDFData } from '../types';

interface DevisDocumentProps {
    data: DevisPDFData;
}

export const DevisDocument: React.FC<DevisDocumentProps> = ({ data }) => {
    const { number, date, validUntil, company, client, items, total, projectDescription, specificationReference, deliveryTimeWeeks, deliverables, revisionCycles, exclusions, paymentSchedule, postDeliverySupport, ipRightsTransfer } = data;
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.companyName}>{company.name} EI</Text>
                        {company.address && (
                            <Text style={styles.companyDetail}>{company.address}</Text>
                        )}
                        {company.email && (
                            <Text style={styles.companyDetail}>{company.email}</Text>
                        )}
                        {company.siret && (
                            <Text style={styles.siret}>SIRET : {company.siret}</Text>
                        )}
                        {company.ape && (
                            <Text style={styles.companyDetail}>Code APE : {company.ape}</Text>
                        )}

                    </View>
                    <View style={styles.headerRight}>
                        <Text style={styles.documentTitle}>DEVIS</Text>
                        <Text style={styles.documentNumber}>N° {number}</Text>
                        <Text style={styles.documentDate}>Date d'emission: {formatDate(date)}</Text>
                        {validUntil && <Text style={styles.documentDate}>Date de validité: {formatDate(validUntil)}</Text>}

                    </View>
                </View>

                {/* Client Section */}
                <View style={styles.clientSection}>
                    <Text style={styles.clientLabel}>Destinataire</Text>
                    <Text style={styles.clientName}>{client.name}</Text>
                    {client.address && (
                        <Text style={styles.clientDetail}>{client.address}</Text>
                    )}
                    {client.email && (
                        <Text style={styles.clientDetail}>{client.email}</Text>
                    )}
                    {client.phone && (
                        <Text style={styles.clientDetail}>{client.phone}</Text>
                    )}
                    {client.siret && (
                        <Text style={styles.clientDetail}>SIRET : {client.siret}</Text>
                    )}
                </View>

                {/* Items Table */}
                <View style={styles.table}>
                    {/* Header */}
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderCell, styles.colDescription]}>Description</Text>
                        <Text style={[styles.tableHeaderCell, styles.colQuantity]}>Qté</Text>
                        <Text style={[styles.tableHeaderCell, styles.colPrice]}>Prix Unit.</Text>
                        <Text style={[styles.tableHeaderCell, styles.colTotal]}>Total</Text>
                    </View>

                    {/* Rows */}
                    {items.map((item, index) => (
                        <View
                            key={item.id || index}
                            style={[styles.tableRow, {/*index % 2 === 1 && styles.tableRowAlt */ }]}
                        >
                            <Text style={[styles.tableCell, styles.colDescription]}>{item.description}</Text>
                            <Text style={[styles.tableCell, styles.colQuantity]}>{item.quantity}</Text>
                            <Text style={[styles.tableCell, styles.colPrice]}>{formatCurrency(item.price)}</Text>
                            <Text style={[styles.tableCell, styles.colTotal]}>{formatCurrency(item.total)}</Text>
                        </View>
                    ))}
                </View>

                {/* Totals */}
                <View style={styles.totalsSection}>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Sous-total HT</Text>
                        <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
                    </View>
                    <View style={styles.grandTotalRow}>
                        <Text style={styles.grandTotalLabel}>Total</Text>
                        <Text style={styles.grandTotalValue}>{formatCurrency(total)}</Text>
                    </View>
                </View>

                {/* Project Description */}
                {projectDescription && (
                    <View style={styles.paymentSection}>
                        <Text style={styles.paymentTitle}>Description de la prestation</Text>
                        <Text style={styles.paymentText}>{projectDescription}</Text>
                    </View>
                )}

                {/* Specification Reference */}
                {specificationReference && (
                    <View style={styles.legalSection}>
                        <Text style={styles.legalText}>
                            {specificationReference}
                        </Text>
                    </View>
                )}

                {/* VAT Exemption Notice */}
                <View style={styles.legalSection}>
                    <Text style={styles.vatExemption}>
                        TVA non applicable – article 293 B du CGI
                    </Text>
                </View>

                {/* Payment Terms (mandatory for B2B in France) */}
                <View style={styles.paymentSection}>
                    <Text style={styles.paymentTitle}>Conditions de paiement</Text>
                    <Text style={styles.paymentText}>
                        • Pénalités de retard : {company.latePaymentPenalty + " % du total" || "3 fois le taux d'intérêt légal"}
                    </Text>
                    <Text style={styles.paymentText}>
                        • Indemnité forfaitaire pour frais de recouvrement : {company.recoveryFee + " €" || "40 €"}
                    </Text>
                </View>

                {/* General Conditions - Combined Section */}
                {(deliveryTimeWeeks || deliverables || revisionCycles || exclusions || paymentSchedule || postDeliverySupport) && (
                    <View style={styles.paymentSection}>
                        <Text style={styles.paymentTitle}>Conditions de réalisation</Text>
                        {deliveryTimeWeeks && (
                            <Text style={styles.paymentText}>
                                • Délai : {deliveryTimeWeeks} {deliveryTimeWeeks === 1 ? 'semaine' : 'semaines'} à compter de la signature
                            </Text>
                        )}
                        {paymentSchedule && (
                            <Text style={styles.paymentText}>
                                • Modalités de paiement : {paymentSchedule}
                            </Text>
                        )}
                        {revisionCycles && (
                            <Text style={styles.paymentText}>
                                • Cycles de révisions : {revisionCycles} {revisionCycles === 1 ? 'cycle' : 'cycles'} de corrections inclus
                            </Text>
                        )}
                        {postDeliverySupport && (
                            <Text style={styles.paymentText}>
                                • Support post-livraison : {postDeliverySupport}
                            </Text>
                        )}
                        {deliverables && (
                            <>
                                <Text style={styles.paymentSubtitle}>Livrables</Text>
                                <Text style={styles.paymentText}>{deliverables}</Text>
                            </>
                        )}
                        {exclusions && (
                            <>
                                <Text style={styles.paymentSubtitle}>Exclusions</Text>
                                <Text style={styles.paymentText}>{exclusions}</Text>
                            </>
                        )}
                    </View>
                )}

                {/* IP Rights Transfer Clause */}
                {ipRightsTransfer && (
                    <View style={styles.paymentSection}>
                        <Text style={styles.paymentTitle}>Cession de droits de propriété intellectuelle</Text>
                        <Text style={styles.paymentText}>{ipRightsTransfer}</Text>
                    </View>
                )}

                {/* Legal Mentions */}
                {company.legalMentions && (
                    <View style={styles.legalSection}>
                        <Text style={styles.legalTitle}>Mentions légales</Text>
                        <Text style={styles.legalText}>{company.legalMentions}</Text>
                    </View>
                )}

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        {company.name} EI • {company.siret ? `SIRET ${company.siret}` : ''} • {company.email || ''}
                    </Text>
                </View>
            </Page>
        </Document>
    );
};

export default DevisDocument;
