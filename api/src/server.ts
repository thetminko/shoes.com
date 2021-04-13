import cors from 'cors';
import express, { Application } from 'express';
import { apiController } from './controllers';
import { initSequelize } from './sequelize';

// Create a new express application instance
const app: Application = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(apiController);

app.listen(4000, async () => {
  await initSequelize();
  console.log('Shoes.com api listening on port 4000!');
});
