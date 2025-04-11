import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password)
      return NextResponse.json(
        { error: "Email y password son requeridos" },
        { status: 400 }
      );

    const existingUsers = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if ((existingUsers[0] as any[]).length > 0)
      return NextResponse.json(
        {
          error: "Este nombre de usuario ya está en uso",
        },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword]
    );

    const insertResult = result as any;
    const userId = insertResult.insertId;

    return NextResponse.json(
      { message: "Usuario registrado correctamente" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en el registro:", error);
    return NextResponse.json(
      { message: "Error en el servidor" },
      { status: 500 }
    );
  }
}
