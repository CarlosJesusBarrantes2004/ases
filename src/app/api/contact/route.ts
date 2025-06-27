import { contactSchema } from "@/app/(public)/contacto/components/form/schema";
import config from "@/lib/config";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: config.EMAIL_HOST,
  port: Number(config.EMAIL_PORT),
  secure: true,
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASSWORD,
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
      from: `"Formulario Web" <${config.EMAIL_FROM}>`,
      to: config.EMAIL_USER,
      replyTo: validatedData.email,
      subject: `Nuevo contacto: ${validatedData.typeService || "General"} - ${
        validatedData.fullName
      }`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #212121;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #bdbdbd;
              border-radius: 5px;
            }
            .header {
              background-color: #d32f2f;
              color: #ffffff;
              padding: 15px;
              border-radius: 5px 5px 0 0;
              margin: -20px -20px 20px;
            }
            h2 {
              margin: 0;
              padding: 0;
            }
            .content {
              padding: 0 15px;
            }
            .message-box {
              background-color: #f5f5f5;
              padding: 15px;
              border-left: 4px solid #d32f2f;
              margin: 15px 0;
            }
            .footer {
              border-top: 1px solid #bdbdbd;
              margin-top: 20px;
              padding-top: 15px;
              font-size: 12px;
              color: #424242;
            }
            strong {
              color: #d32f2f;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Nuevo mensaje de contacto</h2>
            </div>
            <div class="content">
              <p><strong>Nombre:</strong> ${validatedData.fullName}</p>
              <p><strong>Correo:</strong> ${validatedData.email}</p>
              <p><strong>Teléfono:</strong> ${
                validatedData.phone || "No proporcionado"
              }</p>
              <p><strong>Servicio:</strong> ${
                validatedData.typeService || "No especificado"
              }</p>
              
              <h3>Mensaje:</h3>
              <div class="message-box">
                ${validatedData.message}
              </div>
            </div>
            <div class="footer">
              Mensaje recibido a través del formulario de contacto en el sitio web.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const mailToUser = {
      from: `"Grupo Ases" <${config.EMAIL_FROM}>`,
      to: validatedData.email,
      subject: `Gracias por contactar a Grupo Ases`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #212121;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #bdbdbd;
              border-radius: 5px;
            }
            .header {
              background-color: #d32f2f;
              color: #ffffff;
              padding: 15px;
              border-radius: 5px 5px 0 0;
              margin: -20px -20px 20px;
              text-align: center;
            }
            h2 {
              margin: 0;
              padding: 0;
            }
            .content {
              padding: 0 15px;
            }
            .message-recap {
              background-color: #f5f5f5;
              padding: 15px;
              border-left: 4px solid #d32f2f;
              margin: 15px 0;
              font-style: italic;
            }
            .footer {
              border-top: 1px solid #bdbdbd;
              margin-top: 20px;
              padding-top: 15px;
              font-size: 12px;
              color: #424242;
              text-align: center;
            }
            .logo-text {
              font-size: 24px;
              font-weight: bold;
              text-align: center;
              margin-bottom: 20px;
            }
            .red {
              color: #d32f2f;
            }
            .black {
              color: #212121;
            }
            .signature {
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Gracias por contactarnos</h2>
            </div>
            <div class="content">
              <div class="logo-text">
                <span class="red">Grupo</span><span class="black">Ases</span>
              </div>
              
              <p>Estimado/a <strong>${validatedData.fullName}</strong>,</p>
              
              <p>Hemos recibido tu mensaje relacionado con nuestros servicios de <strong>${
                validatedData.typeService || "consultoría"
              }</strong>.</p>
              
              <p>Uno de nuestros representantes se pondrá en contacto contigo a la brevedad para brindarte la asesoría que necesitas.</p>
              
              <p>Resumen de tu consulta:</p>
              <div class="message-recap">
                ${validatedData.message}
              </div>
              
              <div class="signature">
                <p>Atentamente,</p>
                <p><strong>El equipo de Grupo Ases</strong></p>
              </div>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} Grupo Ases. Todos los derechos reservados.
            </div>
          </div>
        </body>
        </html>
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
