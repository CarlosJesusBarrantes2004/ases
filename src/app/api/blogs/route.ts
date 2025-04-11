import { verifyAuth } from "@/lib/auth";
import pool from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = parseInt(searchParams.get("offset") || "0");

    const [rows] = await pool.query(
      `SELECT b.id, b.title, b.content, b.created_at,
            u.id as author_id, u.username as author        
        FROM blogs b
        JOIN users u ON b.author_id = u.id
        ORDER BY b.created_at DESC
        LIMIT ? OFFSET ?`,
      [limit, offset]
    );

    return NextResponse.json({ blogs: rows });
  } catch (error) {
    console.error("Error al obtener blogs:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authResult = await verifyAuth(request);
    if (!authResult.isAuthenticated)
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const userId = authResult.userId;
    const { title, content } = await request.json();

    if (!title || !content)
      return NextResponse.json(
        { error: "Título y contenido son requeridos" },
        { status: 400 }
      );

    const [result] = await pool.query(
      "INSERT INTO blogs (title, content, author_id) VALUES (?, ?, ?)",
      [title, content, userId]
    );

    const insertResult = result as any;
    const blogId = insertResult.insertId;

    return NextResponse.json(
      {
        message: "Blog creado correctamente",
        blogId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear blog:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
