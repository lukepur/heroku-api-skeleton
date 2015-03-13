if (process.env.NEW_RELIC_KEY) require('newrelic');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./routes');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
mongoose.connect(process.env.MONGOLAB_URI);

app.get('/', function(request, response) {
  response.send('We have removed cool faces :(');
});

app.use(routes);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
