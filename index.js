require('newrelic');
var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var mongoose = require('mongoose');
var Cat = mongoose.model('Cat', {name: String});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
mongoose.connect(process.env.MONGOLAB_URI);

app.get('/', function(request, response) {
  response.send(cool());
});

app.get('/db', function(req, res) {

	var kitty = new Cat({name: 'Nero'});

	kitty.save(function(err) {
		if (err) return res.send('Error: ', err);
		res.send('Made a cat');
	});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
