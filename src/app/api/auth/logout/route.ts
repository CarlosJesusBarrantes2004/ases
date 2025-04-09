import { NODE_ENV } from "@/config";
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logout exitoso" });

  response.cookies.set({
    name: "auth_token",
    value: "",
    httpOnly: true,
    expires: new Date(0),
    secure: NODE_ENV === "production",
    sameSite: "strict",
  });

  return response;
}
