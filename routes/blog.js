var express = require('express');
var router = express.Router();

const Blog = require('../models/blog')
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
});

module.exports = router;
