import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/db";
import config from "@/lib/config";

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword)
      return NextResponse.json(
        {
          message: "Token y nueva contraseña son requeridos.",
        },
        { status: 400 }
      );

    const verificationEntry = await prisma.emailVerification.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!verificationEntry || verificationEntry.expiresAt < new Date())
      return NextResponse.json(
        { message: "Enlace de verificación inválido o expirado." },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(newPassword, config.SALT_ROUNDS);

    await prisma.user.update({
      where: { id: verificationEntry.userId },
      data: {
        password: hashedPassword,
        emailVerified: new Date(),
      },
    });

    await prisma.emailVerification.delete({
      where: { id: verificationEntry.id },
    });

    return NextResponse.json(
      { message: "Correo verificado y contraseña establecida exitosamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al verificar correo y establecer contraseña:", error);
    return NextResponse.json(
      {
        message:
          "Error interno del servidor al verificar y resetear contraseña.",
      },
      { status: 500 }
    );
  }
}
