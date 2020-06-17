const getById = (pPostId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from posts where id=?', [pPostId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
};

const getNovedades = () =>{
    return new Promise((resolve,reject)=>{
        db.query('select posts.* from usuarios inner join amigos on amigos.? = usuarios.id inner join posts on posts.fk_idUsuario = amigos.fk_idUsuario2',[121],(err,rows)=>{
            if(err) reject(err)
            resolve(rows);    
        })
    })

};

module.exports = {
    getById,
    getNovedades
}