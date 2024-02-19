import express from 'express';
import newGameRouter from './routes/newGameRouter';
import playersRouter from './routes/playersRouter';
import eventRouter from './routes/eventRouter'
import eventTypeRouter from './routes/eventTypeRouter';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/newgame', newGameRouter);
app.use('/players', playersRouter);
app.use('/event', eventRouter );
app.use('/eventtype', eventTypeRouter)

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