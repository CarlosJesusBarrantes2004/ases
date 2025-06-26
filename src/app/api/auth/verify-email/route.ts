import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user)
      return NextResponse.json(
        {
          message:
            "Si el correo electrónico existe y no está verificado, se ha enviado un nuevo enlace de verificación.",
        },
        { status: 200 }
      );

    if (user.emailVerified)
      return NextResponse.json({
        message: "El correo electrónico ya está verificado.",
      });

    await prisma.emailVerification.deleteMany({
      where: { userId: user.id },
    });

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.emailVerification.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    await sendVerificationEmail(user.email, token);

    return NextResponse.json(
      {
        message:
          "Si el correo electrónico existe y no está verificado, se ha enviado un nuevo enlace de verificación.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al reenviar correo de verificación:", error);
    return NextResponse.json(
      { message: "Error interno del servidor al reenviar verificación." },
      { status: 500 }
    );
  }
}

/*export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token)
    return NextResponse.redirect(
      new URL("/login?error=InvalidVerificationLink", req.url)
    );

  try {
    const verificationEntry = await prisma.emailVerification.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!verificationEntry || verificationEntry.expiresAt < new Date())
      return NextResponse.redirect(
        new URL("/login?error=ExpiredVerificationLink", req.url)
      );

    await prisma.user.update({
      where: { id: verificationEntry.userId },
      data: { emailVerified: new Date() },
    });

    await prisma.emailVerification.delete({
      where: { id: verificationEntry.id },
    });

    return NextResponse.redirect(new URL("/login?verified=true", req.url));
  } catch (error) {
    console.error("Error al verificar correo electrónico:", error);
    return NextResponse.redirect(
      new URL("/login?error=VerificationFailed", req.url)
    );
  }
}
*/
