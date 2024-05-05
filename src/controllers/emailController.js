const { sendEmail } = require('../utils/emailSender');

async function sendTestEmail(req, res) {
    const { to, subject, text } = req.body;

    try {
        await sendEmail(to, subject, text);
        res.status(200).json({ message: `Correo electrónico enviado correctamente  ${to}`});
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    }
}

module.exports = { sendTestEmail };