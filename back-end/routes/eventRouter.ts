import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const eventRouter = express.Router();

eventRouter.post('/', async (req: Request, res: Response) => {
    const { gameId, playerId, half, eventTypeId } = req.body
    console.log(gameId, playerId, eventTypeId, half)
    try {
        const response = await prisma.event.create({
            data: {
                GameId: gameId,
                half: half,
                PlayerId: playerId,
                EventTypeId: eventTypeId
            }
        })
        res.json(response)
 
    } catch (error) {
        console.log(error)
    }
})

export default eventRouter