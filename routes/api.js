const router = require('express').Router();

//Le paso a clientsrouter y usuariosrouter las peticiones que lleguen con /api/clients y /api/usuarios
const apiUsersRouter = require('./api/users');
const apiRegistradosRouter = require('./api/registrados');
const apiBlogRouter = require('./api/blog');
const apiPostRouter = require('./api/posts');

const { checkToken } = require('./middlewares');

router.use('/users', checkToken, apiUsersRouter);
router.use('/registrados', apiRegistradosRouter);
router.use('/blog', apiBlogRouter);
router.use('/posts', apiPostRouter);

module.exports = router;