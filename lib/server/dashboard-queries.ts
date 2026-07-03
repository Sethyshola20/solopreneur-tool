import { db } from "@/lib/db/drizzle";
import { clients, devis, devisItems, factures, facturesItems, recettes } from "@/lib/db/schema";
import { eq, desc, sql } from "drizzle-orm";

/**
 * Server-side data readers shared by the API routes and the dashboard's
 * server-side prefetch. Keeping a single query per resource guarantees the
 * prefetched (dehydrated) shape matches what the HTTP endpoints return.
 */

export function getClientsByUser(userId: string) {
    return db.select()
        .from(clients)
        .where(eq(clients.userId, userId))
        .orderBy(desc(clients.createdAt));
}

export function getDevisByUser(userId: string) {
    return db.select({
        id: devis.id,
        userId: devis.userId,
        clientId: devis.clientId,
        number: devis.number,
        status: devis.status,
        clientName: clients.name,
        date: devis.date,
        validUntil: devis.validUntil,
        total: devis.total,
        projectDescription: devis.projectDescription,
        specificationReference: devis.specificationReference,
        deliveryTimeWeeks: devis.deliveryTimeWeeks,
        deliverables: devis.deliverables,
        revisionCycles: devis.revisionCycles,
        exclusions: devis.exclusions,
        paymentSchedule: devis.paymentSchedule,
        postDeliverySupport: devis.postDeliverySupport,
        ipRightsTransfer: devis.ipRightsTransfer,
        createdAt: devis.createdAt,
        updatedAt: devis.updatedAt,
        // Aggregates the joined items into a single JSON array field.
        items: sql`json_agg(${devisItems})`.as("items"),
    })
        .from(devis)
        .leftJoin(devisItems, eq(devis.id, devisItems.devisId))
        .leftJoin(clients, eq(devis.clientId, clients.id))
        .where(eq(devis.userId, userId))
        .groupBy(devis.id, clients.name) // Grouping prevents row duplication
        .orderBy(desc(devis.createdAt));
}

export function getFacturesByUser(userId: string) {
    return db.select({
        id: factures.id,
        userId: factures.userId,
        clientId: factures.clientId,
        number: factures.number,
        status: factures.status,
        clientName: clients.name,
        items: sql`json_agg(${facturesItems})`.as("items"),
        date: factures.date,
        dueDate: factures.dueDate,
        serviceStartDate: factures.serviceStartDate,
        serviceEndDate: factures.serviceEndDate,
        total: factures.total,
        createdAt: factures.createdAt,
        updatedAt: factures.updatedAt,
        devisId: factures.devisId,
    })
        .from(factures)
        .leftJoin(facturesItems, eq(factures.id, facturesItems.factureId))
        .leftJoin(clients, eq(factures.clientId, clients.id))
        .where(eq(factures.userId, userId))
        .groupBy(factures.id, clients.name)
        .orderBy(desc(factures.createdAt));
}

export function getRecettesByUser(userId: string) {
    return db.select({
        id: recettes.id,
        date: recettes.date,
        amount: recettes.amount,
        paymentMethod: recettes.paymentMethod,
        factureId: recettes.factureId,
        clientId: recettes.clientId,
        userId: recettes.userId,
        createdAt: recettes.createdAt,
        clientName: clients.name,
        factureNumber: factures.number,
    })
        .from(recettes)
        .leftJoin(clients, eq(recettes.clientId, clients.id))
        .leftJoin(factures, eq(recettes.factureId, factures.id))
        .where(eq(recettes.userId, userId))
        .orderBy(desc(recettes.date));
}
