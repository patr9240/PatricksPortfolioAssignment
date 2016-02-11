/* index.ejs 
 Patrick Ross 
 Patrick's Portfolio' 
 This is the main content of the site, it contains all of the content */
 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
