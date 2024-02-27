import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const gameplayerRouter = express.Router();

type BodyType = {
    gameId: number
    players: [{
        name: string
        position: number
        number: number
    }]
}


gameplayerRouter.post('/', async (req, res) => {
  const { gameId, players }: BodyType = req.body
  
  if(!gameId || !players){
    res.status(400).send('Invalid data')
  }

  try{
    players.map( async player => {
        const response = await prisma.gameplayer.create({
          data: {
            gameId,
            playerId: player.name,
            number: player.number,
            position: player.position
          }
        })
        if(!response){res.status(400).send("Something went wrong")}
      })
        res.json({ message: 'Team created and associated with the game successfully'});
      }catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    export default gameplayerRouter;