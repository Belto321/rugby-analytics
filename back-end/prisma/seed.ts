import { PrismaClient } from '@prisma/client'
import { seedPlayesrs } from './seeders/players'
import { seedEventTypes } from './seeders/evantTypes'
const prisma = new PrismaClient()
async function main() {
    await seedPlayesrs()
    await seedEventTypes()
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