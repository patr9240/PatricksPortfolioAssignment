var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('#about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET Services page. */
router.get('#services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Portfolio page. */
router.get('#portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'My Portfolio' });
});

/* GET contact page. */
router.get('#contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;
