import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const descriptionsRouter = express.Router();

descriptionsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const response = await prisma.description.findMany()
        res.json(response)
 
    } catch (error) {
        console.log(error)
    }
})

export default descriptionsRouter