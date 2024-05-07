const express = require('express');
const router = express.Router();
const { sendTestEmail } = require('../controllers/emailController');
const { searchTracksController } = require('../controllers/tracksController');

router.post('/send-email', sendTestEmail);
router.post('/search-track', searchTracksController);
// Add keepAlive endpoint
router.get('/keep-alive', (req, res, next) => {
    console.log('KeepAlive recibido de ', req.headers.origin)
  
    let responseSent = false;
  
    const serverTimeout = setTimeout(() => {
      if (!responseSent) {
        responseSent = true;
        console.log('Server is down');
        res.status(408).send('Server is down');
      }
    }, 10000); // Set timeout to 10 seconds
  
    // Middleware to handle response
    const sendResponse = (req, res, next) => {
      clearTimeout(serverTimeout);
      if (!responseSent) {
        responseSent = true;
        console.log('Server is running')
        res.send('Server is running');
      }
      next();
    };
  
    sendResponse(req, res, next);
  });


  module.exports = router;