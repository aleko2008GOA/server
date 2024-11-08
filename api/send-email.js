import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'; 

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
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
            text: JSON.stringify(user, null, 2)
        };
        
        console.log(user);
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email was sent!');
    } catch (error) {
        console.error('Error while sending email:', error);
        res.status(500).send('Can not send this email');
    }
});

export default router;