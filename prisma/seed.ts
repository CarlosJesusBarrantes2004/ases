import config from "@/lib/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando el seeding...");

  const password = "Admin123*";
  const hashedPassword = await bcrypt.hash(password, config.SALT_ROUNDS);

  const user = await prisma.user.upsert({
    where: { email: "gerencia.grupoases@gmail.com" },
    update: {},
    create: {
      name: "Administrador",
      email: "gerencia.grupoases@gmail.com",
      password: hashedPassword,
      emailVerified: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log(`Usuario creado/actualizado con ID: ${user.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
