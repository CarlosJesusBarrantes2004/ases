import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Introduce un correo válido." }),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
