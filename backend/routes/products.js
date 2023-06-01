const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Base Product Page');
});
router.get('/new', function(req, res, next) {
  res.send('New Products Page');
});


module.exports = router;