import Link from "next/link"
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
    FileText,
    Receipt,
    BookOpen,
    Settings,
    CreditCard
} from "lucide-react"

import { Input } from "@/components/ui/input"
import UserMenu from "@/components/user-menu"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>

            <AppSidebar />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
            </main>


        </SidebarProvider>
    )
}
