const { sendEmail } = require("../utils/emailSender");
const { generateEmailTemplate } = require("../template/template");
const config = require("../config");

async function sendTestEmail(req, res) {
  console.log("body del request", req.body);
  const subject = "Respuesta al Formulario de la boda";
  const to = config.to;
  const html = generateEmailTemplate(req.body);
console.log('html', html);
  try {
    await sendEmail(to, subject, html);
    res
      .status(200)
      .json({ message: `Correo electrónico enviado correctamente  ${to}` });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
}

module.exports = { sendTestEmail };
