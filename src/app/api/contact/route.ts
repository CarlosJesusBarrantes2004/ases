import { contactSchema } from "@/app/contacto/components/form/schema";
import {
  EMAIL_FROM,
  EMAIL_HOST,
  EMAIL_PASSWORD,
  EMAIL_PORT,
  EMAIL_USER,
} from "@/config";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const validatedData = contactSchema.parse(data);

    const mailToCompany = {
      from: `"Formulario Web" <${EMAIL_FROM}>`, // Remitente será el correo institucional
      to: EMAIL_USER, // Destinatario es la empresa
      replyTo: validatedData.email, // Permite responder directamente al usuario
      subject: `Nuevo contacto: ${validatedData.typeService || "General"} - ${
        validatedData.fullName
      }`,
      html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${validatedData.fullName}</p>
          <p><strong>Correo:</strong> ${validatedData.email}</p>
          <p><strong>Teléfono:</strong> ${
            validatedData.phone || "No proporcionado"
          }</p>
          <p><strong>Servicio:</strong> ${
            validatedData.typeService || "No especificado"
          }</p>
          <h3>Mensaje:</h3>
          <p>${validatedData.message}</p>
        `,
    };

    const mailToUser = {
      from: `"Grupo Ases" <${EMAIL_FROM}>`, // Remitente será el correo institucional
      to: validatedData.email, // Destinatario es el usuario
      subject: `Gracias por contactar a Grupo Ases`,
      html: `
          <h2>Gracias por contactarnos, ${validatedData.fullName}</h2>
          <p>Hemos recibido tu mensaje relacionado con nuestros servicios de ${
            validatedData.typeService || "consultoría"
          }.</p>
          <p>Uno de nuestros representantes se pondrá en contacto contigo a la brevedad.</p>
          <p>Resumen de tu consulta:</p>
          <p>${validatedData.message}</p>
          <hr>
          <p>Atentamente,</p>
          <p>El equipo de Grupo Ases</p>
        `,
    };

    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(mailToUser);

    return NextResponse.json({
      success: true,
      message:
        "Mensaje enviado correctamente. Pronto nos pondremos en contacto contigo.",
    });
  } catch (error) {
    console.log(error);
  }
}
