import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: "El nombre de usuario es obligatorio" })
    .min(6, {
      message: "El nombre de usuario debe tener 6 caracteres como mínimo",
    }),
  password: z.string().min(1, { message: "La contraseña es requerida" }),
});

export type LoginFormType = z.infer<typeof loginSchema>;

export type LoginFormDefaultValues = {
  username: string;
  password: string;
};
