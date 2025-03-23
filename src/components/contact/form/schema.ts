import { z } from "zod";

export const SERVICE_TYPES = ["Contabilidad", "Jurídico", "Digital"] as const;

export const contactSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre es obligatorio" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  phone: z.string().optional(),
  typeService: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z
      .enum(SERVICE_TYPES, {
        required_error: "Por favor seleccione un servicio",
      })
      .optional()
  ),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(500, { message: "El mensaje no debe exceder los 500 caracteres" }),
});

export type ContactFormType = z.infer<typeof contactSchema>;

export type ContactFormDefaultValues = {
  fullName: string;
  email: string;
  phone: string;
  typeService: (typeof SERVICE_TYPES)[number] | undefined;
  message: string;
};
