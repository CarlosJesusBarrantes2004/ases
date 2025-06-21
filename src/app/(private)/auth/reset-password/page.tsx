"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams(); // This is the problematic line during prerender

  // New state to track if the component is mounted on the client
  const [isMounted, setIsMounted] = useState(false);

  // Initialize token only after mounting
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true); // Mark as mounted once on the client

    // Only try to get the token once mounted
    if (isMounted) {
      const urlToken = searchParams.get("token");
      setToken(urlToken);

      if (!urlToken) {
        setError("Token de restablecimiento no encontrado en la URL.");
      }
    }
  }, [isMounted, searchParams]); // Add searchParams to dependency array for useEffect

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    // Ensure token is available before proceeding with fetch
    if (!token) {
      // Use the 'token' state here
      setError("Token de restablecimiento inválido o no cargado.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        router.push("/login?reset=true"); // Redirigir al login con un mensaje de éxito
      } else {
        setError(data.message || "Error al restablecer la contraseña.");
      }
    } catch (err) {
      console.error("Error de red o desconocido:", err);
      setError("Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  // Optionally, show a loading state until the component is mounted and token is retrieved
  if (!isMounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-600">Cargando...</p>
      </div>
    );
  }

  // Once mounted, render the actual form
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">
          Establecer Nueva Contraseña
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {message && (
            <p className="text-green-500 text-sm text-center">{message}</p>
          )}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Display a specific error if token is missing after mounting */}
          {token === null &&
            error === "Token de restablecimiento no encontrado en la URL." && (
              <p className="text-red-500 text-sm text-center">
                No se pudo obtener el token de restablecimiento. Por favor,
                asegúrate de usar el enlace completo.
              </p>
            )}

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Nueva Contraseña
            </label>
            <input
              id="newPassword"
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmar Contraseña
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            disabled={loading || !token} // Disable if loading or token is not yet available
          >
            {loading ? "Restableciendo..." : "Restablecer Contraseña"}
          </button>
        </form>
        <div className="text-center text-sm">
          <Link
            href="/auth/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
