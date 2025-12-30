"use client"


import { Button } from "./ui/button"

import { CircleUser, LogOut, Settings2 } from "lucide-react"
import { authClient } from "@/lib/auth/auth-client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SignOut } from "@/lib/connection";
import Link from "next/link";

export default function UserMenu() {
    const { data: session, error } = authClient.useSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <CircleUser className="h-4 w-4" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem className="flex space-y-1 leading-none">
                    <CircleUser className="h-4 w-4" />
                    <p className="font-medium">{session?.user?.name}</p>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex space-y-1 leading-none" asChild>
                    <Link href="/dashboard/settings">
                        <Settings2 className="h-4 w-4" />
                        <p className="font-medium">Paramètres</p>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => SignOut()}>
                    <LogOut className="h-4 w-4" />
                    <p className="font-medium">Déconnexion</p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}