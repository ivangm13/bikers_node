var express = require('express');
var router = express.Router();
const moment = require('moment');

const Blog = require('../../models/blog')
/* GET users listing. */

router.get('/', async (req, res) => {
    try {
        const result = await Blog.getAllBlog();
        for (resultado of result) {
            resultado.fecha = moment(resultado.fecha).format('DD/MM/YYYY');
        }
        res.json(result);
    }
    catch (err) {
        res.json(err)
    }
})

router.get('/:idBlog', async (req, res) => {
    try {
        const result = await Blog.getBlogActivo(req.params.idBlog);
        result.fecha = moment(result.fecha).format('DD/MM/YYYY');
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    try {
        const post = await Blog.crearBlog(req.body);
        res.json(post);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;