'use client'

import { Calendar, LayoutDashboard, Settings, ClipboardCheck } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Tarefas",
        url: "/tasks",
        icon: ClipboardCheck,
    },
    {
        title: "Categorias",
        url: "/categories",
        icon: Calendar,
    },
    {
        title: "Ajustes",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    const pathname = usePathname()
    const { open, isMobile, setOpenMobile } = useSidebar()
    console.log("state: ", open)
    useEffect(() => {
        if (isMobile) {
            setOpenMobile(false)
        }
    }, [pathname])
    return (

        <Sidebar className="mt-[8.8rem] xl:mt-20 w-80" variant="sidebar">

            <SidebarContent className="bg-theme-primary text-secondary !rounded-r-xl">

                <SidebarGroup>
                    <SidebarGroupLabel className="text-gray-200">Menu</SidebarGroupLabel>
                    <SidebarGroupContent>

                        <SidebarMenu>
                            {items.map((item) => {
                                const isActive = pathname === item.url;
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton className="" asChild>
                                            <Link
                                                className={`hover:!text-theme-primary text-lg flex space-x-2 !py-7 !px-5 !rounded-2xl ${isActive ? "bg-secondary text-theme-primary" : ""
                                                    }`}
                                                href={item.url}
                                            >
                                                <item.icon className="!size-7" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
