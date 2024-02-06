import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const newGameRouter = express.Router();

newGameRouter.post('/', async (req: Request, res: Response) => {
    const { date, place, opponent, division } = req.body
    if(!date || !place || !opponent || !division){
      res.status(400).send("Some data is missing or invalid")
    }
  try {
    const game = await prisma.game.create({
        data: {
            date,
            place,
            opponent,
            division,
        }
    });
    res.json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default newGameRouter