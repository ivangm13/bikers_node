const mysql = require('mysql');

//LOCAL
/* const connect = () => { 
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    });
    //Para crear variables globales para TODA la app. Usar muy pocas veces
    global.db = pool;
}; */

//PRODUCCIÓN
 const connect = () => {
    const pool = mysql.createPool({
        host: "eu-cdbr-west-03.cleardb.net",
        user: "b153f178d4c1d5",
        password: "e64d562e",
        database: "heroku_a0adf8f9ec4d669"
    });
    //Para crear variables globales para TODA la app. Usar muy pocas veces
    global.db = pool;
}; 

module.exports = {
    conexion: connect
};