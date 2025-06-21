import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Usuario no encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error en la API GET /api/users/[id]:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    const body = await request.json();
    const { name, email, password } = body; // emailVerified se maneja más por NextAuth.js

    // Asegurarse de que al menos un campo relevante esté presente para actualizar
    if (!name && !email && !password) {
      return NextResponse.json(
        {
          message:
            "Al menos un campo (name, email, password) debe ser proporcionado para actualizar.",
        },
        { status: 400 }
      );
    }

    const dataToUpdate: {
      name?: string;
      email?: string;
      password?: string;
      emailVerified?: Date | null; // Lo usamos solo si el email cambia
      updatedAt: Date;
    } = {
      updatedAt: new Date(), // Siempre actualiza la marca de tiempo de actualización
    };

    if (name) dataToUpdate.name = name;

    if (email) {
      // 1. Obtener el usuario actual para comparar el email
      const currentUser = await prisma.user.findUnique({
        where: { id: id },
        select: { email: true },
      });

      if (!currentUser) {
        return NextResponse.json(
          { message: `Usuario con ID ${id} no encontrado.` },
          { status: 404 }
        );
      }

      // 2. Si el email ha cambiado
      if (currentUser.email !== email) {
        // Opcional: Verificar si el nuevo email ya existe para otro usuario
        const existingUserWithEmail = await prisma.user.findUnique({
          where: { email },
        });

        if (existingUserWithEmail && existingUserWithEmail.id !== id) {
          return NextResponse.json(
            {
              message:
                "El nuevo correo electrónico ya está registrado por otro usuario.",
            },
            { status: 409 }
          );
        }

        dataToUpdate.email = email;
        dataToUpdate.emailVerified = null; // Marcar como no verificado, requiere nueva verificación
        // IMPORTANTE: Aquí NO enviamos el email de verificación.
        // Se espera que tu frontend o un proceso posterior
        // inicie el flujo de NextAuth.js para enviar un nuevo
        // correo de verificación (ej. mediante un API endpoint dedicado).
      }
      // Si el email no cambió, no actualizamos emailVerified a menos que haya una razón específica.
      // NextAuth.js lo manejará cuando un usuario se verifique.
    }

    if (password) {
      // ADVERTENCIA: No se recomienda actualizar la contraseña directamente aquí
      // sin un proceso de verificación de la contraseña actual o un token de restablecimiento.
      // Idealmente, esto debería manejarse en una API route separada o a través de NextAuth.js.
      // Sin embargo, si lo permites por diseño de tu aplicación (ej. un administrador), hashea:
      dataToUpdate.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: dataToUpdate,
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error en la API PUT /api/users/[id]:", error);
    return NextResponse.json(
      { message: "Error al actualizar el usuario." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return NextResponse.json({
      message: `Usuario ${deletedUser.name} (ID: ${deletedUser.id}) eliminado correctamente.`,
    });
  } catch (error) {
    console.error("Error en la API DELETE /api/users/[id]:", error);
    return NextResponse.json(
      { message: "Error al eliminar el usuario." },
      { status: 500 }
    );
  }
}
