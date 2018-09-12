var mongoose = require('mongoose');

var eleveSchema = new mongoose.Schema({
	"nom":String,
	"prenom":String,
	"age":Number,
	"ville":String,
	"javascript":String,
	"fav_web":String,
	"fav_web_why":String,
	"fav_app":String,
	"fav_app_why":String,
	"before_ifa":String,
	"why_ifa":String,
	"contact_mail":String
});

var Eleves = mongoose.model('Eleve', eleveSchema);

module.exports = Eleves;