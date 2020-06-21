"use strict";
let alleArtikel;
produkteLaden("data.json");
produkteLaden2("data.json");
async function produkteLaden(_url) {
    let response = await fetch(_url);
    alleArtikel = await response.json();
    artikelHinzufügen();
}
async function produkteLaden2(_url) {
    let response = await fetch(_url);
    alleArtikel = await response.json();
    artikelHinzufügen2();
}
let preis;
let anfang;
let ganzeAusgabe;
let target;
let price;
let ausgabe = 0;
let beschreibung;
let case1;
let schuhe1;
//einkaufswagenHinzufügen
let welcheZahl;
let array;
let vorherZahl = "";
let welcheZahlString;
let welcheZahlStringNumber;
//# sourceMappingURL=data.js.map