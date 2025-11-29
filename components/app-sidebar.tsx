import { LayoutDashboard, Users, Settings, FileText, BarChart3, Receipt, CreditCard } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { db } from "@/lib/db/drizzle";
import { settings } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { SidebarUserNav } from "./sidebar-user-nav";


const menuItems = [
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
        title: "Paramètres",
        url: "/dashboard/settings",
        icon: Settings,
    },
]

export async function AppSidebar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const company = await db.select().from(settings).where(eq(settings.userId, session?.user.id!))

    const user = session?.user
    return (
        <Sidebar collapsible="icon" >
            <SidebarHeader className="border-b border-sidebar-border p-4 h-16">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <BarChart3 className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">{company[0].companyName}</span>
                        <span className="text-xs text-muted-foreground">{user?.name}</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t border-sidebar-border p-4">
                {user && <SidebarUserNav user={user} company={company[0]} />}
                <div className="text-xs text-muted-foreground">
                    © 2024 Micro-Entrepreneur
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
