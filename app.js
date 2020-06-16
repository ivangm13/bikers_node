var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var apiRouter = require('./routes/api');
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
>>>>>>> develop

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRedirect);
app.use('/api', apiRouter);

module.exports = app;
