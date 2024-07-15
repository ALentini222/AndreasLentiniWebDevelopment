var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/temp3', function(req, res, next) {
  res.render('template3', { title: 'Template 3' });
});

module.exports = router;