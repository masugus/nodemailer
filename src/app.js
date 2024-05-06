const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');

const app = express();

// Habilitar CORS solo para bodamiamiycuba.com
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = ['https://bodamiamiycuba.com', 'https://www.bodamiamiycuba.com', 'https://masugus.github.io/hosting/', 'https://masugus.github.io/hosting'];
        if (allowedOrigins.includes(origin)) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en ejecución en el puerto ${PORT}`));