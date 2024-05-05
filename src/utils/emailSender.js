const nodemailer = require('nodemailer');
const config = require('../config');

console.log('config', config);
const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 25,
    auth: {
        user: config.emailAddress,
        pass: config.emailPassword
    }
});

async function sendEmail(to, subject, text) {
    console.log('POST RECIBIDO');
    try {
        const info = await transporter.sendMail({
            from: `"Tu Nombre" <${config.emailSender}>`,
            to: to,
            subject: subject,
            text: text
        });
        console.log('Correo electrónico enviado:', info.response);
        return info;
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw error;
    }
}

module.exports = { sendEmail };