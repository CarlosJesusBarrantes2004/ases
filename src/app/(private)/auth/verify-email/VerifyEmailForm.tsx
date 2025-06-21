"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function VerifyEmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  // Para mostrar mensajes de éxito/error después de una redirección
  useEffect(() => {
    if (searchParams.get("verified")) {
      setMessage(
        "¡Tu correo ha sido verificado exitosamente! Ya puedes iniciar sesión."
      );
    }
    if (searchParams.get("error") === "InvalidVerificationLink") {
      setError(
        "Enlace de verificación inválido. Por favor, solicita uno nuevo."
      );
    }
    if (searchParams.get("error") === "ExpiredVerificationLink") {
      setError(
        "El enlace de verificación ha expirado. Por favor, solicita uno nuevo."
      );
    }
    if (searchParams.get("error") === "VerificationFailed") {
      setError(
        "Error al verificar el correo. Intenta de nuevo o contacta al soporte."
      );
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/auth/verify-email", {
        method: "POST", // Usar POST para reenviar el email de verificación
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
      } else {
        setError(
          data.message || "Error al reenviar el correo de verificación."
        );
      }
    } catch (err) {
      console.error("Error de red o desconocido:", err);
      setError("Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">
          Verificar Correo Electrónico
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {message && (
            <p className="text-green-500 text-sm text-center">{message}</p>
          )}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {!message &&
            !searchParams.get("verified") && ( // Solo mostrar el formulario si no hay un mensaje de éxito/error de URL
              <>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="hover:cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Reenviar Enlace de Verificación"}
                </button>
              </>
            )}
        </form>
        <div className="text-center text-sm">
          <Link
            href="/auth/login"
            className="font-medium hover:cursor-pointer text-indigo-600 hover:text-indigo-500"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
