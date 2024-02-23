import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const eventRouter = express.Router();

eventRouter.post('/', async (req: Request, res: Response) => {
    const { gameId, playerId, half, eventTypeId } = req.body
    try {
        const response = await prisma.event.create({
            data: {
                GameId: gameId,
                half: half,
                PlayerId: playerId,
                EventTypeId: eventTypeId
            }
        })
        if(eventTypeId <= 2){
            const totalTackles = await prisma.event.count({
                where: {
                    GameId: gameId,
                    EventTypeId: 1
                }
            })
            const totalPasses = await prisma.event.count({
                where: {
                    GameId: gameId,
                    EventTypeId: 2
                }
            })
            res.json({totalPasses, totalTackles})
        }else{

            res.json(response)
        }
 
    } catch (error) {
        console.log(error)
    }
})

export default eventRouter