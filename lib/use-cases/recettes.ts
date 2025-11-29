import { type InferSelectModel } from 'drizzle-orm';
import { recettes } from '@/lib/db/schema';
import { request } from '@/api_service';

export type Recette = InferSelectModel<typeof recettes>;
export type RecetteWithClientAndFacture = Recette & {
    clientName: string;
    factureNumber: string;
}

export async function getRecettesList() {
    const res = await request<RecetteWithClientAndFacture[]>("/recettes");
    console.log('res', res)
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data
}
