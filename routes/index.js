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
router.get('/temp1', function(req,res,next){
  res.render('template1', {title: 'Template 1'});
});
router.get('/temp2', function(req,res,next){
  res.render('template2', {title: 'Template 2'});
});
router.get('/temp3', function(req,res,next){
  res.render('template3', {title: 'Template 3'});
});
module.exports = router;
