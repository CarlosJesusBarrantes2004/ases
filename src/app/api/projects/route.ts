import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import { getUserIdFromRequest } from "@/lib/auth";

// Define una interfaz para el resultado esperado de Cloudinary upload
interface CloudinaryUploadResult {
  secure_url: string;
  // Puedes añadir otras propiedades que Cloudinary retorne y que necesites,
  // como `public_id`, `width`, `height`, etc.
}

export async function GET() {
  try {
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
  } catch (error: unknown) {
    // CAMBIO: Tipado a 'unknown'
    console.error("Error al obtener proyectos:", error);
    return NextResponse.json(
      { message: "Error interno del servidor al obtener proyectos." },
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
    const files = formData
      .getAll("images")
      .filter((file) => file instanceof File) as File[];

    if (!title || !description)
      return NextResponse.json(
        {
          message: "Título y descripción son requeridos.",
        },
        { status: 400 }
      );

    if (!files || files.length === 0)
      return NextResponse.json(
        {
          message: "Se requiere almenos una imagen para el proyecto.",
        },
        { status: 400 }
      );

    if (files.length > 4)
      return NextResponse.json(
        {
          message: "Se permite un máximo de 4 imágenes por proyecto.",
        },
        { status: 400 }
      );

    if (files.some((file) => file.size === 0))
      return NextResponse.json(
        {
          message:
            "Algunos archivos estás vacíos. Por favor, selecciona imágenes válidas.",
        },
        { status: 400 }
      );

    const uploadImageUrls: { url: string }[] = [];
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = await new Promise<CloudinaryUploadResult>(
        (resolve, reject) => {
          // CAMBIO: Usa CloudinaryUploadResult
          cloudinary.uploader
            .upload_stream(
              { folder: "grupo-ases/projects" },
              (error, result) => {
                if (error) {
                  console.error("Error al subir a Cloudinary:", error);
                  return reject(
                    new Error("Error al subir la imagen a Cloudinary.")
                  );
                }
                // Asegúrate de que 'result' no es null/undefined antes de usarlo
                if (result) {
                  resolve(result as CloudinaryUploadResult); // CAMBIO: Asercion a CloudinaryUploadResult
                } else {
                  reject(
                    new Error("Cloudinary upload did not return a result.")
                  );
                }
              }
            )
            .end(buffer);
        }
      );

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
  } catch (error: unknown) {
    // CAMBIO: Tipado a 'unknown'
    console.error("Error al crear proyecto:", error);
    // Puedes añadir una verificación más específica si 'error' tiene una propiedad 'message'
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Error interno del servidor al crear el proyecto.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
