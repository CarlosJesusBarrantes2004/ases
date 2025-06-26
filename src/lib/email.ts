import nodemailer from "nodemailer";
import config from "./config";

export async function sendVerificationEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: config.EMAIL_HOST,
    port: config.EMAIL_PORT,
    secure: config.EMAIL_SECURE,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASSWORD,
    },
  });

  const verificationUrl = `${config.NEXT_PUBLIC_APP_URL}/auth/verify-and-set-password?token=${token}`;

  const htmlContent = `<p>Hola,</p><p>Tu cuenta en el panel de administración de Grupo Ases ha sido creada. Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico y establecer tu contraseña:</p><p><a href="${verificationUrl}">${verificationUrl}</a></p><p>Una vez verificado, podrás iniciar sesión con tu correo electrónico y tu contraseña.</p><p>Este enlace es válido por 10 minutos.</p>`;

  await transporter.sendMail({
    from: config.EMAIL_FROM,
    to: email,
    subject: "Verifica tu dirección de correo electrónico de Grupo Ases",
    html: htmlContent,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: config.EMAIL_HOST,
    port: config.EMAIL_PORT,
    secure: config.EMAIL_SECURE,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASSWORD,
    },
  });

  const resetUrl = `${config.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${token}`;

  await transporter.sendMail({
    from: config.EMAIL_FROM,
    to: email,
    subject: "Restablece tu contraseña",
    html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p><p><a href="${resetUrl}">${resetUrl}</a></p><p>Este enlace expirará en 10 minutos.</p>`,
  });
}
