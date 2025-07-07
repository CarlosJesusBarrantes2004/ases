"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./components/Sidebar";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-screen bg-background flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-64 shrink-0 border-r bg-background lg:flex lg:flex-col">
          <Sidebar />
        </aside>
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 hover:cursor-pointer"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <VisuallyHidden.Root>
                  <SheetTitle>Menú de navegación principal</SheetTitle>
                </VisuallyHidden.Root>
                <Sidebar />
              </SheetContent>
            </Sheet>
            <h1 className="text-lg font-semibold">Panel Admin</h1>
          </div>
          <div className="flex-1 overflow-auto">
            <div className="container p-6 h-full">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
