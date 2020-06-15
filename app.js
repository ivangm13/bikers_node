var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/posts');
var blogRouter = require('./routes/blog');
var { mainRedirect } = require('./routes/middlewares');

<<<<<<< HEAD
require('dotenv').config();
var app = express();

require('./db').conexion();



=======
//Para leer archivos .env
require('dotenv').config();

//Creacion de app express
var app = express();

//Usar las variables/funciones exportadas de archivo db
require('./db').conexion();
>>>>>>> 0b164999531d9876268a97f544c029cd6c9e8ca2

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRedirect);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/blog', blogRouter);


module.exports = app;
