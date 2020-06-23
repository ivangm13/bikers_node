var express = require('express');
const nodemailer = require('nodemailer')
var router = express.Router();


module.exports = (email) => {
    console.log(email.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bikersaskus@gmail.com', // Cambialo por tu email
            pass: 'neoland20' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: 'Bikers',
        to: email.body.email, // Cambia esta parte por el destinatario
        subject: 'Restablece tu contraseña',
        html: `
            <h2>Restablecer contraseña.</h2>
            <p>Para restablecer tu contraseña pulsa en el siguiente enlace y sigue las instrucciones.</p>
            <a href="http://localhost:4200/recuperar">Restablecer contraseña</a>
            `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}, router;