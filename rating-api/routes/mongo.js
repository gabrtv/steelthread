var express = require('express');
var router = express.Router();
var jsonResponse = require('../models/jsonResponse');
var mongoose = require('mongoose');
var Rate = mongoose.model('Rate');
var Hero = mongoose.model('Hero');

/* Default GET JSON for Mongo API */
router.get('/', function(req, res, next) {
  var response = new jsonResponse("Default /api endpoint for mongo", 200, []);
  res.json(response).status(response.status);
});

/* GET All Heroes*/
router.get('/heroes', function(req, res, next) {
  Hero.find({}).then(function(heroes){
    var response = new jsonResponse('ok', 200, heroes);
    res.json(response).status(response.status);
  }).catch(next);
});

/* POST create single hero doc */
router.post('/hero', function(req, res, next){
  var hero = new Hero(req.body);
  console.log(req.body);
  hero.save().then(function(hero){
    var response = new jsonResponse('ok', 200, hero);
    res.json(response).status(response.status);
  }).catch(next);
});

// /* POST rating array */
// router.post('/rate', function(req, res, next){
  
// });

module.exports = router;
