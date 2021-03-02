import axios from "axios";
import nodemailer from "nodemailer";
export default async (req, res) => {
  const { fullName, userEmail, message, token } = req.body;
  const human = await validateHuman(token);
  if (!human) {
    res.status(400);
    res.json({ errors: ["Please you're not fooling us bot"] });
    return;
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  try {
    const email = await transporter.sendMail({
      from: userEmail,
      to: "youngtran42@gmail.com",
      subject: `Contact Form Submission ${fullName}`,
      html: `<p>You have a new contact submission</p><br/>
      <p>Name: ${fullName}</p><br/>
      <p>Email: ${userEmail} </p><br/>
      <p>Message: ${message}</p><br/>

      `,
    });
    console.log(`Message sent`, email.messageId);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(req.body);
};

async function validateHuman(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  );
  console.log(response.data);
  return response.data.success;
}
