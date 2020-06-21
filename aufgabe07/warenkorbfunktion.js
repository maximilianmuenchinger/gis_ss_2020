"use strict";
//Preis ausgabe
let ausgabe1 = document.createElement("p");
let ausgabe3 = localStorage.getItem("ausgabe2");
ausgabe1.innerHTML = "total:" + ausgabe3 + "€";
document.getElementById("preis")?.appendChild(ausgabe1);
// alles entfernen button
let allesEntfernen = document.createElement("button");
allesEntfernen.innerText = "alles entfernen";
allesEntfernen.setAttribute("type", "button");
allesEntfernen.addEventListener("click", alleArtikelEntfernen);
document.getElementById("allesLöschen")?.appendChild(allesEntfernen);
function alleArtikelEntfernen(_event) {
    localStorage.removeItem("ausgabe2");
    localStorage.removeItem("vorherzahl");
    location.reload();
}
let welcheZahl2 = localStorage.getItem("vorherzahl");
let res = welcheZahl2.split(",");
let result = res.map(Number);
let artikelZahl;
let divcontainer;
let wert;
//Produkte hinzufügen
function artikelHinzufügen2() {
    for (let index = 0; index < result.length; index++) {
        let indexZahl = result[index];
        divcontainer = document.createElement("div");
        document.getElementById("warenkorb")?.appendChild(divcontainer);
        let img1 = document.createElement("img");
        img1.setAttribute("src", alleArtikel[indexZahl].img);
        img1.setAttribute("alt", "Bild");
        divcontainer.appendChild(img1);
        let name1 = document.createElement("h3");
        name1.innerHTML = alleArtikel[indexZahl].name;
        divcontainer.appendChild(name1);
        let preis1 = document.createElement("p");
        let preisNumber = document.createElement("number");
        divcontainer.appendChild(preis1);
        preis1.appendChild(preisNumber);
        preisNumber.innerHTML = alleArtikel[indexZahl].preis + "€";
        let kaufen;
        kaufen = document.createElement("button");
        kaufen.innerText = "entfernen";
        kaufen.addEventListener("click", einzelneArtikelEntfernen);
        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("welcheZahl4", [index].toString());
        divcontainer.appendChild(kaufen);
    }
}
function einzelneArtikelEntfernen(_event) {
    target = _event.target;
    artikelZahl = parseFloat(target.getAttribute("welcheZahl4"));
    let resultIndex = result[artikelZahl];
    let artikelPreis = alleArtikel[resultIndex].preis;
    let preisStorage2 = JSON.parse(localStorage.getItem("ausgabe2"));
    preisStorage2 = preisStorage2 - artikelPreis;
    localStorage.setItem("ausgabe2", preisStorage2.toString());
    result.splice(artikelZahl, 1);
    let resultjoin = result.join();
    localStorage.setItem("vorherzahl", resultjoin);
    let localStorage2 = localStorage.getItem("vorherzahl");
    if (localStorage2[0] == undefined) {
        localStorage.clear();
    }
    location.reload();
}
//# sourceMappingURL=warenkorbfunktion.js.map