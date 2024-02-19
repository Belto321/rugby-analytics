import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedPlayesrs() {
    await prisma.players.create({
        data: {
        name: 'Joaquin Borrazas',
        number: 1,
        position: 1
        }
    })
    await prisma.players.create({
        data: {
        name: 'Guille Stewart',
        number: 2,
        position: 2
        }
    })
    await prisma.players.create({
        data: {
        name: 'Tomi Cubro',
        number: 3,
        position: 3
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juan Diego Lopez',
        number: 4,
        position: 4
        }
    })
    await prisma.players.create({
        data: {
        name: 'Molle',
        number: 5,
        position: 5
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juanbe Ponce',
        number: 6,
        position: 6
        }
    })
    await prisma.players.create({
        data: {
        name: 'Alberto Ortolani',
        number: 7,
        position: 7
        }
    })
    await prisma.players.create({
        data: {
        name: 'Federico Mengot',
        number: 8,
        position: 8
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juanma Otegui',
        number: 9,
        position: 9
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juan Folle',
        number: 10,
        position: 10
        }
    })
    await prisma.players.create({
        data: {
        name: 'Pablo Otegui',
        number: 11,
        position: 11
        }
    })
    await prisma.players.create({
        data: {
        name: 'Juan Echegoyen',
        number: 12,
        position: 12
        }
    })
    await prisma.players.create({
        data: {
        name: 'Sebastian Obrien',
        number: 13,
        position: 13
        }
    })
    await prisma.players.create({
        data: {
        name: 'Pelusa Mattos',
        number: 14,
        position: 14
        }
    })
    await prisma.players.create({
        data: {
        name: 'Pipo Vasquez',
        number: 15,
        position: 15
        }
    })
}