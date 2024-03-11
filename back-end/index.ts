import express from 'express';
import newGameRouter from './routes/newGameRouter';
import playersRouter from './routes/playersRouter';
import eventRouter from './routes/eventRouter'
import eventTypeRouter from './routes/eventTypeRouter';
import gamesRouter from './routes/gamesRouter';
import teamRouter from './routes/teamRouter';
import gameplayerRouter from './routes/gamePlayersRouter';
import exportCsvRouter from './routes/exportCsvRouter';
import descriptionsRouter from './routes/descriptionsRouter';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3101;

app.use(express.json());
app.use(cors());

app.use('/newgame', newGameRouter);
app.use('/players', playersRouter);
app.use('/event', eventRouter );
app.use('/eventtype', eventTypeRouter)
app.use('/games', gamesRouter);
app.use('/team', teamRouter);
app.use('/gameplayer', gameplayerRouter)
app.use('/export-csv', exportCsvRouter)
app.use('/descriptions', descriptionsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })