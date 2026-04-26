import express from "express";
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = 3000;

function generarHtmlResultados(datos) {
    const { instructor, correoInstructor, programa, ficha, equipos, fecha } = datos;
    const fechaActual = fecha || new Date().toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    let htmlEquipos = '';
    equipos.forEach((eq, idx) => {
        const posicion = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}°`;
        let htmlJugadores = '';
        eq.jugadores.forEach(j => {
            const colorScore = j.promedio >= 70 ? '#27ae60' : j.promedio >= 30 ? '#f39c12' : '#e74c3c';
            htmlJugadores += `
                <tr>
                    <td style="padding:8px 12px;color:#555;">${j.nombre}</td>
                    <td style="padding:8px 12px;text-align:center;font-weight:bold;color:${colorScore}">${j.promedio}%</td>
                    <td style="padding:8px 12px;text-align:center;color:#777;">${j.intentos}/${eq.totalPreguntas}</td>
                </tr>
            `;
        });
        
        htmlEquipos += `
            <div style="background:${idx === 0 ? 'linear-gradient(135deg, #f9f3e3, #fff)' : '#fff'};border-radius:12px;padding:20px;margin-bottom:20px;box-shadow:0 2px 10px rgba(0,0,0,0.08);border:${idx === 0 ? '2px solid #f39c12' : '1px solid #eee'}">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:15px">
                    <span style="font-size:1.5rem">${posicion}</span>
                    <span style="font-size:1.3rem;font-weight:bold;color:${eq.color}">${eq.nombre}</span>
                    <span style="margin-left:auto;font-size:1.4rem;font-weight:bold;color:${eq.promedio >= 70 ? '#27ae60' : eq.promedio >= 30 ? '#f39c12' : '#e74c3c'}">${eq.promedio}%</span>
                </div>
                <table style="width:100%;border-collapse:collapse;background:#fafafa;border-radius:8px;overflow:hidden">
                    <thead>
                        <tr style="background:#f0f0f0">
                            <th style="padding:10px 12px;text-align:left;font-size:0.85rem;color:#666">Jugador</th>
                            <th style="padding:10px 12px;text-align:center;font-size:0.85rem;color:#666">Promedio</th>
                            <th style="padding:10px 12px;text-align:center;font-size:0.85rem;color:#666">Respuestas</th>
                        </tr>
                    </thead>
                    <tbody>${htmlJugadores}</tbody>
                </table>
            </div>
        `;
    });

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Resultados Speaking Challenge</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Segoe UI',Arial,sans-serif">
    <div style="max-width:600px;margin:0 auto;padding:20px">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#39A900,#2d7a00);border-radius:12px 12px 0 0;padding:25px;text-align:center">
            <h1 style="margin:0;color:#fff;font-size:1.8rem">🏆 Speaking Challenge</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.9)">Resultados de la Sesión</p>
        </div>
        
        <!-- Info Session -->
        <div style="background:#fff;padding:20px;border-left:4px solid #39A900">
            <table style="width:100%;font-size:0.9rem">
                <tr>
                    <td style="padding:4px 0;color:#666"><strong>Instructor:</strong></td>
                    <td style="padding:4px 0;color:#333">${instructor}</td>
                </tr>
                ${correoInstructor ? `
                <tr>
                    <td style="padding:4px 0;color:#666"><strong>Correo:</strong></td>
                    <td style="padding:4px 0;color:#333">${correoInstructor}</td>
                </tr>` : ''}
                <tr>
                    <td style="padding:4px 0;color:#666"><strong>Programa:</strong></td>
                    <td style="padding:4px 0;color:#333">${programa}</td>
                </tr>
                <tr>
                    <td style="padding:4px 0;color:#666"><strong>Ficha:</strong></td>
                    <td style="padding:4px 0;color:#333">${ficha}</td>
                </tr>
                <tr>
                    <td style="padding:4px 0;color:#666"><strong>Fecha:</strong></td>
                    <td style="padding:4px 0;color:#333">${fechaActual}</td>
                </tr>
            </table>
        </div>

        <!-- Results -->
        <div style="background:#fff;border-radius:0 0 12px 12px;padding:25px 20px">
            <h2 style="margin:0 0 20px;color:#333;font-size:1.2rem">📊 Resultados por Equipo</h2>
            ${htmlEquipos}
        </div>

        <!-- Footer -->
        <div style="text-align:center;padding:20px;color:#888;font-size:0.8rem">
            <p>Generated by Speaking Challenge · SENA Gestión Logística</p>
            <p style="margin:0">¡Sigue practicando para mejorar tu inglés técnico!</p>
        </div>
    </div>
</body>
</html>`;
}

app.post('/enviar', async (req, res) => {

    const destinatario = req.query.destinatario;
    const html = req.query.html ? decodeURIComponent(req.query.html) : undefined;

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
            from: `"Soporte Speaking Challenge" <${process.env.EMAIL}>`,
            to: destinatario,
            subject: '📊 Resultados Speaking Challenge - SENA',
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

app.post('/enviar-resultados', async (req, res) => {
    const { destinatario, datos } = req.body;

    if (!destinatario || !datos) {
        return res.status(400).json({
            "ok": false,
            "mensaje": "Datos incompletos"
        })
    }

    try {
        const html = generarHtmlResultados(datos);
        
        const transportador = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });

        await transportador.sendMail({
            from: `"Soporte Speaking Challenge" <${process.env.EMAIL}>`,
            to: destinatario,
            subject: `📊 Resultados Speaking Challenge - ${datos.programa}`,
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