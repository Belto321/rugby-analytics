import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedEventTypes() {
    await prisma.eventtype.create({
        data: {
        name: "Try",
        subType: 1,
        score: 5
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Try conversion",
        subType: 1,
        score: 2
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Penalty conversion",
        subType: 1,
        score: 3
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Drop conversion",
        subType: 1,
        score: 3
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Pass",
        subType: 2,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Miss Pass",
        subType: 2,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Tackle",
        subType: 2,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Miss Tackle",
        subType: 2,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Knock-On",
        subType: 3,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Forward Pass",
        subType: 3,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Scrum",
        subType: 5,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Lineout",
        subType: 5,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "High tackle",
        subType: 4,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Offside",
        subType: 4,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Obstruction",
        subType: 4,
        score: 0
        }
    })

}