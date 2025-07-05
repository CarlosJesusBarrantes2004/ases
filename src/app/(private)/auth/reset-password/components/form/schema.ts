import { z } from "zod";

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
  confirmPassword: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
});

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
