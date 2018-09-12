const req = new XMLHttpRequest();

req.open('GET', 'https://api.pokemontcg.io/v1/cards', false);
req.send(null);

if (req.status === 200) {
	console.log(JSON.parse(req.responseText));
	var listePokeCards = JSON.parse(req.responseText);
}

var liste = listePokeCards;
var table = document.createElement("table");
document.getElementById("container").appendChild(table);
table.setAttribute("class", "list table table-bordered");
var ul = document.createElement("ul");
ul.setAttribute("class", "pagination");
document.getElementById("container").appendChild(ul);

function showPoke(event){
    console.log(event.currentTarget);
    window.location.href = './ProfilPokeCards.html?id=' + event.currentTarget.id;
}

liste.cards.forEach(function(element, index){
	var tr = document.createElement("tr");
	tr.innerHTML = ' <td class="name">Name: <strong>' + element.name + ' </strong></td><td>Type: <strong>' + element.types + ' </strong></td><td>Pokedex Number: <strong>' + element.nationalPokedexNumber + '</strong></td><td><img src="' + element.imageUrl + '"style="width:128px;"></td>';
	tr.setAttribute("class","cardName list--list-item");
    tr.setAttribute("id",index);
	tr.addEventListener("click", showPoke, false);
	table.appendChild(tr);
});
var pokeList = new List('container', {
  valueNames: ['name'],
  page: 10,
  pagination: true
});