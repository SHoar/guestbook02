var express = require('express')
var hbs = require('express-handlebars')
var logger = require('morgan')
var mongoose = require('mongoose')
var MONGODB_URI = 'mongodb://heroku_6v1crplr:q2ida9g7bpcmb3dm7vpeoeb5nr@ds147167.mlab.com:47167/heroku_6v1crplr'
var db = mongoose.connect(MONGODB_URI)

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening at '+(process.env.PORT || 3000));
})
