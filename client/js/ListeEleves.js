const req = new XMLHttpRequest();

req.open('GET', '/Eleves', false);
req.send(null);

if (req.status === 200) {
	console.log(JSON.parse(req.responseText));
	var listeEleves = JSON.parse(req.responseText);
}

var ul = document.createElement("ul");

// Click
function showProfile(e){
	console.log(e.target.textContent);
	console.log(e.target.id);
	window.location.href = './ProfilEleve.html?id=' + event.target.id;
}
// Nom en maj
listeEleves.forEach(function(element, index){
	console.log(element);
	console.log(element.nom.toUpperCase());
	var li = document.createElement("li");
	li.innerHTML = element.nom.toUpperCase() + ' ' + element.prenom;
	li.setAttribute("id", index);
	// li.setAttribute("mabalise", element.nom.toUpperCase() + ' ' + element.prenom);
	li.addEventListener("click", showProfile, false);
	ul.appendChild(li);
});

document.getElementById("Container").appendChild(ul);