var express = require('express');
var router = express.Router();

const PunkAPIWrapper = require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIWrapper();

router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Home' });
});

router.get('/beers', function(req, res, next){
  getBeers();
  res.render('beers.hbs', { title: 'Beers'}, beers);
});

router.get('/random-beer', function(req, res, next) {
  res.render('beers.hbs', { title: 'Random Beer' });
});

module.exports = router;
