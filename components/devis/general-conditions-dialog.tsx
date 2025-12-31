'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Badge } from '@/components/ui/badge';

const generalConditionsSchema = z.object({
    deliveryTimeWeeks: z.number().positive().optional().nullable(),
    deliverables: z.string().optional().nullable(),
    revisionCycles: z.number().int().positive().optional().nullable(),
    exclusions: z.string().optional().nullable(),
});

type GeneralConditionsFormData = z.infer<typeof generalConditionsSchema>;

interface GeneralConditionsDialogProps {
    value: GeneralConditionsFormData;
    onChange: (value: GeneralConditionsFormData) => void;
}

export function GeneralConditionsDialog({ value, onChange }: GeneralConditionsDialogProps) {
    const [open, setOpen] = useState(false);

    const form = useForm<GeneralConditionsFormData>({
        resolver: zodResolver(generalConditionsSchema),
        defaultValues: value || {
            deliveryTimeWeeks: null,
            deliverables: null,
            revisionCycles: null,
            exclusions: null,
        },
    });

    // Reset form values when dialog opens or value changes
    useEffect(() => {
        if (open) {
            form.reset(value || {
                deliveryTimeWeeks: null,
                deliverables: null,
                revisionCycles: null,
                exclusions: null,
            });
        }
    }, [open, value, form]);

    const hasConditions = Boolean(
        value?.deliveryTimeWeeks ||
        value?.deliverables ||
        value?.revisionCycles ||
        value?.exclusions
    );

    const onSubmit = (data: GeneralConditionsFormData) => {
        console.log('Dialog onSubmit data:', data);
        onChange(data);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button type="button" variant="outline" size="sm" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Conditions générales
                    {hasConditions && (
                        <Badge variant="secondary" className="ml-1 px-1 py-0 h-5">
                            <Check className="h-3 w-3" />
                        </Badge>
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Conditions générales du devis</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="deliveryTimeWeeks"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Délai de réalisation (en semaines)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Ex: 4"
                                            {...field}
                                            value={field.value ?? ''}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                field.onChange(val === '' ? null : parseInt(val));
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="deliverables"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Livrables</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Ex: Code source, documentation technique, accès repository Git"
                                            {...field}
                                            value={field.value ?? ''}
                                            onChange={(e) => field.onChange(e.target.value || null)}
                                            rows={3}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="revisionCycles"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cycles de révisions inclus</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Ex: 2"
                                            {...field}
                                            value={field.value ?? ''}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                field.onChange(val === '' ? null : parseInt(val));
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="exclusions"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Exclusions</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Ex: Hébergement, maintenance post-livraison, formations, évolutions futures"
                                            {...field}
                                            value={field.value ?? ''}
                                            onChange={(e) => field.onChange(e.target.value || null)}
                                            rows={3}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end gap-2 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setOpen(false)}
                            >
                                Annuler
                            </Button>
                            <Button type="submit">
                                Enregistrer
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
