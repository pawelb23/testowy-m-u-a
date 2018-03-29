'use strict';

// zmienne do checkboxów
var wszystkieZgody = document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");

// zmienne do inputów
var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");

// zmienna submit
var wyslijBtn = document.getElementById("wyslij");

// zmienna do komunikatorów
var wiadomosc = document.getElementById("wiadomosc");

// funkcja zaznaczania wszystkich checkboxów

function stanCheckboxa() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;

    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
}

wszystkieZgody.onchange = stanCheckboxa;

// funkcja walidujca inputy


function walidujFormularz(event) {
    wiadomosc.innerHTML = '';
    if (inputImie.value == "") {
        //        console.log("Puste !!!!!");
        var msgImie = document.createElement("li");
        msgImie.innerHTML = "Wpisz imię!";
        wiadomosc.appendChild(msgImie);
        event.preventDefault();
    }
    if (inputEmail.value == "") {
        //        console.log("Puste !!!!!");
        var msgEmail = document.createElement("li");
        msgEmail.innerHTML = "Wpisz email!";
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();
    }
    if (!zgodaMarketingowa1.checked) {
        var msgZgoda = document.createElement("li");
        msgZgoda.innerHTML = "Musisz wyrazic zgodę!";
        wiadomosc.appendChild(msgZgoda);
        event.preventDefault();
    }
}





wyslijBtn.addEventListener("click", walidujFormularz);
//wyslijBtn.onclick = walidujFormularz;