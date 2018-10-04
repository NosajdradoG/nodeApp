var express = require('express');
var app = express();
var mongoose = require('mongoose');
var listeEleves = require('./data/liste.js');
var Eleves = require('./DB/model.js');
var bodyParser = require('body-parser');
var db = mongoose.connection;

// app.use = config du serv
app.use('/js', express.static('./client/js'));
app.use('/css', express.static('./client/css'));

// Je configure le body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connection a mongoose
mongoose.connect('mongodb://localhost/ifas3');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('db connected');
});

// Retourne le json de la bdd sur /Eleves
app.get('/Eleves', function (req,res) {
	Eleves.find({}, function(err,docs) {
		if (err) return console.log(error);
			res.send(docs);
	})
});

app.get('/ListeEleves.html', function (req, res) {
	res.sendFile(__dirname + '/client/ListeEleves.html');
});

app.get('/ProfilEleve.html', function (req, res) {
	res.sendFile(__dirname + '/client/ProfilEleve.html');
});

app.get('/ajoutEleve', function (req, res) {
   res.sendFile(__dirname + '/client/ajoutEleve.html');
});

app.post('/ajoutSucces', function (req, res) {
	var ifas3 = new Eleves(req.body);
  	ifas3.save()
    .then(item => {
      res.sendFile(__dirname + '/client/AjoutSucces.html');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/client/index.html');
});

app.get('/ProfilPokeCards.html', function (req, res) {
   res.sendFile(__dirname + '/client/ProfilPokeCards.html');
});


app.listen(8080, function () {
	  console.log('serveur lancé port 8080');
});