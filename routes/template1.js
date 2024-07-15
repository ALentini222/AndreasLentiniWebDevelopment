var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/temp1', function(req, res, next) {
  res.render('template1', { title: 'Template 1' , layout:false});
});

module.exports = router;
