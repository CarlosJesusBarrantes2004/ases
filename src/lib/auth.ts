import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { JWT_SECRET as SECRET } from "@/config";

const JWT_SECRET =
  SECRET || "KPdkqQtYsrC3qXitVWnbjFdFsz1rkI8AvEl1wiKqZCT6PLnAE7RT2RHbQqWPLSFK";

export async function verifyAuth(request: NextRequest) {
  try {
    const token = request.cookies.get("auth_token")?.value;

    if (!token) return { isAuthenticated: false, userId: null };

    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: number;
      email: string;
    };

    return {
      isAuthenticated: true,
      userId: decoded.userId,
      email: decoded.email,
    };
  } catch (error) {
    console.error("Error verificando autenticación:", error);
    return { isAuthenticated: false, userId: null };
  }
}
