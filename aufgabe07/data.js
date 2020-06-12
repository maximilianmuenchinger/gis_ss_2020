"use strict";
let alleArtikel;
produkteLaden("data.json");
async function produkteLaden(_url) {
    let response = await fetch(_url);
    let jasonArray = await response.json();
    alleArtikel = await JSON.parse(JSON.stringify(jasonArray));
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