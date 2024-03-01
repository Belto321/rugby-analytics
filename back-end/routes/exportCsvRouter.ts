import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createObjectCsvStringifier } from 'csv-writer';
const json2csv = require('json2csv').parse;
const fs = require('fs');

const prisma = new PrismaClient();
const exportCsvRouter = express.Router();

exportCsvRouter.get('/:id', async (req, res) => {

    const id = Number(req.params.id)
    try {
    const game = await prisma.game.findUnique({
        where:{
            id: id
        }
    })
    const gameData = await prisma.game.findUnique({
        where: {
            id: id
          },
          include: {
            gamePlayers: {
                select:{
                    playerId: true,
                    number: true,
                    position: true
                }
            },
            events: true
          }
        });
    
        const csvGame = json2csv(game)
        const csvEvents = json2csv(gameData?.events);
        const csvPlayers = json2csv(gameData?.gamePlayers)

        const csvData = csvGame + '\n\n' + csvPlayers + '\n\n' + csvEvents;

        // Set headers to trigger file download
        res.setHeader('Content-disposition', `attachment; filename=game_${id}_data.csv`);
        res.set('Content-Type', 'text/csv');

        res.status(200).send(csvData);
      } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
      }
      
})

export default exportCsvRouter;