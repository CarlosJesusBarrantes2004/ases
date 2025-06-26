import dotenv from 'dotenv'
import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

dotenv.config()


const adapter = new PrismaLibSQL({ // Pasamos un objeto de configuración
  url: process.env.DATABASE_URL as string, // La URL de tu base de datos
  authToken: process.env.TOKEN as string, // Tu token de autenticación
});
const prisma = new PrismaClient({ adapter })

export default prisma