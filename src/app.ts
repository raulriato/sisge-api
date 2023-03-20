import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database';

const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/status', (_, res) => res.status(200).send('ok'))
  .get('/teste-db', async (_, res) => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });

export default app;