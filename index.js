var express = require('express')
var hbs = require('express-handlebars')
var logger = require('morgan')
var mongoose = require('mongoose')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + 'public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening at '+(process.env.PORT || 3000));
})
