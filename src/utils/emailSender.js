const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: config.emailAddress,
        pass: config.emailPassword
    }
});

async function sendEmail(to, subject, text) {
    try {
        const info = await transporter.sendMail({
            from: `"Tu Nombre" <${config.emailAddress}>`,
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