import { z } from "zod";

export const verifyAndSetPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
  confirmPassword: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
});

export type VerifyAndSetPasswordFormValues = z.infer<
  typeof verifyAndSetPasswordSchema
>;
