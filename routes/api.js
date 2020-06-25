const router = require('express').Router();

//Le paso a clientsrouter y usuariosrouter las peticiones que lleguen con /api/clients y /api/usuarios
const apiUsersRouter = require('./api/users');

const apiBlogRouter = require('./api/blog');
const apiPostRouter = require('./api/posts');
const sendEmailRouter = require('./api/sendEmail');
const apiAmigos = require('./api/amigos');
const recuperarRouter = require('./api/recuperar');

const { checkToken } = require('./middlewares');

router.use('/users', apiUsersRouter);

router.use('/blog', apiBlogRouter);
router.use('/posts', apiPostRouter);
router.use('/sendEmail', sendEmailRouter);
router.use('/amigos',apiAmigos);
router.use('/recuperar',recuperarRouter);

module.exports = router;