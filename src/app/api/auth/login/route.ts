import { JWT_SECRET, NODE_ENV } from "@/config";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password)
      return NextResponse.json(
        { error: "Username y password son requeridos" },
        { status: 400 }
      );

    const [rows] = await pool.query(
      "SELECT id, username, password FROM users WHERE username = ?",
      [username]
    );

    const users = rows as any[];

    if (users.length === 0)
      return NextResponse.json(
        { error: "Credenciales incorrectas" },
        { status: 401 }
      );

    const user = users[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return NextResponse.json(
        { error: "Credenciales incorrectas" },
        { status: 401 }
      );

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const response = NextResponse.json({
      message: "Login exitoso",
      user: { id: user.id, email: user.email },
    });

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400,
    });

    return response;
  } catch (error) {
    console.error("Error en login:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
