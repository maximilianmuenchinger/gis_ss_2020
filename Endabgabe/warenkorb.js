"use strict";
let arrayZahl = localStorage.getItem("Zahl");
let split = arrayZahl.split(",");
let splitResult = split.map(Number);
let gesamtPreis = localStorage.getItem("gesamtpreis");
//variablen für getBestellung
let bestellung = "";
let getBestellung;

function artikelHinzufügen1() {
    for (let index = 0; index < splitResult.length; index++) {
        let indexZahl = splitResult[index];
        let divcontainer = document.createElement("div");
        document.getElementById("Artikel")?.appendChild(divcontainer);
        let name1 = document.createElement("h3");
        name1.innerHTML = alleEisSorten[indexZahl].name;
        name1.setAttribute("bestellung", alleEisSorten[indexZahl].name);
        divcontainer.appendChild(name1);
        let img1 = document.createElement("img");
        img1.setAttribute("src", alleEisSorten[indexZahl].img);
        img1.setAttribute("alt", "Bild");
        divcontainer.appendChild(img1);
        let preis1 = document.createElement("p");
        let preisNumber = document.createElement("number");
        divcontainer.appendChild(preis1);
        preis1.appendChild(preisNumber);
        if (alleEisSorten[indexZahl].kategorie == 2) {
            preisNumber.innerHTML = "-";
        }
        else {
            preisNumber.innerHTML = alleEisSorten[indexZahl].preis + "€";
            preisNumber.setAttribute("preis", alleEisSorten[indexZahl].preis.toString());
        }
        let entfernen;
        entfernen = document.createElement("button");
        entfernen.innerText = "entfernen";
        entfernen.addEventListener("click", einzelneArtikelEntfernen1);
        //kaufen.setAttribute("type", "button");
        entfernen.setAttribute("welcheZahl5", [indexZahl].toString());
        entfernen.setAttribute("welcheZahl6", [index].toString());
        divcontainer.appendChild(entfernen);
        //bestellung in local storage
        getBestellung = alleEisSorten[indexZahl].name;
        bestellung = bestellung + "," + getBestellung;
        localStorage.setItem("Bestellung", bestellung);
    }
    document.getElementById("allesEntfernen")?.addEventListener("click", allesEntfernen1);
    function allesEntfernen1() {
        localStorage.clear();
        location.reload();
    }
    let preisDiv = document.getElementById("preis");
    preisDiv.innerText = gesamtPreis + "€";
    // button für Server send
    document.getElementById("button")?.addEventListener("click", submitVerarbeiten1);
}
function einzelneArtikelEntfernen1(_event) {
    let target = _event.target;
    let artikelZahl = parseFloat(target.getAttribute("welcheZahl5")); //welches Produkt
    let artikelZahl2 = parseFloat(target.getAttribute("welcheZahl6")); //welche stelle im array 
    let resultIndex = splitResult[artikelZahl];
    let artikelPreis = alleEisSorten[artikelZahl].preis;
    let preisStorage2 = parseFloat(gesamtPreis);
    preisStorage2 = preisStorage2 - artikelPreis;
    localStorage.setItem("gesamtpreis", preisStorage2.toString());
    splitResult.splice(artikelZahl2, 1);
    console.log(splitResult);
    let resultjoin = splitResult.join();
    console.log(resultjoin);
    localStorage.setItem("Zahl", resultjoin);
    console.log(localStorage);
    let localStorage2 = localStorage.getItem("Zahl");
    if (localStorage2[0] == undefined) {
        localStorage.clear();
    }
    location.reload();
}
//Datenbank und Server
async function submitVerarbeiten1() {
    let formData = new FormData(document.forms[0]);
    let string = localStorage.getItem("Bestellung");
    let stringFormData1 = formData.append("Bestellung", string);
    let url = "https://gismaximilianmuenchinger.herokuapp.com/senden";
    let query = new URLSearchParams(formData);
    let query2 = new URLSearchParams(stringFormData1);
    url += "?" + query.toString() + query2;
    let response = await fetch(url);
}
//# sourceMappingURL=warenkorb.js.map