import express, { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const gamesRouter = express.Router()

gamesRouter.get('/', async (req, res) => {
    try{
        const games = await prisma.game.findMany()

        if(games){
            res.json(games);
          }else{
            res.status(400).send("Something went wrong")
          }
        
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default gamesRouter;