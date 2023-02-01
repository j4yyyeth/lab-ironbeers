var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Home' });
});

router.get('/beers', function(req, res, next){
  res.render('beers.hbs', { title: 'Beer'});
  getBeers();
});

router.get('/random-beer', function(req, res, next) {
  res.render('beers.hbs', { title: 'Random Beer' });
});

module.exports = router;
