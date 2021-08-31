import express from 'express';
import cors from 'cors';
import processFile  from './db/parser.js';

const app = express();

app.use(cors());

app.get('/quotes', async (request, response) => {
    const records = await processFile();
    let randomIndex = Math.floor(Math.random() * 509);
  
    return response.json(records[randomIndex]);
});

export default app;