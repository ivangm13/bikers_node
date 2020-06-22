var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var apiRouter = require('./routes/api');
var { mainRedirect } = require('./routes/middlewares');

//Para leer archivos .env
require('dotenv').config();

//Creacion de app express
var app = express();

//Usar las variables/funciones exportadas de archivo db
require('./db').conexion();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRedirect);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = app;
