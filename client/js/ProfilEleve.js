  const req = new XMLHttpRequest();

req.open('GET', '/listejson', false);
req.send(null);

if (req.status === 200) {
	console.log(JSON.parse(req.responseText));
	var listeEleves = JSON.parse(req.responseText);
}

var url = window.location.href;

var params = (new URL(document.location)).searchParams;

var info = params.get("id");

console.log(listeEleves[info]);

var  goodEleve = listeEleves[info];

var nom = document.createElement("h2");
nom.innerHTML = goodEleve.nom + ' ' + goodEleve.prenom + ' ' + goodEleve.age + ' ans ' + goodEleve.ville + ' Javascript ? ' + goodEleve.javascript + ' Site favoris: ' + goodEleve.fav_web;
var cont = document.getElementById("Container");
cont.appendChild(nom);