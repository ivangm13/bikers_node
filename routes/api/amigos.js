var express = require('express');
var router = express.Router();

const Amigo = require('../../models/amigo');

router.get('/:id', async(req,res)=>{
    try{
        const result = await Amigo.getAmigos(req.params.id);
        res.json(result);
    }catch(err){
        res.json(err)
    }
})

module.exports = router;