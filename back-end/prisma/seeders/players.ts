import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedPlayesrs() {
    await prisma.players.create({
        data: {
        name: 'Joaquin Borrazas',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Guille Stewart',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Tomi Cubro',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juan Diego Lopez',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Molle',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juanbe Ponce',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Alberto Ortolani',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Federico Mengot',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juanma Otegui',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juan Folle',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Pablo Otegui',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juan Echegoyen',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Sebastian Obrien',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Pelusa Mattos',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Pipo Vasquez',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Santi Correa',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Manolo',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Leto',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Peluca',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Matias',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juan Carrau',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Foncho',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Tomas Pieroni',
        }
    })
}