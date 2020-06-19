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
        from: `${formulario.body.nombre}`,
        to: 'bikersaskus@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.body.motivoConsulta,
        html: `
            <h2>Nombre: ${formulario.body.nombre}</h2> <br/>
            <strong>E-mail: </strong> ${formulario.body.email} <br/>
            <strong>Motivo de la consulta: </strong> ${formulario.body.motivoConsulta} <br/>
            <strong>Mensaje: </strong> ${formulario.body.consulta}
            `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}, router;