const { sendEmail } = require("../utils/emailSender");
const { generateEmailTemplate } = require("../template/template");
const config = require("../config");

async function sendTestEmail(req, res) {
  console.log("body del request", req.body);

  const subject = "Respuesta al Formulario de la boda";
  const to = config.to;
  let body;
  try {
    // Intenta parsear el body a JSON
    body = JSON.parse(req.body);
  } catch (error) {
    // Si el parse falla, usa el body original
    body = req.body;
  }
  const html = generateEmailTemplate(body);
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
