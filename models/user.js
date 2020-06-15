

//Queryes necesarias: getAll, getByNombre, getByUsername, Crear, Modificar, Eliminar
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const getByNombre = (pNombre) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where nombre = ?', [pNombre], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}


const getByUsername = (pUsername) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where username = ?', [pUsername], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

const crearUsuario = ({ nombre, apellidos, username, email, fecha_registro = 0, password, ciudad, fecha_nacimiento, imagen }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (nombre,apellidos,username,email,fecha_registro,password,ciudad,fecha_nacimiento,imagen) values (?,?,?,?,?,?,?,?,?)', [nombre, apellidos, username, email, new Date(), password, ciudad, fecha_nacimiento, imagen], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const eliminarUsuario = (pUsuarioId) => {
    return new Promise((resolve,reject)=>{
        db.query('delete from usuarios where id = ?',[pUsuarioId],(err,result)=>{
            if(err) reject(err);
            resolve(result);
        })
    })
}



module.exports = {
    getAll,
    getByNombre,
    getByUsername,
    crearUsuario,
    eliminarUsuario
}