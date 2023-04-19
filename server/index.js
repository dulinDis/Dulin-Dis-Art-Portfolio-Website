"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const compression = require("compression");
require("dotenv").config();
const mime = require("mime");

const mime = require("mime");

const artworkRoutes = require("./routes/artwork-routes");
const contactRoutes = require("./routes/contact-routes.jsx");

const PORT = process.env.PORT || 5000;
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

app.use("/api", artworkRoutes.routes);
app.use("/api", contactRoutes.routes);

// if (
//   process.env.NODE_ENV === `production` ||
//   process.env.NODE_ENV === `staging`
// ) {
//   // app.use(express.static(path.join(__dirname, "..", "/client/build")));
//   app.use(express.static(path.join(__dirname, "..", "client", "build")));
//   // app.get(`*`, (req, res) => {
//   //   res.sendFile(path.join(__dirname + "..", `/client/build/index.html`));
//   // });
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
//   });
// }

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "build"), {
      setHeaders: function (res, path) {
        if (mime.getType(path) === "text/html") {
          // Set MIME type for HTML files
          res.setHeader("Content-Type", "text/html");
        } else if (mime.getType(path) === "application/javascript") {
          // Set MIME type for JS files
          res.setHeader("Content-Type", "application/javascript");
        } else if (mime.getType(path) === "text/css") {
          // Set MIME type for CSS files
          res.setHeader("Content-Type", "text/css");
        }
      },
    })
  );
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  }); //for client side rendering
}

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));

// console.log(path.join(__dirname, "build"));
// console.log(path.join(__dirname, "build", "index.html"));
