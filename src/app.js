const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();

// Habilitar CORS solo para bodamiamiycuba.com
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://bodamiamiycuba.com",
      "https://www.bodamiamiycuba.com",
      "https://masugus.github.io/hosting/",
      "https://masugus.github.io/hosting",
    ];
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// app.use(cors(corsOptions));
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor en ejecución en el puerto ${PORT}`)
);
