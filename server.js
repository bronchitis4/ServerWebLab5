import dotenv from 'dotenv';

dotenv.config();

import testsRouter from './routes/tests.routes.js'
import authRouter from './routes/auth.routes.js'
import eventsRouter from './routes/events.routes.js'
import express from 'express';
import cors from 'cors'; 


const PORT = process.env.PORT || 5000;
const app = express(); 

app.use(cors());
app.use(express.json())
app.use('/historical-platform', eventsRouter);
app.use('/historical-platform', authRouter);
app.use('/historical-platform/test-results', testsRouter);
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Сервер прослуховується на порті ${PORT}`);
})
