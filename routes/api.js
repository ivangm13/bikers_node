const router = require('express').Router();

//Le paso a clientsrouter y usuariosrouter las peticiones que lleguen con /api/clients y /api/usuarios
const apiUsersRouter = require('./api/users');
const apiRegistradosRouter = require('./api/registrados');
const apiBlogRouter = require('./api/blog');
const apiPostRouter = require('./api/posts');
const sendEmailRouter = require('./api/send-email');

const { checkToken } = require('./middlewares');

router.use('/users', apiUsersRouter);
router.use('/registrados', checkToken, apiRegistradosRouter);
router.use('/blog', apiBlogRouter);
router.use('/posts', apiPostRouter);
router.use('/send-email', sendEmailRouter);

module.exports = router;