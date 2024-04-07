const nodemailer = require('nodemailer');

// Créer un transporteur pour nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'YOUR_EMAIL@gmail.com',
        pass: 'YOUR_PASSWORD'
    }
});

// Configurer les options d'email
let mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: 'RECIPIENT_EMAIL@gmail.com',
    subject: 'Test Node.js Email',
    text: 'Hello from Node.js!'
};

// Envoyer l'email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
