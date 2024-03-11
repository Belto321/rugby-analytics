import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedDescriptions() {
    await prisma.description.create({
        data: {
        id: 1,
        description: "Kick inside",
        eventTypeId: 25
        }
    })
    await prisma.description.create({
        data: {
        id: 2,
        description: "Kick direct outside",
        eventTypeId: 25
        }
    })
    await prisma.description.create({
        data: {
        id: 3,
        description: "Kick not driect outside",
        eventTypeId: 25
        }
    })
    await prisma.description.create({
        data: {
        id: 4,
        description: "Line and maul",
        eventTypeId: 27,
        }
    })
    await prisma.description.create({
        data: {
        id: 5,
        description: "Middle Jump",
        eventTypeId: 27,
        }
    })
    await prisma.description.create({
        data: {
        id: 6,
        description: "Front Jump",
        eventTypeId: 27,
        }
    })
    await prisma.description.create({
        data: {
        id: 7,
        description: "Back Jump",
        eventTypeId: 27,
        }
    })
    await prisma.description.create({
        data: {
        id: 8,
        description: "Under the posts",
        eventTypeId: 13,
        }
    })
    await prisma.description.create({
        data: {
        id: 9,
        description: "Close to the posts",
        eventTypeId: 13,
        }
    })
    await prisma.description.create({
        data: {
        id: 10,
        description: "Far from the posts",
        eventTypeId: 13,
        }
    })
}