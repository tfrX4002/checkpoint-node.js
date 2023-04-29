const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'fredryan.toure@gmail.com',
      pass: '********'
   }
});

const mailOptions = {
   from: 'fredryan.toure@gmail.com',
   to: 'lonry246@gmail.com',
   subject: 'mail sent by RyanFT from Node',
   text: 'Welcome to RyanFT'
};

transporter.sendMail(mailOptions, (err, info) => {
   if (err) {
      console.log(err);
   } else {
      console.log('Email sent: ' + info.response);
   }
});