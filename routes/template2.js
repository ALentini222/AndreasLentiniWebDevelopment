var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/temp2', function(req, res, next) {
  res.render('template2', { title: 'Template 2' });
});

module.exports = router;