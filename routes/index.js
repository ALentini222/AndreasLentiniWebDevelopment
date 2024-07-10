var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Andreas Lentini Web Development' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products and Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get("/privacy", function(req, res, nxet){
  res.render('privacy', {title: 'Privacy'});
});

module.exports = router;
