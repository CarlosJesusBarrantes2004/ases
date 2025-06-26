import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import bcrypt from "bcrypt";

const adapter = new PrismaLibSQL({
    url: `${process.env.DATABASE_URL}`,
    authToken: `${process.env.TOKEN}`,
})
const prisma = new PrismaClient({ adapter })

async function main() {
    const pwd = await bcrypt.hash("admin123*", 10);
    const newUser = await prisma.user.create({
        data: {
            name: 'Admin',
            email: 'gerencia.grupoases@gmail.com',
            password: pwd, // Considera hashear esta contraseña antes de guardarla en un entorno real
            emailVerified: new Date(), // Descomentar si deseas marcar el email como verificado al momento de la creación
            projects: {
                create: [
                    {
                        title: 'Mi Primer Proyecto',
                        description: 'Un proyecto emocionante para empezar con una inversión moderada y buenos ingresos esperados.',
                        totalInvestment: 150000.00, // Ejemplo de inversión total
                        projectedRevenue: 250000.00, // Ejemplo de ingresos proyectados
                        minimumInvestmentAmount: 500.00, // Ejemplo de monto mínimo de inversión
                        tir: 0.18, // Ejemplo de TIR (opcional)
                        van: 50000.00, // Ejemplo de VAN (opcional)
                        payback: 2.5, // Ejemplo de Payback en años (opcional)
                        executiveSummary: 'Este es un resumen ejecutivo breve del primer proyecto, destacando su potencial de crecimiento.', // Ejemplo de resumen ejecutivo (opcional)
                    },
                    {
                        title: 'Proyecto de Ideas Innovadoras',
                        description: 'Un espacio para incubar y desarrollar conceptos de vanguardia con potencial de alto rendimiento.',
                        totalInvestment: 500000.00,
                        projectedRevenue: 1200000.00,
                        minimumInvestmentAmount: 1000.00,
                        tir: 0.25,
                        van: 300000.00,
                        payback: 1.8,
                        executiveSummary: 'Proyecto visionario enfocado en la disrupción tecnológica, con proyecciones financieras muy favorables a largo plazo.',
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