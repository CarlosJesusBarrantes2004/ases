// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/db'; // Asegúrate de que esta ruta a tu instancia de Prisma sea correcta
import bcrypt from 'bcrypt';

// Definimos la interfaz para los parámetros de la ruta
interface Context {
  params: {
    id: string; // El id de la ruta dinámica ahora es un string
  };
}

/**
 * GET /api/users/[id]
 * Obtiene un usuario por su ID.
 */
export async function GET(request: Request, context: Context) {
  const { id } = context.params;

  try {
    const project = await prisma.project.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!project) {
      return NextResponse.json({ message: 'Proyecto no encontrado.' }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error en la API GET /api/projects/[id]:', error);
    return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
  }
}

/**
 * PUT /api/users/[id]
 * Edita un usuario por su ID.
 */
export async function PUT(request: Request, context: Context) {
  const { id } = context.params;

  try {
    const body = await request.json();
    const { title, description } = body; // emailVerified se maneja más por NextAuth.js

    // Asegurarse de que al menos un campo relevante esté presente para actualizar
    if (!title && !description) {
      return NextResponse.json(
        { message: 'Al menos un campo (title, description) debe ser proporcionado para actualizar.' },
        { status: 400 }
      );
    }

    const dataToUpdate: {
      title?: string;
      description?: string;
      updatedAt: Date;
    } = {
      updatedAt: new Date(), // Siempre actualiza la marca de tiempo de actualización
    };

    if (title) dataToUpdate.title = title;

    if (description) dataToUpdate.description = description;

    const updatedProject = await prisma.project.update({
      where: {
        id: id,
      },
      data: dataToUpdate,
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(updatedProject);
  } catch (error: any) {
    if (error.code === 'P2025') { // Prisma error code for "record to update not found"
      return NextResponse.json({ message: `Proyecto con ID ${id} no encontrado.` }, { status: 404 });
    }
    console.error('Error en la API PUT /api/users/[id]:', error);
    return NextResponse.json({ message: 'Error al actualizar el proyecto.' }, { status: 500 });
  }
}

/**
 * DELETE /api/users/[id]
 * Elimina un usuario por su ID.
 */
export async function DELETE(request: Request, context: Context) {
  const { id } = context.params;

  try {
    const deletedProject = await prisma.user.delete({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        description: true,
      }
    });

    return NextResponse.json({ message: `Proyecto ${deletedProject.title} (ID: ${deletedProject.id}) eliminado correctamente.` });
  } catch (error: any) {
    if (error.code === 'P2025') { // Prisma error code for "record to delete not found"
      return NextResponse.json({ message: `Proyecto con ID ${id} no encontrado.` }, { status: 404 });
    }
    console.error('Error en la API DELETE /api/users/[id]:', error);
    return NextResponse.json({ message: 'Error al eliminar el proyecto.' }, { status: 500 });
  }
}