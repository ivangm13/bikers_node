var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

const Blog = require('../../models/blog')
/* GET users listing. */

router.get('/', (req, res) => {
    Blog.getAllPosts()
        .then((rows) => {
            res.json(rows);
        })
        .catch(err => {
            res.json({
                error: err.message
            });
        });
})

router.post('/', upload.single('imagen'), (req, res) => {
    console.log(req.body)
    console.log(req.files.imagen.path)
    let content = fs.readFileSync(req.files.imagen.path)
    fs.writeFileSync('./images/test.png', content)
    res.json({ success: "Todo correcto" })
})

module.exports = router;