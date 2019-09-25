const nodemailer = require('nodemailer')

const sendEmail = async (comment) => {
    
    const testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user, 
            pass: testAccount.pass
        }
    });

    let info = await transporter.sendMail({
        from: '"Proof Of Concept - MODEC 👻" <noreply@matheuscruz.com>',
        to: comment.to,
        subject: 'YOU HAVE A NEW COMMENT',
        text: 'You have a new comment',
        html: `<b>Comment:</b> <bold>${comment.content}</bold>`
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};

module.exports = {
    sendEmail
}