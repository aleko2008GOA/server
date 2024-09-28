import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'; 

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
    const user = req.body;

    if (!user.name || !user.email) {
        return res.status(400).send('Недостаточно данных для отправки письма.');
    }

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
            subject: 'Новый пользователь',
            text: JSON.stringify(user, null, 2)
        };
        
        await transporter.sendMail(mailOptions);
        res.status(200).send('Письмо было отправлено!');
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        res.status(500).send('Не удалось отправить письмо');
    }
});

export default router;