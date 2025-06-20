import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import config from "@/lib/config";
import { jwtVerify } from "jose";

async function getUserIdFromRequest(req: Request): Promise<string | null> {
  const cookieHeader = req.headers.get("cookie");

  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";").map((c) => c.trim());
  const authTokenCookie = cookies.find((c) => c.startsWith("auth_token="));

  if (!authTokenCookie) return null;

  const token = authTokenCookie.split("auth_token=")[1];

  if (!token) return null;

  try {
    const secret = new TextEncoder().encode(config.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload.userId as string;
  } catch (error) {
    console.error("Error al verificar el token en la API de proyectos:", error);
    return null;
  }
}

export async function GET(req: Request) {
  try {
    // if (!userId) { return NextResponse.json({ message: 'No autenticado.' }, { status: 401 }); }
    // const projects = await prisma.project.findMany({ where: { userId }, ... });

    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        images: {
          select: { id: true, url: true },
        },
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error al obtener proyectos:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const userId = await getUserIdFromRequest(req);

  if (!userId)
    return NextResponse.json(
      { message: "Acceso no autorizado. Se requiere autenticación." },
      { status: 401 }
    );

  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const files = formData.getAll("images") as File[];

    if (!title || !description)
      return NextResponse.json(
        {
          message: "Título y descripción son requeridos.",
        },
        { status: 400 }
      );

    if (!files || files.length === 0 || files[0].size === 0)
      return NextResponse.json(
        {
          message: "Se requiere almenos una imagen para el proyecto.",
        },
        { status: 400 }
      );

    const uploadImageUrls: { url: string }[] = [];
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = (await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "grupo-ases/projects" }, (error, result) => {
            if (error) {
              console.error("Error al subir a Cloudinary:", error);
              return reject(
                new Error("Error al subir la imagen a Cloudinary.")
              );
            }
            resolve(result);
          })
          .end(buffer);
      })) as any;

      uploadImageUrls.push({ url: result.secure_url });
    }

    if (uploadImageUrls.length === 0)
      return NextResponse.json(
        { message: "No se pudieron subir las imágenes." },
        { status: 500 }
      );

    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        userId,
        images: {
          create: uploadImageUrls,
        },
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(
      { message: "Proyecto creado exitosamente.", project: newProject },
      { status: 201 }
    );
  } catch (error) {}
}
