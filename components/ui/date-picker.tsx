"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export function DatePicker({ value, onChange, placeholder = "Sélectionner une date" }: DatePickerProps) {
    const [open, setOpen] = React.useState(false)

    // Convert string value to Date object
    const dateValue = value ? new Date(value) : undefined

    const handleSelect = (date: Date | undefined) => {
        if (date && onChange) {
            // Convert Date to ISO string format (YYYY-MM-DD)
            const isoString = format(date, 'yyyy-MM-dd')
            onChange(isoString)
        }
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateValue && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateValue ? format(dateValue, "PPP", { locale: fr }) : placeholder}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={dateValue}
                    onSelect={handleSelect}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
