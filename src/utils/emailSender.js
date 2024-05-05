const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    auth: {
        user: config.emailAddress,
        pass: config.emailPassword
    }
});

async function sendEmail(to, subject, html) {
    console.log('POST RECIBIDO');

    try {
        const info = await transporter.sendMail({
            from: `${config.emailSender}`,
            to,
            subject,
            html
        });
        console.log('Correo electrónico enviado:', info.response);
        return info;
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw error;
    }
}

module.exports = { sendEmail };