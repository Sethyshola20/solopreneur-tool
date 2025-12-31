'use client'

import Link from "next/link"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Settings, FileText, BarChart3, Receipt, CreditCard, Calculator } from "lucide-react"

export default function MenuItems() {
    const pathname = usePathname();
    const items = [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Clients",
            url: "/dashboard/clients",
            icon: Users,
        },
        {
            title: "Devis",
            url: "/dashboard/devis",
            icon: CreditCard,
        },
        {
            title: "Factures",
            url: "/dashboard/factures",
            icon: Receipt,
        },
        {
            title: "Livres Recettes",
            url: "/dashboard/recettes",
            icon: FileText,
        },
        {
            title: "Stripe",
            url: "/dashboard/stripe",
            icon: BarChart3,
        },
        {
            title: "Impots",
            url: "/dashboard/impots",
            icon: Calculator,
        },
        {
            title: "Paramètres",
            url: "/dashboard/settings",
            icon: Settings,
        },
    ]
    return (
        <SidebarMenu>
            {items.map((item) => {
                return (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <Link href={item.url} className={pathname === item.url ? "bg-primary text-primary-foreground" : ""}>
                                <item.icon />
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                )
            })}
        </SidebarMenu>
    )
}