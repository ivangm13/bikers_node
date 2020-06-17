var express = require('express');
var router = express.Router();

var Post = require('../../models/post');

/* MOSTRAR EL POST POR ID */
router.get('/:idPost', async (req, res) => {
  try {
    const post = await Post.getById(req.params.idPost);
    res.json(post);
  } catch (err) {
    res.json('Peticion fallida');
  }
});

router.get('/:idUsuario', async (req, res) => {

  try {
    const posts = await Post.getNovedades(req.params.idUsuario);
    res.json(posts);
  } catch (err) {
    res.json(err)
  }
})
module.exports = router;
