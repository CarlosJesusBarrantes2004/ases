
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password)
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "Usuario registrado exitosamente",
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
