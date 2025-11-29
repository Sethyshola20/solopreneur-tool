
import { type InferSelectModel } from 'drizzle-orm';
import { settings } from '@/lib/db/schema';
import { SettingsSchema } from '../validators/settings';
import { request } from '@/api_service';

export type Settings = InferSelectModel<typeof settings>;

export async function getSettings(): Promise<Settings | null> {
    const res = await request<Settings | null>('/settings');
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data;
}

export async function saveSettings(data: SettingsSchema): Promise<Settings> {
    const res = await request<Settings>('/settings', {
        method: 'POST',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to save settings');
    }
    return res.data;
}
