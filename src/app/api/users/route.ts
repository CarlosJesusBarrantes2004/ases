import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email)
      return NextResponse.json(
        {
          message: "Todos los campos son requeridos.",
        },
        { status: 400 }
      );

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser)
      return NextResponse.json(
        {
          message: "El correo electrónico ya está registrado.",
        },
        { status: 409 }
      );

    const newUser = await prisma.user.create({
      data: { name, email, emailVerified: null },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        createdAt: true,
      },
    });

    const verificationToken = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.emailVerification.create({
      data: {
        userId: newUser.id,
        token: verificationToken,
        expiresAt,
      },
    });

    await sendVerificationEmail(newUser.email, verificationToken);

    return NextResponse.json(
      {
        message:
          "Usuario registrado exitosamente. Se ha enviado un correo para verificar y establecer la contraseña.",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
