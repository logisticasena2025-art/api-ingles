import express from "express";
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = 3000;

app.post('/enviar', async (req, res) => {

    const { destinatario, html } = req.body;

    if (!destinatario || !html) {
        return res.status(400).json({
            "ok": false,
            "mensaje": "Datos incompletos"
        })
    }

    try {
        const transportador = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });

        await transportador.sendMail({
            from: `"Soporte ingles" <${process.env.EMAIL}>`,
            to: destinatario,
            subject: 'envio de resultados',
            html
        });

        return res.status(200).json({
            ok: true,
            mensaje: "Correo enviado"
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: "Error al enviar correo"
        });
    }
    
});

app.listen(PORT, () => {
    console.log(`API levantada`)
});