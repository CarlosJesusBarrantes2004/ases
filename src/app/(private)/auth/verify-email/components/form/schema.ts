import { z } from "zod";

export const verifyEmailSchema = z.object({
  email: z.string().email({ message: "Introduce un correo válido." }),
});

export type VerifyEmailFormValues = z.infer<typeof verifyEmailSchema>;
