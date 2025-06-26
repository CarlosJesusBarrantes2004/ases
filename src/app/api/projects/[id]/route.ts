import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getUserIdFromRequest } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

// Define una interfaz para el resultado esperado de Cloudinary upload.
interface CloudinaryUploadResult {
  secure_url: string;
  public_id?: string; // Incluido por si Cloudinary lo retorna y lo necesitas
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const projectId = parseInt(id, 10);

  if (isNaN(projectId))
    return NextResponse.json(
      { message: "ID de proyecto inválido." },
      { status: 400 }
    );

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        images: {
          select: { id: true, url: true },
        },
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    if (!project)
      return NextResponse.json(
        { message: "Proyecto no encontrado." },
        { status: 404 }
      );

    return NextResponse.json(project, { status: 200 });
  } catch (error: unknown) {
    console.error("Error al obtener proyecto por ID:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Error interno del servidor.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const projectId = parseInt(id, 10);
  const userId = await getUserIdFromRequest(req);

  if (isNaN(projectId))
    return NextResponse.json(
      { message: "ID de proyecto inválido." },
      { status: 400 }
    );

  if (!userId)
    return NextResponse.json({ message: "No autenticado." }, { status: 401 });

  try {
    const projectToUpdate = await prisma.project.findUnique({
      where: { id: projectId },
      include: { images: true },
    });

    if (!projectToUpdate)
      return NextResponse.json(
        { message: "Proyecto no encontrado." },
        { status: 404 }
      );

    if (projectToUpdate.userId !== userId)
      return NextResponse.json(
        {
          message: "No autorizado para actualizar este proyecto.",
        },
        { status: 403 }
      );

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const newFiles = formData
      .getAll("new_images")
      .filter((file) => file instanceof File) as File[];
    const existingImageUrlsToKeep = JSON.parse(
      (formData.get("existing_images_to_keep") as string) || "[]"
    ) as string[];

    if (!title || !description)
      return NextResponse.json(
        {
          message: "Título y descripción son requeridos.",
        },
        { status: 400 }
      );

    const totalImagesCount = existingImageUrlsToKeep.length + newFiles.length;

    if (totalImagesCount === 0)
      return NextResponse.json(
        { message: "Se requiere al menos una imagen para el proyecto." },
        { status: 400 }
      );

    if (totalImagesCount > 4)
      return NextResponse.json(
        { message: "Se permite un máximo de 4 imágenes por proyecto." },
        { status: 400 }
      );

    if (newFiles.some((file) => file.size === 0))
      return NextResponse.json(
        {
          message:
            "Algunos archivos nuevos están vacíos. Por favor, selecciona imágenes válidas.",
        },
        { status: 400 }
      );

    const imagesToDelete = projectToUpdate.images.filter(
      (img) => !existingImageUrlsToKeep.includes(img.url)
    );

    for (const img of imagesToDelete) {
      const publicId = img.url.split("/").pop()?.split(".")[0];
      if (publicId) {
        await cloudinary.uploader.destroy(`grupo-ases/projects/${publicId}`);
        await prisma.projectImage.delete({ where: { id: img.id } });
      }
    }

    const uploadedNewImageUrls: { url: string }[] = [];
    for (const file of newFiles) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = await new Promise<CloudinaryUploadResult>(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              { folder: "grupo-ases/projects" },
              (error, result) => {
                if (error) {
                  console.error(
                    "Error al subir nueva imagen a Cloudinary:",
                    error
                  );
                  return reject(
                    new Error("Error al subir nueva imagen a Cloudinary.")
                  );
                }
                if (result) {
                  resolve(result as CloudinaryUploadResult);
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
      uploadedNewImageUrls.push({ url: result.secure_url });
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: {
        title,
        description,
        images: { create: uploadedNewImageUrls },
      },
      include: {
        images: true,
        user: true,
      },
    });

    return NextResponse.json(
      {
        message: "Proyecto actualizado exitosamente.",
        project: updatedProject,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error al actualizar proyecto:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Error interno del servidor.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const projectId = parseInt(id, 10);
  const userId = await getUserIdFromRequest(req);

  if (isNaN(projectId))
    return NextResponse.json(
      { message: "ID de proyecto inválido." },
      { status: 400 }
    );

  if (!userId)
    return NextResponse.json({ message: "No autenticado." }, { status: 401 });

  try {
    const projectToDelete = await prisma.project.findUnique({
      where: { id: projectId },
      include: { images: true },
    });

    if (!projectToDelete)
      return NextResponse.json(
        { message: "Proyecto no encontrado." },
        { status: 404 }
      );

    if (projectToDelete.userId !== userId)
      return NextResponse.json(
        {
          message: "No autorizado para eliminar este proyecto.",
        },
        { status: 403 }
      );

    for (const image of projectToDelete.images) {
      const publicId = image.url.split("/").pop()?.split(".")[0];
      if (publicId)
        await cloudinary.uploader.destroy(`grupo-ases/projects/${publicId}`);
    }

    await prisma.project.delete({
      where: { id: projectId },
    });

    return NextResponse.json(
      { message: "Proyecto eliminado exitosamente." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error al eliminar proyecto:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Error interno del servidor.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
