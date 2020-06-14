"use strict";
let alleArtikel;
produkteLaden("data.json");
async function produkteLaden(_url) {
    let response = await fetch(_url);
    alleArtikel = await response.json();
    artikelHinzufügen();
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
//# sourceMappingURL=data.js.map