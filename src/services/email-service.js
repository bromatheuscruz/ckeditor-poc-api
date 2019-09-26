const nodemailer = require("nodemailer");

const sendEmail = async comment => {
  const recipients = comment.recipients.filter(
    recipient => comment.author !== recipient.id
  );
  
  const testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  const info = await transporter.sendMail({
    from: '"Proof Of Concept - R4D1X 👻" <noreply@matheuscruz.com>',
    to: recipients.map(recipient => recipient.email),
    subject: "YOU HAVE A NEW COMMENT",
    text: "You have a new comment",
    html: `<b>Comment:</b> <bold>${comment.content}</bold>`
  });

  return nodemailer.getTestMessageUrl(info);
};

module.exports = {
  sendEmail
};
