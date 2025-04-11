import { verifyAuth } from "@/lib/auth";
import pool from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const [rows] = await pool.query(
      `SELECT b.id, b.title, b.content, b.created_at
            u.id as author_id, u.username as author
        FROM blogs b
        JOIN users u ON b.author_id = u.id
        WHERE b.id = ?`,
      [id]
    );

    const blogs = rows as any[];

    if (blogs.length === 0)
      return NextResponse.json(
        { error: "Error en el servidor" },
        { status: 500 }
      );
  } catch (error) {}
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authResult = await verifyAuth(request);
    if (!authResult.isAuthenticated)
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const userId = authResult.userId;
    const blogId = params.id;
    const { title, content, published } = await request.json();

    if (!title || !content)
      return NextResponse.json(
        { error: "Título y contenido son requeridos" },
        { status: 400 }
      );

    const [blogs] = await pool.query(
      "SELECT author_id FROM blogs WHERE id = ?",
      [blogId]
    );

    const blogResults = blogs as any[];

    if (blogResults.length === 0)
      return NextResponse.json(
        { error: "Blog no encontrado" },
        { status: 404 }
      );

    if (blogResults[0].author_id !== userId)
      return NextResponse.json(
        {
          error: "No tienes permiso para editar este blog",
        },
        { status: 403 }
      );

    await pool.query(
      "UPDATE blogs SET title = ?, content = ?, published = ? WHERE id = ?",
      [title, content, published, blogId]
    );

    return NextResponse.json({ message: "Blog actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar blog:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authResult = await verifyAuth(request);
    if (!authResult.isAuthenticated)
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const userId = authResult.userId;
    const blogId = params.id;

    const [blogs] = await pool.query(
      "SELECT author_id FROM blogs WHERE id = ?",
      [blogId]
    );

    const blogResults = blogs as any[];

    if (blogResults.length === 0)
      return NextResponse.json(
        { error: "Blog no encontrado" },
        { status: 404 }
      );

    if (blogResults[0].author_id !== userId)
      return NextResponse.json(
        {
          error: "No tienes permiso para eliminar este blog",
        },
        { status: 403 }
      );

    await pool.query("DELETE FROM blogs WHERE id = ?", [blogId]);

    return NextResponse.json({ message: "Blog eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar blog");
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
