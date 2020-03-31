const nodemailer = require('nodemailer');
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'institutopedadi@gmail.com', // Cambialo por tu email
            pass: 'p3d4d12020' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: `”${formulario.nombre} 👻” <${formulario.email}>`,
        to: 'jsvicctor@gmail.com', // Cambia esta parte por el destinatario
        subject: 'Solicitud de contacto',
        html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Numero Telefonico:</strong> ${formulario.telefono} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });
};