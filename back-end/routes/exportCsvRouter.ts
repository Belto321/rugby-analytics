import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createObjectCsvStringifier } from 'csv-writer';

const prisma = new PrismaClient();
const exportCsvRouter = express.Router();

exportCsvRouter.get('/', async (req, res) => {
    try{
        const players = await prisma.players.findMany()

        const csvStringifier = createObjectCsvStringifier({
            header: [
                {id: 'name', title: 'Name'}
            ]
        })
        
        const csvData = csvStringifier.getHeaderString() + '\n' + csvStringifier.stringifyRecords(players);

        res.status(200).send(csvData);
    } catch (error) {
        console.error('Error exporting CSV:', error);
        res.status(500).send('Internal server error');
    }
})

export default exportCsvRouter;