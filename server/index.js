"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const compression = require("compression");
require("dotenv").config();

const artworkRoutes = require("./routes/artwork-routes");
const contactRoutes = require("./routes/contact-routes.jsx");

const PORT = process.env.PORT || 5000;
// const HOST = process.env.HOST  || 127.0.0.1;

const app = express();

app.use(cors());
app.use(compression());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );

  next();
});
app.use(morgan("tiny"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: false, limit: "25mb" }));
app.use(bodyParser.json());

// app.use("/api", artworkRoutes.routes);
// app.use("/api", contactRoutes.routes);

//remove api part
app.use(artworkRoutes.routes);
app.use(contactRoutes.routes);

// app.use(express.static(path.join(__dirname, "..","/client/public")));

if (
  process.env.NODE_ENV === `production` ||
  process.env.NODE_ENV === `staging`
) {
  app.use(express.static(path.join(__dirname, "..", "/client/build")));
  app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname + "..", `/client/build/index.html`));
  });
}

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
