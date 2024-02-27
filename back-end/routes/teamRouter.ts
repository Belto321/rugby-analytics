import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const teamRouter = express.Router();

interface Player {
  name: string;
  number: number;
  postion: number
}

teamRouter.get('/', async (res: Response, req: Request) => {
    try{
        const team = await prisma.team.findMany()

        if(!team){res.status(400).send("Something went wrong")}

        res.json(team)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

teamRouter.post('/', async (req, res) => {
    const { name, number, position } = req.body
    
    if(!name || !number || !position){
      res.status(400).send('Invalid data')
    }
  
    try{
          const response = await prisma.team.create({
            data: {
              name,
              number,
              position
            }
          })

          if(!response){res.status(400).send("Something went wrong")}

          const team = await prisma.team.findMany()

          if(!team){res.status(400).send("Something went wrong")}

          res.json(team);
        }catch(error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

export default teamRouter;