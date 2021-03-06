//Queries necesarias: getAll, getByNombre, getByUsername, Crear, Modificar, Eliminar
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};



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
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
}

const getIdByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select id from usuarios where email = ?', [pEmail], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
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
    return new Promise((resolve, reject) => {
        db.query('delete from usuarios where id = ?', [pUsuarioId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const modificarUsuario = (pUsuarioId, { nombre, apellidos, username, email, password, ciudad, fecha_nacimiento, imagen }) => {
    return new Promise((resolve, reject) => {
        db.query('update usuarios set nombre =?, apellidos=?,username=?,email=?, password=?,ciudad=?,fecha_nacimiento=?,imagen=? where id=?',
            [nombre, apellidos, username, email, password, ciudad, fecha_nacimiento, imagen, pUsuarioId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}

const getUserById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where id=?', [pId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
};

const getUserByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where email=?', [pEmail], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
};

const cambioPassword = (pId, pPassword) => {
    return new Promise((resolve, reject) => {
        db.query('update usuarios set password = ? where id = ?', [pPassword, pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}


module.exports = {
    getAll,
    getByNombre,
    getByUsername,
    crearUsuario,
    eliminarUsuario,
    modificarUsuario,
    getUserById,
    getIdByEmail,
    getUserByEmail,
    cambioPassword
}