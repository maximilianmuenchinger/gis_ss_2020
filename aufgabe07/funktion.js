"use strict";
//let einkaufswagenPage: Artikel[] = [];
//if (localStorage.getItem("alleArtikel") != null) {
//let artikelHinzugefügt: Artikel[] = JSON.parse(localStorage.getItem("alleArtikel")!);
//einkaufswagenPage = artikelHinzugefügt;
//}
function artikelHinzufügen() {
    for (let index = 0; index < alleArtikel.length; index++) {
        let divcontainer = document.createElement("div");
        let img1 = document.createElement("img");
        img1.setAttribute("src", alleArtikel[index].img);
        img1.setAttribute("alt", "Bild");
        divcontainer.appendChild(img1);
        let name1 = document.createElement("h3");
        name1.innerHTML = alleArtikel[index].name;
        divcontainer.appendChild(name1);
        let beschreibung1 = document.createElement("p");
        beschreibung1.innerHTML = alleArtikel[index].beschreibung;
        divcontainer.appendChild(beschreibung1);
        let preis1 = document.createElement("p");
        let preisNumber = document.createElement("number");
        divcontainer.appendChild(preis1);
        preis1.appendChild(preisNumber);
        preisNumber.innerHTML = alleArtikel[index].preis + "€";
        let kaufen = document.createElement("button");
        kaufen.innerText = "Kaufen";
        kaufen.addEventListener("click", addToEinkaufswagen);
        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("artikelPreis", alleArtikel[index].preis.toString());
        kaufen.setAttribute("welcherArtikel", [index].toString());
        kaufen.addEventListener("click", rechner);
        kaufen.addEventListener("click", einkaufswagenHinzufügen);
        divcontainer.appendChild(kaufen);
        //Kategorien werden den Ids zugewiesen
        switch (alleArtikel[index].kategorie) {
            case 1:
                let corona1 = document.getElementById("corona");
                corona1.appendChild(divcontainer);
                break;
            case 2:
                schuhe1 = document.getElementById("schuhe");
                schuhe1.appendChild(divcontainer);
                break;
            default:
                break;
        }
        // preis = alleArtikel[index].preis;
        // anfang = anfang + preis;
        // ganzeAusgabe = preis; 
    }
}
//einkaufswagen zähler
let einkaufswagenZahl = 0;
let zahl = document.createElement("string");
function addToEinkaufswagen() {
    einkaufswagenZahl++;
    zahl.innerHTML = einkaufswagenZahl.toString();
    document.getElementById("einkaufswagen")?.appendChild(zahl);
}
// Preis rechner
function rechner(_event) {
    target = _event.target;
    price = parseFloat(target.getAttribute("artikelPreis"));
    ausgabe = ausgabe + price;
    let preis1 = document.createElement("p");
    let preisNumber = document.createElement("number");
    preis1.appendChild(preisNumber);
    preisNumber.innerHTML = "gesamter Preis:" + ausgabe + "€";
    document.getElementById("preis");
}
// Kategorien unterscheidung / ausblenden
let navDiv = document.createElement("div");
let kategorien = ["Coronaartikel", "Schuhe", "alles anzeigen"];
for (let index = 0; index < kategorien.length; index++) {
    let nav;
    nav = document.createElement("p");
    nav.setAttribute("unterscheidung", kategorien[index]);
    nav.innerText = kategorien[index];
    nav.addEventListener("click", navAusblenden);
    navDiv.appendChild(nav);
}
document.getElementById("nav")?.appendChild(navDiv);
function navAusblenden(_event) {
    let nav1;
    nav1 = _event.target;
    let unterscheidung = nav1.getAttribute("unterscheidung");
    if (unterscheidung == "Coronaartikel") {
        document.getElementById("schuhe")?.setAttribute("style", "display: none");
        document.getElementById("corona")?.setAttribute("style", "display: flex");
        document.getElementById("Anker2")?.setAttribute("style", "display: none");
        document.getElementById("Anker1")?.setAttribute("style", "display: block");
    }
    if (unterscheidung == "Schuhe") {
        document.getElementById("corona")?.setAttribute("style", "display: none");
        document.getElementById("schuhe")?.setAttribute("style", "display: flex");
        document.getElementById("Anker1")?.setAttribute("style", "display: none");
        document.getElementById("Anker2")?.setAttribute("style", "display: block");
    }
    if (unterscheidung == "alles anzeigen") {
        document.getElementById("corona")?.setAttribute("style", "display: flex");
        document.getElementById("schuhe")?.setAttribute("style", "display: flex");
        document.getElementById("Anker1")?.setAttribute("style", "display: block");
        document.getElementById("Anker2")?.setAttribute("style", "display: block");
    }
}
function einkaufswagenHinzufügen(_event) {
    target = _event.target;
    let welcheZahl = parseFloat(target.getAttribute("welcherArtikel"));
    let divcontainer = document.createElement("div");
    divcontainer = document.getElementById("warenkorb");
    let img1 = document.createElement("img");
    img1.setAttribute("src", alleArtikel[welcheZahl].img);
    img1.setAttribute("alt", "Bild");
    divcontainer.appendChild(img1);
    let name1 = document.createElement("h3");
    name1.innerHTML = alleArtikel[welcheZahl].name;
    divcontainer.appendChild(name1);
    let beschreibung1 = document.createElement("p");
    beschreibung1.innerHTML = alleArtikel[welcheZahl].beschreibung;
    divcontainer.appendChild(beschreibung1);
    let preis1 = document.createElement("p");
    let preisNumber = document.createElement("number");
    divcontainer.appendChild(preis1);
    preis1.appendChild(preisNumber);
    preisNumber.innerHTML = alleArtikel[welcheZahl].preis + "€";
    let kaufen = document.createElement("button");
    kaufen.innerText = "entfernen";
    kaufen.addEventListener("click", addToEinkaufswagen);
    kaufen.setAttribute("type", "button");
}
//# sourceMappingURL=funktion.js.map