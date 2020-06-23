const crearPost = ({ titulo, descripcion, archivo, id }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into posts (titulo, descripcion, imagen, fk_idUsuario) values (?,?,?,?)', [titulo, descripcion, archivo, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};


const getById = (pPostId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from posts where id=?', [pPostId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
};

const getNovedades = (pIdUsuario) => {
    return new Promise((resolve, reject) => {
        db.query('select (select nombre from usuarios where id=posts.fk_idUsuario)as nombre, posts.* from posts, usuarios, amigos where amigos.fk_idUsuario1 = usuarios.id and posts.fk_idUsuario = amigos.fk_idUsuario2 and usuarios.id = ?', [pIdUsuario], (err, rows) => {
            if (err) reject(err)
            resolve(rows);
        })
    })
};

module.exports = {
    getById,
    getNovedades,
    crearPost
}