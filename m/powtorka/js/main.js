'use strict';


var tekst = 'jakis tekst';

//tworzenie znacznikow
var paragraf = document.createElement('p');

document.getElementById('kontener').appendChild(paragraf);

//paragraf.appendChild(tekst);

paragraf.innerHTML = tekst;

//pobieranie tekstu
console.log(document.getElementById('string').innerHTML);

var paragraf2 = document.createElement('p');

document.body.appendChild(paragraf2);

paragraf2.innerHTML = document.getElementById('string').innerHTML;



