"use strict";
let toilettenpapier = {
    img: "21.jpg",
    name: "Toilettenpapier",
    beschreibung: "man weiß ja nie",
    preis: "50€"
};
let seife = {
    img: "22.jpg",
    name: "Seife",
    beschreibung: "super wichtig",
    preis: "5€"
};
let mehl = {
    img: "23.jpg",
    name: "Mehl",
    beschreibung: "alle werden auf einmal Bäcker",
    preis: "20€"
};
let desinfektionsmittel = {
    img: "24.jpg",
    name: "Desinfektionsmittel",
    beschreibung: "schlagt euch drum",
    preis: "100€"
};
let maske = {
    img: "25.jpg",
    name: "Maske",
    beschreibung: "wichtig zum einkaufe",
    preis: "5€"
};
let dosen = {
    img: "26.jpg",
    name: "Dosen",
    beschreibung: "super lecker",
    preis: "2€"
};
let coronaartikel = [toilettenpapier, seife, mehl, desinfektionsmittel, maske, dosen];
let grauestiefel = {
    img: "1.png",
    name: "Graue Stiefe",
    beschreibung: "sehr Grau",
    preis: "50€"
};
let nikes = {
    img: "2.jpg",
    name: "Neon gelbe Nikes",
    beschreibung: "wilde Farbe",
    preis: "200€"
};
let nikes2 = {
    img: "3.jpg",
    name: "Blau orangene Nikes",
    beschreibung: "nicht ganz so wilde Farbe",
    preis: "180€"
};
let converse = {
    img: "4.jpg",
    name: "Converse",
    beschreibung: "Converse in verschiedenen Farben",
    preis: "50€"
};
let rollschuhe = {
    img: "5.jpg",
    name: "Rollschuhe",
    beschreibung: "Krasse Rollschuhe",
    preis: "20€"
};
let schnürstiefel = {
    img: "6.jpg",
    name: "Wilde Schnürstiefel",
    beschreibung: "Hässliche Stiefel in Babyblau",
    preis: "1000€"
};
let schuhe = [grauestiefel, nikes, nikes2, converse, rollschuhe, schnürstiefel];
for (let index = 0; index < coronaartikel.length; index++) {
    let DIV = document.createElement("div");
    DIV.id = "Div1" + index;
    document.getElementById("corona")?.appendChild(DIV);
    let IMG = document.createElement("img");
    IMG.src = coronaartikel[index].img;
    document.getElementById("Div1" + index)?.appendChild(IMG);
    let H = document.createElement("h3");
    H.innerHTML = coronaartikel[index].name;
    document.getElementById("Div1" + index)?.appendChild(H);
    let P = document.createElement("p");
    P.innerHTML = coronaartikel[index].beschreibung;
    document.getElementById("Div1" + index)?.appendChild(P);
    let PREIS = document.createElement("p");
    PREIS.innerHTML = coronaartikel[index].preis;
    document.getElementById("Div1" + index)?.appendChild(PREIS);
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("Div1" + index)?.appendChild(kaufen);
}
for (let index = 0; index < schuhe.length; index++) {
    let DIV = document.createElement("div");
    DIV.id = "Div2" + index;
    document.getElementById("schuhe")?.appendChild(DIV);
    let IMG = document.createElement("img");
    IMG.src = schuhe[index].img;
    document.getElementById("Div2" + index)?.appendChild(IMG);
    let H = document.createElement("h3");
    H.innerHTML = schuhe[index].name;
    document.getElementById("Div2" + index)?.appendChild(H);
    let P = document.createElement("p");
    P.innerHTML = schuhe[index].beschreibung;
    document.getElementById("Div2" + index)?.appendChild(P);
    let PREIS = document.createElement("p");
    PREIS.innerHTML = schuhe[index].preis;
    document.getElementById("Div2" + index)?.appendChild(PREIS);
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("Div2" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=shop.js.map