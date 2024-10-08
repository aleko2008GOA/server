import express from 'express';
import cors from 'cors';
import sendEmail from './api/send-email.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'index.html'));
});

app.use('/api/send-email', sendEmail);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});