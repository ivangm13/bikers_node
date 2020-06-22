const db = require("../db");

const getAllBlog = () => {
    return new Promise((resolve, reject) => {
        db.query("select * from blog", (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getBlogActivo = (blogId) => {
    return new Promise((resolve, reject) => {
        db.query("select * from blog where id =?", [blogId], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
};

const crearBlog = ({ titulo, texto, archivo }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into blog (titulo, texto, fecha, imagen) values(?,?,?,?)', [titulo, texto, new Date(), archivo], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    getAllBlog,
    getBlogActivo,
    crearBlog
};