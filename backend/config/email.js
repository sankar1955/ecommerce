import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'SankaronlineKada@gmail.com',
    pass: 'vplx xhzz lllb bedu'
  }
});

export default transporter;
