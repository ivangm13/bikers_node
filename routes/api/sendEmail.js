var express = require('express');
const nodemailer = require('nodemailer')
var router = express.Router();


module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bikersaskus@gmail.com', // Cambialo por tu email
            pass: 'neoland20' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: `”${formulario.nombre} ” <${formulario.email}>`,
        to: 'bikersaskus@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.asunto,
        html: `
 <h2>Nombre:</h2> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <p>${formulario.motivoConsulta}</p>
 <strong>Mensaje:</strong> ${formulario.consulta}
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
},router;