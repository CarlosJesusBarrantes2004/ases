
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { title, description } = await req.json();

    if (!title || !description )
      return NextResponse.json(
        {
          message: "Todos los campos son requeridos.",
        },
        { status: 400 }
      );

    const existingProject = await prisma.project.findUnique({
      where: { description },
    });

    if (existingProject)
      return NextResponse.json(
        {
          message: "El nombre del proyecto ya está registrado.",
        },
        { status: 409 }
      );

    

    const newProject = await prisma.project.create({
      data: { title, description },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "Proyecto registrado exitosamente",
        project: newProject,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al registrar proyecto:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
