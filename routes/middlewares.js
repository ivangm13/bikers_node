const jwt = require('jsonwebtoken');
const moment = require('moment');

const Registrado = require('../models/registrado');

const mainRedirect = (req, res, next) => {
    if (req.url == '/') {
        res.redirect('/api/users');
    } else {
        next();
    }
};

const checkToken = (req, res, next) => {

    //Comprobar si el token viene en la cabecera (req.headers['User-Token] --> si lo tenemos. Con ! delante de req seria si no tenemos)
    if (!req.headers['user-token']) {
        return res.json({ error: 'Debes incluir el token dentro de la cabecera User-Token' })
    }
    //Comprobar si el token es correcto
    const userToken = req.headers['user-token'];
    let payload = {};
    try {
        payload = jwt.verify(userToken, process.env.SECRET_KEY);
    }
    catch (err) {
        return res.json({ error: 'El token es incorrecto' });
    }

    //Compruebo si el token esta caducado
    const fechaActual = moment().unix();
    if (fechaActual > payload.expiredAt) {
        return res.json({ error: 'El token incluido esta caducado' });
    }

    //Incluyo los datos desencriptados del token dentro de la petición
    req.payload = payload;

    next();
};

const isAdmin = async (req, res, next) => {
    //El userId del payload
    const usuario = await Registrado.getById(req.payload.userId);
    if (!usuario || usuario.role !== 'ADMIN') {
        return res.json({ error: 'El acceso a esta ruta solo es para ADMINs' });
    }
    next();
};

module.exports = {
    mainRedirect, checkToken, isAdmin
}