var mongoose = require('mongoose');
var Eleves = require('./DB/model.js');
var elevesImport = require('./data/liste.js');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('db connected');
	elevesImport.listeEleves.forEach(function(eleve) {
		var toSave = new Eleves(eleve);
		console.log(toSave);
	});
});
mongoose.connect('mongodb://localhost/ifas3');