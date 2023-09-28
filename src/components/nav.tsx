import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";


function DesktopView() {
    return (
        <div className="hidden p-3 px-10 md:flex md:justify-between md:items-center">
            <a href="/" className="active:scale-110 font-semibold text-2xl lg:text-4xl">Brand</a>
            <div className="flex items-center space-x-8">
                <a href="/" className="font-medium active:scale-110">Home</a>
                <a href="/" className="font-medium active:scale-110">Projects</a>
                <a href="/" className="font-medium active:scale-110">About</a>
            </div>
        </div>
    )
}

function MobileView() {
    return (
        <div className="p-3 px-5 flex justify-between items-center md:hidden">
            <a className="text-3xl font-semibold" href="/">Brand</a>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant={"ghost"} className="">
                        <Menu className="w-6 h-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <a href="/">Home</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="/">About</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="/">Team</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="/">Subscription</a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default function Nav() {
    return (
        <nav className="bg-transparent backdrop-blur-xl fixed top-0 w-full z-50">
            <DesktopView />
            <MobileView />
            <Separator />
        </nav>
    )
}
