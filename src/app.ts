import express from 'express';
import cors from 'cors';

const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/status', (_, res) => res.status(200).send('ok'));

export default app;