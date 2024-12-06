import express, { type Express } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import RedisClient from './config/connection';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';
import { config } from 'dotenv'

config({ path: './src/.env' });

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});