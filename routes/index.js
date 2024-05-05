var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Andreas Lentini' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get("/privacy", function(req, res, nxet){
  res.render('privacy', {title: 'Privacy'});
});

module.exports = router;
