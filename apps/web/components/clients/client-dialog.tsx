'use client';

import { type ClientSchema } from '@/lib/validators/clients';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { ClientForm } from './client-form';

interface ClientDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: ClientSchema & { id?: string };
    clientId?: string;
}

export function ClientDialog({ open, onOpenChange, initialData, clientId }: ClientDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <ClientForm
                open={open}
                onOpenChange={onOpenChange}
                initialData={initialData}
                clientId={clientId}
            />
        </Dialog>
    )
}