import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const playersRouter = express.Router();

interface Player {
  id: number
  name: string;
  number: number;
}

playersRouter.get('/', async (req: Request, res: Response) => {
  try {
    const players = await prisma.players.findMany();
    if(players){
      res.json(players);
    }else{
      res.status(400).send("Something went wrong")
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

interface CreatePlayersRequest {
  gameId: number;
  players: Player[];
}

playersRouter.post('/', async (req, res) => {
  const { gameId, players }: CreatePlayersRequest = req.body
  
  if(!gameId || !players){
    res.status(400).send('Invalid data')
  }

  try{
    players.map( async player => {
        const response = await prisma.gameplayer.create({
          data: {
            gameId,
            playerId: player.name
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


export default playersRouter;