import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .regex(/^9\d{8}$/, "El número debe tener 9 dígitos y comenzar con 9")
    .refine((val) => val.length === 9, "Debe contener exactamente 9 dígitos"),
  company: z.string().optional(),
  service: z.string().min(1, "Por favor seleccione un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
