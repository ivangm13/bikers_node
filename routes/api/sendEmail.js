var express = require('express');
const nodemailer = require('nodemailer')
var router = express.Router();

module.exports = (formulario) => {
    console.log(formulario.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bikersaskus@gmail.com', // Cambialo por tu email
            pass: 'neoland20' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: `${formulario.body.nombre} <${formulario.body.email}>`,
        to: 'bikersaskus@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.body.asunto,
        html: `
            <h2>Nombre:</h2> ${formulario.body.nombre} <br/>
            <strong>E-mail:</strong> ${formulario.body.email} <br/>
            <p>${formulario.body.motivoConsulta}</p>
            <strong>Mensaje:</strong> ${formulario.body.consulta}
            `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}, router;