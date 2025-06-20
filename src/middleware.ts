import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";
import Config from "./lib/config";

const PUBLIC_PATHS = [
  "/",
  "/contacto",
  "/proyectos",
  "/sobre-nosotros",
  "/auth/login",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify-email",
  "/auth/verify-and-set-password",
  "/api/auth/login",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
  "/api/auth/verify-email",
  "/api/auth/verify-and-set-password",
];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (
    PUBLIC_PATHS.includes(path) ||
    path.startsWith("/_next") ||
    path.startsWith("/api/_") ||
    path.endsWith(".png") ||
    path.endsWith(".jpg") ||
    path.endsWith(".jpeg") ||
    path.endsWith(".gif") ||
    path.endsWith(".svg") ||
    path.endsWith(".css") ||
    path.endsWith(".js") ||
    path.endsWith(".woff") ||
    path.endsWith(".woff2") ||
    path.endsWith(".ttf") ||
    path.endsWith(".json") ||
    path.endsWith(".txt") ||
    path.endsWith(".xml") ||
    path.endsWith(".ico")
  )
    return NextResponse.next();

  const token = req.cookies.get("auth_token")?.value;

  if (!token) {
    if (path !== "/auth/login")
      return NextResponse.redirect(new URL("/auth/login", req.url));

    return NextResponse.next();
  }

  try {
    const secret = new TextEncoder().encode(Config.JWT_SECRET);
    await jwtVerify(token, secret);

    return NextResponse.next();
  } catch (error) {
    console.error("Error al verificar token en middleware:", error);
    const response = NextResponse.redirect(
      new URL("/auth/login?error=SessionExpired", req.url)
    );
    response.cookies.delete("auth_token");
    return response;
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
