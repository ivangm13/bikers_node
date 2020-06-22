var express = require('express');
var router = express.Router();

var Post = require('../../models/post');


router.post('/:idUsuario', async (req,res)=>{
  try {
    const post = await Post.crearPost(req.body.id, req.body);
    res.json(post);
  } catch (err) {
    res.json('Peticion fallida');
  }
})

/* MOSTRAR EL POST POR ID */
router.get('/:idPost', async (req, res) => {
  try {
    const post = await Post.getById(req.params.idPost);
    res.json(post);
  } catch (err) {
    res.json('Peticion fallida');
  }
});

router.get('/home/:idUsuario', async (req, res) => {
console.log(req.params.idUsuario)
  try {
    const posts = await Post.getNovedades(req.params.idUsuario);
    res.json(posts);
  } catch (err) {
    res.json(err)
  }
})


module.exports = router;
