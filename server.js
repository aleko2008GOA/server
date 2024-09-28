import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.post('/send-email', async (req, res) => {
    const user = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New user',
            text: JSON.stringify(user)
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Email was sent!');
    } catch (error) {
        console.error('Error while sending email:', error);
        res.status(500).send('Cannot send it');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
