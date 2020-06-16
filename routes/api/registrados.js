const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const Logeado = require('../../models/registrado');

router.post('/registro', async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 10)

    const creacion = await Logeado.create(req.body);
    if (creacion['affectedRows'] === 1) {
        res.json({ success: 'Se ha creado el cliente' });
    } else {
        res.json({ error: 'No se ha creado' });
    }
});

router.post('/login', async (req, res) => {
    const logeados = await Usuario.getByEmail(req.body.email);
    if (logeados) {
        //Existe usuario con este email?
        const iguales = bcrypt.compareSync(req.body.password, logeados.password);
        if (iguales) {
            res.json({ success: 'Login correcto', token: createToken(logeados.id) });
        } else {
            res.json({ errorcillo: 'Email o contraseña incorrecto 2' });
        }
    } else {
        res.json({ error: 'Email o contraseña incorrecto 1' });
    }
});

function createToken(pLogeadoId) {
    const payload = {
        logeadoId: pLogeadoId,
        createdAt: moment().unix(),
        expiredAt: moment().add(15, 'minutes').unix()
    }
    return jwt.sign(payload, process.env.SECRET_KEY);
};

module.exports = router;