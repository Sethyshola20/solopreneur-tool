"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            className={cn(
                "inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground active:scale-[0.94]",
                className
            )}
            aria-label="Changer de thème"
        >
            <Sun className="hidden size-4 dark:block" strokeWidth={1.5} />
            <Moon className="size-4 dark:hidden" strokeWidth={1.5} />
        </button>
    );
}
