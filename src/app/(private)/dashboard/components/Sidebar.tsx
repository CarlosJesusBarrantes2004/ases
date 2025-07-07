"use client";

import { Home, Users, FolderOpen, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Usuarios",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Proyectos",
    href: "/dashboard/projects",
    icon: FolderOpen,
  },
];

function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) router.push("/auth/login");
      else toast.error("Error al cerrar sesión.", { duration: 5000 });
    } catch (error) {
      console.error("Error de red al cerrar sesión:", error);
    }
  };

  return (
    <div className={cn("h-full flex flex-col", className)}>
      <div className="px-3 py-4 border-b">
        <div className="flex items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Home className="h-4 w-4" />
          </div>
          <h2 className="ml-2 text-lg font-semibold tracking-tight">
            Panel Admin
          </h2>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2 hover:cursor-pointer",
                    isActive && "bg-secondary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-3 py-4 border-t">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start gap-2 hover:cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
