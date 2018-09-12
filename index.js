var express = require('express');
var app = express();
var mongoose = require('mongoose');
var listeEleves = require('./data/liste.js');
var Eleves = require('./DB/model.js');
var bodyParser = require('body-parser');

// app.use = config du serv
app.use('/js', express.static('./client/js'));
app.use('/css', express.static('./client/css'));
// Je configure le body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/client/index.html');
});

app.get('/ProfilPokeCards.html', function (req, res) {
   res.sendFile(__dirname + '/client/ProfilPokeCards.html');
});

app.get('/ListeEleves.html', function (req, res) {
	res.sendFile(__dirname + '/client/ListeEleves.html');
});

app.get('/ProfilEleve.html', function (req, res) {
	res.sendFile(__dirname + '/client/ProfilEleve.html');
});

app.get('/listejson', function (req, res) {
   res.json(listeEleves.listeEleves);
});

app.get('/login', function (req, res) {
	res.sendFile(__dirname + '/client/login.html');
});

app.post('/api/login', function (req, res) {
	console.log(req.body.prenom);
	console.log(req.body.mail);
});

app.listen(8080, function () {
	  console.log('serveur lancé port 8080');
});