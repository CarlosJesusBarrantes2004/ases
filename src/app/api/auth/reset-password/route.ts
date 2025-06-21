import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/db";

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

    const resetEntry = await prisma.passwordResetToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!resetEntry || resetEntry.expiresAt < new Date())
      return NextResponse.json(
        { message: "Token inválido o expirado." },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: resetEntry.userId },
      data: {
        password: hashedPassword,
        emailVerified: resetEntry.user.emailVerified || new Date(),
      },
    });

    await prisma.passwordResetToken.delete({
      where: { id: resetEntry.id },
    });

    return NextResponse.json(
      { message: "Contraseña restablecida exitosamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al restablecer contraseña:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
