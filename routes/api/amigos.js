var express = require('express');
var router = express.Router();

const Amigo = require('../../models/amigo');

router.get('/:id', async (req, res) => {
    try {
        const result = await Amigo.getAmigos(req.params.id);
        res.json(result);
    } catch (err) {
        res.json(err)
    }
});

router.post('/seguir/:id', async (req, res) => {
    try {
        const result = await Amigo.anadirAmigo(req.params.id, req.body.fk_idUsuario2);
        if (result['affectedRows'] === 1)
            res.json({ success: 'Amigo añadido con éxito' });
    } catch (err) {
        res.json(err)
    }
});

router.delete('/eliminar/:id/:ideliminar', async (req, res) => {
    try {
        const result = await Amigo.eliminarAmigo(req.params.id, req.params.ideliminar);
        if (result['affectedRows'] === 1)
            res.json({ success: 'amigo eliminado con éxito' })
    } catch (err) {
        res.json(err);
    }
});

router.get('/seguidores/:id',async (req,res)=>{
    try{
        const result  = await Amigo.verSeguidores(req.params.id);
        res.json(result);
    }catch(err){
        res.json(err);
    }
});

module.exports = router;