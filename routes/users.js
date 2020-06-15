var express = require('express');
var router = express.Router();

const User = require('../models/user');

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
/* GET http://localhost:3000/users/nombre */
router.get('/:nombre', async (req, res) => {
  try {
    const result = await User.getByNombre(req.params.nombre);
    res.json(result);
  }
  catch (err) {
    res.json(err);
  }
})


router.post('/', async (req, res) => {
  const result = await User.crearUsuario(req.body);
  if (result['affectedRows'] === 1) {
    res.json({ success: 'Usuario creado con éxito', usuario })
  } else {
    res.json({error: 'No se ha creado el usuario'})
  }
})

router.delete('/:idUsuario',async(req,res)=>{
  const result = await User.eliminarUsuario(req.params.idUsuario);
  if(result['affectedRows']===1){
    res.json({success: 'Usuario eliminado correctamente'})
  }else{
    res.json({error:'No se ha eliminado'})
  }
})



module.exports = router;
