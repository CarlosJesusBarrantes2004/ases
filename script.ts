import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import bcrypt from "bcrypt";

const adapter = new PrismaLibSQL({
    url: `${process.env.DATABASE_URL}`,
    authToken: `${process.env.TOKEN}`,
})
const prisma = new PrismaClient({ adapter })

async function main() {
    const pwd = await bcrypt.hash("Carlos2004*", 10);
    const newUser = await prisma.user.create({
        data: {
            name: 'Alice Smith',
            email: 'alice.smith@example.com',
            password: pwd, // Considera hashear esta contraseña antes de guardarla en un entorno real
            emailVerified: new Date(), // Descomentar si deseas marcar el email como verificado al momento de la creación
            projects: {
                create: [
                    {
                        title: 'Mi Primer Proyecto',
                        description: 'Un proyecto emocionante para empezar.',
                    },
                    {
                        title: 'Proyecto de Ideas Innovadoras',
                        description: 'Aquí almacenaré todas mis ideas futuras.',
                    },
                ],
            },
        },
    });
    console.log('Usuario creado exitosamente:', newUser);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })