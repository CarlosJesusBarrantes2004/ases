import prisma from "@/lib/db";
import { sendPasswordResetEmail } from "@/lib/email";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user)
      return NextResponse.json(
        {
          message:
            "Si el correo está registrado, se ha enviado un enlace para restablecer la contraseña.",
        },
        { status: 200 }
      );

    await prisma.passwordResetToken.deleteMany({
      where: { userId: user.id },
    });

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    await sendPasswordResetEmail(user.email, token);

    return NextResponse.json(
      {
        message:
          "Si el correo está registrado, se ha enviado un enlace para restablecer la contraseña.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al solicitar restablecimiento de contraseña:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
