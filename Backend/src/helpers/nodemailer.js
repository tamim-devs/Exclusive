const nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true, // true for port 465, false for other ports
  auth: {
    user:  'tamimaffiliatepatnerhome@gmail.com',
    pass: process.env.APP_PASSWORD ,
  },
});

const sendMail = async ()=> {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'tamimaffiliatepatnerhome@gmail.com', // sender address
    to: "coderhero1@gmail.com", // list of receivers
    subject: "Verification ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<h1>Hello worldssss?</h1>", // html body
  });
console.log("amar onek dokkho");

 return info.messageId;
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


module.exports = {sendMail}
