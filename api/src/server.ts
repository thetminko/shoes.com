import express, { Application } from 'express';
import { initSequelize } from './sequelize';

// Create a new express application instance
const app: Application = express();

app.listen(3000, async () => {
  await initSequelize();
  console.log('Shoes.com api listening on port 3000!');
});
