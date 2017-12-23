var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
const siteUrl = '"http://localhost:8080/"'

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SITE_DATA: { 
    home: '"http://localhost:8080/static/data/home.json"',
    rating: '"http://localhost:8080/static/data/rating.json"',
    leaderboard: '"http://localhost:8080/static/data/leaderboard.json"'
  }
})
