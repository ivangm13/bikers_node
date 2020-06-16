//CREAR EN BD TABLA LOGEADOS Y HACER LAS QUERIES EN ESTE FICHERO
const create = ({ username, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into logeados (username, email, password) values(?,?,?)', [username, email, password], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
};

module.exports = {
    create
}