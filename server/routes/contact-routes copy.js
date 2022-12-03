const express = require('express');
const sendEmailMessage = require('../controllers/Mailing/contact-controller.jsx');


const mailingController = express.Router();

/**
 * POST/ User subscribe to App
 */
 mailingController.post('/send', async (req, res) => {
  try {
   const result = await sendEmailMessage(req.body);
    res.status(200).json({ msg:'sent',result:result});
  } catch (e) {
    res.status(500).json({message:e.message})
  }
});


module.exports = {
    routes:mailingController
}