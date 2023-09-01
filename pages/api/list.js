const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const users = await prisma.protocolo.findMany()
    res.status(200).json(protocolo)
} 