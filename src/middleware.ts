import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

const protectedRoutes = ["/dashboard", "/dashboard/blogs"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );

  if (isProtectedRoute) {
    const authResult = await verifyAuth(request);

    if (!authResult.isAuthenticated) {
      const redirectUrl = new URL("/auth/login", request.url);
      redirectUrl.searchParams.set("redirect", encodeURIComponent(path));
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
