import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedPlayesrs() {
    await prisma.players.create({
        data: {
        name: 'Opponent',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Team',
        }
    })
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
        name: 'Felo',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juan Diego Lopez',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Tachu',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Peluca',
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
        name: 'Piscu',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Goma',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juanpe',
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
        name: 'Mateo Eche',
        }
    })
    await prisma.players.create({
        data: {
        name: 'Tomi Ubilla',
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