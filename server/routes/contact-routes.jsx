const express = require("express");
const nodemailer = require("nodemailer");
// const config = require('../config');

// const sendEmailMessage = require('../controllers/Mailing/contact-controller.jsx');
const mailingController = express.Router();

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

mailingController.post("/send", async (req, res) => {
  try {
    const { email, name, subject, message } = req.body;
    const mailOptions = {
      from: email,
      to: process.env.NODEMAILER_USER,
      subject: "you received a new message from: " + name,
      text: `Email: ${email}, Subject: ${subject}, Message: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.json({
          status: "error",
          sent: false,
          data: "something went wrong",
          error: error,
        });
      } else {
        res.json({ status: "ok", sent: true, data: info, body: req.body });
      }
      transporter.close();
    });
  } catch (error) {
    res.send(500).json("something went wrong", error);
  }
});

module.exports = {
  routes: mailingController,
};
