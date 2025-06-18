// src/middleware.ts
import { auth } from "@/lib/auth"; // Importa la instancia de auth desde tu configuración
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth; // req.auth es null si no hay sesión

  // Rutas protegidas (ej. cualquier cosa bajo /dashboard)
  const isProtectedRoute = nextUrl.pathname.startsWith("/dashboard");

  // Rutas de autenticación que no requieren estar logeado
  const isAuthRoute =
    nextUrl.pathname.startsWith("/login") ||
    nextUrl.pathname.startsWith("/forgot-password") ||
    nextUrl.pathname.startsWith("/verify-email"); // Añade todas tus rutas de auth aquí

  if (isProtectedRoute && !isLoggedIn) {
    // Si la ruta es protegida y el usuario NO está logeado, redirige a login
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (isAuthRoute && isLoggedIn) {
    // Si la ruta es de autenticación y el usuario YA está logeado, redirige al dashboard
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Permite el acceso a otras rutas (públicas o autenticadas)
  return NextResponse.next();
});

// Configuración del middleware: qué rutas debe interceptar
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Intercepta todas las rutas excepto APIs, estáticos, etc.
  // O un matcher más específico si solo quieres proteger ciertos prefijos
  // matcher: ["/dashboard/:path*", "/login", "/forgot-password", "/verify-email"],
};
