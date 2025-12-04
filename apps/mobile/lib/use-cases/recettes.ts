import { request } from '@/api_service';

export type Recette = {
    id: string;
    userId: string;
    factureId: string | null;
    clientId: string | null;
    amount: string;
    date: string;
    paymentMethod: string | null;
    createdAt: Date | string;
};

export type RecetteWithClientAndFacture = Recette & {
    clientName: string;
    factureNumber: string;
};

export async function getRecettesList(): Promise<RecetteWithClientAndFacture[]> {
    const res = await request<RecetteWithClientAndFacture[]>("/recettes");
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data || [];
}

