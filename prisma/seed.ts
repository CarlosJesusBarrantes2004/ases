import prisma from "@/lib/db";
import bcrypt from "bcrypt";

async function main() {
  console.log("Iniciando el seeding...");

  const adminEmail = "admin@grupoases.com";
  const adminPassword = "123456";
  const adminName = "Administrador Principal";

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: adminName,
      emailVerified: new Date(),
    },
  });

  console.log(`Usuario administrador creado/actualizado: ${adminUser.email}`);
  console.log("Seeding completado.");
}

main()
  .catch((e) => {
    console.error("Error durante el seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    // No desconectes prisma aquí si lo importas desde lib/db
    // ya que la instancia es global y se usa en toda la app.
    // Solo lo harías si estuvieras creando una nueva instancia aquí.
    // await prisma.$disconnect();
  });
