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
type ChangeBodyType = {
  gameId: number
  playerOut: string
  playerIn: string
  number: number
  position: number
}
gameplayerRouter.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  try {
    const players = await prisma.gameplayer.findMany({
      where:{
        gameId: id,
        isViewable: true
      }
    });
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
            number: Number(player.number),
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

    gameplayerRouter.post('/change', async (req, res) => {
      const { gameId, playerIn, number, position, playerOut }: ChangeBodyType = req.body
      
      if(!gameId || !playerIn || !number || !position || !playerOut){
        res.status(400).send('Invalid data')
      }
    
      try{
            const creatResponse = await prisma.gameplayer.create({
              data: {
                gameId,
                playerId: playerIn,
                number,
                position,
                titular: false
              }
            })
            if(!creatResponse){res.status(400).send("Something went wrong")}

            const putResponse = await prisma.gameplayer.update({
              data:{
                isViewable: false
              },
              where: {
                gameId_playerId: {
                  gameId,
                  playerId: playerOut
                }
              }
            })
            if(!putResponse){res.status(400).send("Something went wrong")}

            res.json({ message: 'The change was done successfully'});
          }catch(error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
        });

    export default gameplayerRouter;