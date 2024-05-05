const express = require('express');
const router = express.Router();
const { sendTestEmail } = require('../controllers/emailController');
console.log('POST RECIBIDO');
router.post('/send-email', sendTestEmail);

module.exports = router;