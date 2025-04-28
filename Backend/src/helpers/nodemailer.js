const nodemailer = require("nodemailer");
const { emailTemplate } = require("./emailTemplate");
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: 'tamimaffiliatepatnerhome@gmail.com',
    pass: process.env.APP_PASSWORD,
  },
});



const sendMail = async (firstName,Otp) => {
  try {
    const info = await transporter.sendMail({
      from: 'tamimaffiliatepatnerhome@gmail.com',
      to: "coderhero1@gmail.com",
      subject: "Verification ✔",
      html: emailTemplate(firstName,Otp),
    });
    console.log("Email sent successfully:", info.messageId);
    return info.messageId;
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    throw error;
  }
};


module.exports = {sendMail}
