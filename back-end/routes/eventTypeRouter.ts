import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const eventTypeRouter = express.Router();

eventTypeRouter.get('/', async (req: Request, res: Response) => {
    try {
        const response = await prisma.eventtype.findMany()
        res.json(response)
 
    } catch (error) {
        console.log(error)
    }
})

export default eventTypeRouter