var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const moment = require('moment');

const Blog = require('../../models/blog')
/* GET users listing. */

router.get('/', async (req, res) => {
    try {
        const result = await Blog.getAllBlog();
        result.fecha = moment(result.fecha).format('DD/MM/YYYY');
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
})

router.post('/', upload.single('imagen'), (req, res) => {
    console.log(req.body)
    console.log(req.files.imagen.path)
    let content = fs.readFileSync(req.files.imagen.path)
    fs.writeFileSync('./images/test.png', content)
    res.json({ success: "Todo correcto" })
})

module.exports = router;