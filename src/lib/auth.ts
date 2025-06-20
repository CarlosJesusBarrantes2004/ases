import { jwtVerify } from "jose";
import config from "./config";

export async function getUserIdFromRequest(
  req: Request
): Promise<string | null> {
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
    console.error(
      "Error al verificar el token en getUserIdFromRequest (single project API):",
      error
    );
    return null;
  }
}
