"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        router.push("/auth/login"); // Redirigir al login
      } else {
        console.error("Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Error de red al cerrar sesión:", error);
    }
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 hover:cursor-pointer"
      >
        Cerrar Sesión
      </button>
    </header>
  );
}

export default Header;
