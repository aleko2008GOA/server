import express from 'express';
import cors from 'cors';
import sendEmail from './src/api/send-email.js';
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

app.use('/src/api/send-email', sendEmail);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});