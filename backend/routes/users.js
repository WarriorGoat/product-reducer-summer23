const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Base Route');
});
router.get('/new', function(req, res, next) {
  res.send('New User Route');
});


module.exports = router;
