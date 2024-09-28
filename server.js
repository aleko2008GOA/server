import express from 'express';
import cors from 'cors';
import path from 'path';
import sendEmail from './api/send-email.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'index.html'));
});

app.use('/api/send-email', sendEmail);

app.listen(PORT, () => {
    console.log(`Сервер работает на порту ${PORT}`);
});