var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SITE_DATA: { 
    home: '"http://localhost:8080/static/home.json"',
    rating: '"http://localhost:8080/static/rating.json"',
    leaderboard: '"http://localhost:8080/static/leaderboard.json"'
  }
})
