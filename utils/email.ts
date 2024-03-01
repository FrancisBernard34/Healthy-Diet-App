const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  server: 'smtp.gmail.com',
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN
  }
});

let mailOptions = {
  from: process.env.MAIL_FROM,
  to: "francisbernardcontact@gmail.com",
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};