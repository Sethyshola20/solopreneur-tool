'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { FactureForm } from './facture-form';
import { FactureWithItems } from '@/lib/use-cases/factures';


interface FactureDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: FactureWithItems;
    factureId?: string;
}

export function FactureDialog({ open, onOpenChange, initialData, factureId }: FactureDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <FactureForm
                open={open}
                onOpenChange={onOpenChange}
                initialData={initialData}
                factureId={factureId}
            />
        </Dialog>
    )
}