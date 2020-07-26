"use strict";
let alleEisSorten;
eisLaden("data.json");
allesLaden("data.json");
async function eisLaden(_url) {
    let response = await fetch(_url);
    alleEisSorten = await response.json();
    eisHinzufügen();
}
async function allesLaden(_url) {
    let response = await fetch(_url);
    alleEisSorten = await response.json();
    artikelHinzufügen1();
}
let zahlGlobal;
//# sourceMappingURL=data.js.map