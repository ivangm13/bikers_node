var express = require('express');
const nodemailer = require('nodemailer')
var router = express.Router();

router.post('/send-email', async (req, res) => {
    /* meter un switallert */
    const {
        nombre,
        email,
        motivoConsulta,
        consulta
    } = req.body
    contentHTML = `  
        <h1>Correo de consulta de Usuario:</h1>
        <h2>Datos del usuario: </h2>
        <ul>
            <li>${nombre}</li>
            <li>${email}</li>
            <li>${motivoConsulta}</li>
            <li>${consulta}</li>
        </ul>

    `
   const transporter= nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 465,
       secure: false,
       auth: {
           user: 'bikersaskus@gmail.com',
           pass: 'neoland20'

       },
       tls:{
           rejectUnauthorized: false 
           //esto sirve para poder enviar un correo desde cualquier dominio
       }

       
   })
   const info = await transporter.sendMail({
        from: "'Bikers Consulta'",
        to: 'bikersaskus@gmail.com',
        subject: 'Formulario de consulta',
        html: contentHTML
   })
  
})

module.exports = router;