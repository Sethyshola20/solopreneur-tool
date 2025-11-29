'use client';

import { Dialog } from '@/components/ui/dialog';
import { DevisForm } from './devis-form';
import { DevisWithItems } from '@/lib/use-cases/devis';

interface DevisDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    devisId?: string;
    initialData?: DevisWithItems
}

export function DevisDialog({ open, onOpenChange, devisId, initialData }: DevisDialogProps) {

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DevisForm
                open={open}
                onOpenChange={onOpenChange}
                devisId={devisId}
                initialData={initialData}
            />
        </Dialog>
    );
}
