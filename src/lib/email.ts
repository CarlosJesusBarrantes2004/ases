import nodemailer from "nodemailer";

export async function sendVerificationEmail(
  email: string,
  token: string,
  initialPassword?: string
) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
    secure: process.env.EMAIL_SERVER_SECURE === "true",
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;
  let htmlContent = `<p>Hola,</p><p>Tu cuenta en el panel de administración de Grupo Ases ha sido creada. Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico:</p><p><a href="${verificationUrl}">${verificationUrl}</a></p>`;

  if (initialPassword)
    htmlContent += `<p>Tu contraseña inicial es: <strong>${initialPassword}</strong>. Guárdala en un lugar seguro.</p>`;

  htmlContent += `<p>Una vez verificado, podrás iniciar sesión con tu correo electrónico y tu contraseña.</p><p>Este enlace es válido por 10 minutos.</p>`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Verifica tu dirección de correo electrónico de Grupo Ases",
    html: htmlContent,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
    secure: process.env.EMAIL_SERVER_SECURE === "true",
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Restablece tu contraseña",
    html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p><p><a href="${resetUrl}">${resetUrl}</a></p><p>Este enlace expirará en 10 minutos.</p>`,
  });
}
