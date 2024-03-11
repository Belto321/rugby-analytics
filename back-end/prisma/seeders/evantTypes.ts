import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedEventTypes() {
    await prisma.eventtype.create({
        data: {
        name: "Pass",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Miss Pass",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Tackle",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Miss Tackle",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Attack",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Defense break",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Kick",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Reception",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Maul",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Ruck",
        subType: 1,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Drop",
        subType: 2,
        score: 3
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Miss Drop",
        subType: 2,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Try",
        subType: 2,
        score: 5
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Try conversion",
        subType: 2,
        score: 7
        }
    })
    
    await prisma.eventtype.create({
        data: {
        name: "Foward Pass",
        subType: 3,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Knock-on",
        subType: 3,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Line-out",
        subType: 3,
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
    await prisma.eventtype.create({
        data: {
        name: "High Tackle",
        subType: 4,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "No relese",
        subType: 4,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Side entry",
        subType: 4,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "No 10 metres",
        subType: 4,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Hands on ruck",
        subType: 4,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Penalty",
        subType: 4,
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
        name: "Line",
        subType: 5,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Posts kick",
        subType: 5,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "22 Drop-kick",
        subType: 5,
        score: 0
        }
    })
    await prisma.eventtype.create({
        data: {
        name: "Start-kick",
        subType: 5,
        score: 0
        }
    })
}