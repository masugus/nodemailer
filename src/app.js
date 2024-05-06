const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');

const app = express();

// Habilitar CORS solo para bodamiamiycuba.com
const corsOptions = {
    origin: 'https://www.bodamiamiycuba.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en ejecución en el puerto ${PORT}`));