import express from 'express';
import cors from 'cors';
import processFile  from './db/parser.js';

const app = express();

app.use(cors());

app.get('/quotes', async (request, response) => {
    const records = await processFile();
    let randomIndex = Math.floor(Math.random() * 509);
    let singleQuoteResponse = records[randomIndex];
    return response.json({
        speaker: singleQuoteResponse[1],
        quote: singleQuoteResponse[2]
    });
});

export default app;