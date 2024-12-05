import express, { type Express } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import RedisClient from './connection';

require('dotenv').config({ path: './src/.env' });

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use('/api', routes);
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, async () => {
  await RedisClient();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});