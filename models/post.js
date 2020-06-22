const crearPost = ({ titulo, descripcion, pIdUsuario }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into posts (titulo, descripcion, fk_idUsuario) values (?,?,?)', [titulo, descripcion, pIdUsuario], (err, result) => {
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

const getNovedades = (pIdUsuario) =>{
    return new Promise((resolve,reject)=>{
        db.query('select posts.* from usuarios inner join amigos on amigos.fk_idUsuario1 = usuarios.id inner join posts on posts.fk_idUsuario = amigos.fk_idUsuario2 where usuarios.id = ?',[pIdUsuario],(err,rows)=>{
            if(err) reject(err)
            resolve(rows);    
        })
    })

};

module.exports = {
    getById,
    getNovedades,
    crearPost
}