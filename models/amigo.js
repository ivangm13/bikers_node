
const getAmigos = (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from amigos where fk_idUsuario1 = ?', [id], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const anadirAmigo = (idUsuarioActivo,idUsuario2)=>{
    return new Promise((resolve,reject)=>{
        db.query('insert into amigos (fk_idUsuario1,fk_idUsuario2) values (?,?)', [idUsuarioActivo, idUsuario2],
        (err,result)=>{
            if(err) reject(err);
            resolve(result);
        });
    });
};

const eliminarAmigo = (idUsuarioActivo, idUsuario2) =>{
    return new Promise((resolve,reject)=>{
        db.query('delete from amigos where fk_idUsuario1 = ? and fk_idUsuario2 = ?', [idUsuarioActivo, idUsuario2],
        (err,result)=>{
            if(err) reject(err);
            resolve(result);
        });
    });
};

const verSeguidores = (idUsuarioActivo)=>{
    return new Promise((resolve,reject)=>{
        db.query('select * from amigos where fk_idUsuario2 = ?', [idUsuarioActivo],(err,rows)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}
const getPersonas = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM heroku_a0adf8f9ec4d669.usuarios where id != ?', [id], (err, rows) => {
            if (err) reject(err),
                resolve(rows);
        });
    });
}


module.exports = {
    getAmigos,
    anadirAmigo,
    eliminarAmigo,
    verSeguidores,
    getPersonas
};