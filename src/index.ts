import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    const allUsers = await prisma.users.findMany({
        where: {
            user_name: {
                contains: "juego"
            }
        }
    })
    res.json(allUsers)
})

const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`),
);
