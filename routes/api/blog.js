var express = require('express');
var router = express.Router();
const moment = require('moment');

const Blog = require('../../models/blog')
/* GET users listing. */

router.get('/', (req, res) => {
    Blog.getAllBlog()
        .then((rows) => {
            res.json(rows);
        })
        .catch(err => {
            res.json({
                error: err.message
            });
        });
})

router.get('/:idBlog', async (req, res) => {
    try {
        const result = await Blog.getBlogActivo(req.params.idBlog);
        result.fecha = moment(result.fecha).format('DD/MM/YYYY');
        res.json(result);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;