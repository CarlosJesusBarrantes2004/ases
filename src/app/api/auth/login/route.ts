import { NextResponse } from "next/server";
import { headers } from "next/headers"; // Import headers from next/headers
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import config from "@/lib/config";

const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();

export async function POST(req: Request) {
  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for") || requestHeaders.get("x-real-ip");

  if (ip) {
    const entry = loginAttempts.get(ip) || {
      count: 0,
      lastAttempt: Date.now(),
    };

    if (Date.now() - entry.lastAttempt > config.WINDOW_MS) entry.count = 0;

    entry.count++;
    entry.lastAttempt = Date.now();
    loginAttempts.set(ip, entry);

    if (entry.count > config.MAX_ATTEMPTS)
      return NextResponse.json(
        {
          message:
            "Demasiados intentos de inicio de sesión. Por favor, intenta de nuevo en un minuto.",
        },
        { status: 429 }
      );
  } else {
    console.warn("Could not determine client IP for login attempt.");
  }

  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json(
        { message: "Email y contraseña son requeridos." },
        { status: 400 }
      );

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user)
      return NextResponse.json(
        {
          message: "Credenciales inválidas.",
        },
        { status: 401 }
      );

    if (!user.password)
      return NextResponse.json(
        {
          message:
            "Tu cuenta aún no tiene una contraseña establecida. Por favor, verifica tu correo y establece tu contraseña.",
        },
        { status: 403 }
      );

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return NextResponse.json(
        { message: "Credenciales inválidas." },
        { status: 401 }
      );

    if (!user.emailVerified)
      return NextResponse.json(
        { message: "Por favor, verifica tu correo electrónico." },
        { status: 403 }
      );

    const tokenPayload = {
      userId: user.id,
      email: user.email,
      name: user.name,
    };

    const secret = new TextEncoder().encode(config.JWT_SECRET);
    const token = await new SignJWT(tokenPayload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(secret);

    const response = NextResponse.json(
      {
        message: "Inicio de sesión exitoso.",
        user: { id: user.id, email: user.email, name: user.name },
      },
      { status: 200 }
    );

    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error en el login:", error);
    return NextResponse.json(
      {
        message: "Error interno del servidor al loguearse",
      },
      { status: 500 }
    );
  }
}
