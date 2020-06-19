var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var moment = require('moment');

const User = require('../../models/user');

/* GET http://localhost:3000/users */
router.get('/', (req, res) => {
  User.getAll()
    .then(rows => {
      res.json(rows);
    })
    .catch(err => {
      res.json({ error: err.message })
    });
});
/* GET http://localhost:3000/users/username */
router.get('/alias/:username', async (req, res) => {
  console.log(req.params.username)
  try {
    const result = await User.getByUsername(req.params.username);
    res.json(result);
  }
  catch (err) {
    res.json(err);
  }
})
router.get('/id/:email', async (req, res) => {
  try {
    const result = await User.getIdByEmail(req.params.email);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
})
/* GET http://localhost:3000/users/nombre */
router.get('/:nombre', async (req, res) => {
  try {
    const result = await User.getByNombre(req.params.nombre);
    res.json(result);
  }
  catch (err) {
    res.json(err);
  }
});

router.get('/get/:id', async (req, res) => {
  console.log('Dentro')
  try {
    const result = await User.getUserById(req.params.id);
    res.json(result);
  } catch (err) {
    res.json(err)
  }
})


router.post('/', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 9);
  // const mail = await User.getByEmail(req.body.email);
  const result = await User.crearUsuario(req.body);
  // console.log(mail);
  result.fecha_nacimiento = moment(result.fecha_nacimiento).format('YYYY-MM-DD');
  // if (mail.email === req.body.email) {
  //   res.json({ error: 'No se ha creado el usuario' })
  // }
  if (result['affectedRows'] === 1) {
    res.json({ success: 'Usuario creado con éxito' })
  } else {
    res.json({ error: 'No se ha creado el usuario' })
  }
})

router.delete('/:idUsuario', async (req, res) => {
  const result = await User.eliminarUsuario(req.params.idUsuario);
  if (result['affectedRows'] === 1) {
    res.json({ success: 'Usuario eliminado correctamente' })
  } else {
    res.json({ error: 'No se ha eliminado' })
  }
});

router.put('/:idUsuario', async (req, res) => {
  const result = await User.modificarUsuario(req.params.idUsuario, req.body);
  if (result['affectedRows'] === 1) {
    res.json({ success: 'Usuario actualizado con éxito' });
  } else {
    res.json({ error: 'No se ha podido actualizar' });
  }
});

router.post('/login', async (req, res) => {
  console.log(req.body.email);
  const registrado = await User.getUserByEmail(req.body.email);
  if (registrado) {
    //Existe usuario con este email?
    const iguales = bcrypt.compareSync(req.body.password, registrado.password);
    if (iguales) {
      res.json({ success: 'Login correcto', token: createToken(registrado.id), rol: registrado.rol });
    } else {
      res.json({ error: 'Email o contraseña incorrecto 2' });
    }
  } else {
    res.json({ error: 'Email o contraseña incorrecto 1' });
  }
});

function createToken(pUsuarioId) {
  const payload = {
    usuarioId: pUsuarioId,
    createdAt: moment().unix(),
    expiredAt: moment().add(15, 'minutes').unix()
  }
  return jwt.sign(payload, process.env.SECRET_KEY);
};



module.exports = router;
