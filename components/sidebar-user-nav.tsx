"use client";

import { ChevronUp, Crown, LoaderIcon } from "lucide-react";
import { useTheme } from "next-themes";
import {
    IconLogout,
    IconMoonStars,
    IconSettings,
} from "@tabler/icons-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { User } from "better-auth";
import { SignOut } from "@/lib/connection";
import { Settings } from "@/lib/use-cases/settings";


export function SidebarUserNav({ user, company }: { user: User | null, company: Settings }) {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>

                        <SidebarMenuButton
                            data-testid="user-nav-button"
                            className="data-[state=open]:bg-sidebar-accent bg-background data-[state=open]:text-sidebar-accent-foreground h-10"
                        >
                            <Avatar className="size-8 rounded-lg grayscale">
                                <AvatarImage
                                    src={
                                        company.logoUrl ?? `https://avatar.vercel.sh/${user?.email}`
                                    }
                                    alt={user?.email ?? "User Avatar"}
                                />
                                <AvatarFallback className="rounded-lg">
                                    {user?.name?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <div className="flex items-center gap-1.5">
                                    <span className="truncate font-semibold">{user?.name}</span>
                                    {true && <Crown className="h-3.5 w-3.5 text-yellow-500" />}
                                </div>
                                <span className="text-muted-foreground truncate text-xs">
                                    {user?.email}
                                </span>
                            </div>
                            <ChevronUp className="ml-auto" />
                        </SidebarMenuButton>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        data-testid="user-nav-menu"
                        side="top"
                        className="w-[--radix-popper-anchor-width]"
                    >

                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-3 px-2 py-2.5 text-left">
                                <Avatar className="h-10 w-10 rounded-lg border-2 border-primary/10">
                                    <AvatarImage src={company.logoUrl ?? `https://avatar.vercel.sh/${user?.email}`} alt={user?.name ?? "User Avatar"} />
                                    <AvatarFallback className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold">
                                        {user?.name?.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left leading-tight">
                                    <span className="text-muted-foreground truncate text-xs">
                                        {user?.email}
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            data-testid="user-nav-item-theme"
                            className="cursor-pointer"
                            onSelect={() =>
                                setTheme(resolvedTheme === "light" ? "dark" : "light")
                            }
                        >
                            <IconMoonStars />
                            {`Toggle ${resolvedTheme === "light" ? "dark" : "light"} mode`}
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/settings">
                                <IconSettings />
                                Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => SignOut()} className="text-destructive focus:text-destructive">
                            <IconLogout />
                            <span>Log out</span>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
