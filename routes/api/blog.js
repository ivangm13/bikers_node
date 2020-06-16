var express = require('express');
var router = express.Router();

const Blog = require('../models/blog')
/* GET users listing. */
<<<<<<< HEAD:routes/blog.js

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
=======
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
>>>>>>> develop:routes/api/blog.js
});

module.exports = router;
