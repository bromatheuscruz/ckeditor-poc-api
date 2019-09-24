const sendgrid = require("@sendgrid/mail");

exports.sendEmail = async to_email => {
    const apiKey = '';
    sendgrid.setApiKey(apiKey);
    const message = {
        to: to_email,
        from: "noreply@pocmodecpoc.com.br",
        subject: "VOCÊ PRECISA RESPONDER O COMENTÁRIO",
        text: "VOCÊ PRECISA RESPONDER O COMENTÁRIO",
        html: 'VOCÊ FOI MARCADO'
    };

    await sendgrid.send(message);
};