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

router.get('/', async(req,res)=>{
  
  try{
    const posts = await Post.getNovedades();
    res.json(posts);
  }catch(err){
    res.json({error: 'Error en la peticion'})
  }
})
module.exports = router;
