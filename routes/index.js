var express = require('express');
var router = express.Router();

const PunkAPIWrapper = require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIWrapper();

router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Home' });
});

router.get('/beers', function(req, res, next){

  punkAPI
  .getBeers()
  .then((beersFromApi) => {
  res.render('beers.hbs', {
    title: 'Beers',
    beersFromApi: beersFromApi
  })
  })
});

router.get('/random-beer', function(req, res, next){

  punkAPI
  .getRandom()
  .then((beersFromApi) => {
  res.render('random-beer.hbs', {
    title: 'Random Beer',
    beersFromApi: beersFromApi
  })
  })
  .catch(error => console.log(error));

});

  router.get("/beer/:id", function(req, res, next){

    punkAPI
    .getBeer(req.params.id)
    .then((result) => {
    res.render('specific-beer.hbs', {result})
    })
    .catch(error => console.log(error));
  
  });



module.exports = router;
