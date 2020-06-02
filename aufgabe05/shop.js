"use strict";
let toilettenpapier = {
    img: "21.jpg",
    name: "Toilettenpapier",
    beschreibung: "man weiß ja nie",
    preis: 50,
    kategorie: 1
};
let seife = {
    img: "22.jpg",
    name: "Seife",
    beschreibung: "super wichtig",
    preis: 5,
    kategorie: 1
};
let mehl = {
    img: "23.jpg",
    name: "Mehl",
    beschreibung: "alle werden auf einmal Bäcker",
    preis: 20,
    kategorie: 1
};
let desinfektionsmittel = {
    img: "24.jpg",
    name: "Desinfektionsmittel",
    beschreibung: "schlagt euch drum",
    preis: 100,
    kategorie: 1
};
let maske = {
    img: "25.jpg",
    name: "Maske",
    beschreibung: "wichtig zum einkaufe",
    preis: 5,
    kategorie: 1
};
let dosen = {
    img: "26.jpg",
    name: "Dosen",
    beschreibung: "super lecker",
    preis: 2,
    kategorie: 1
};
let grauestiefel = {
    img: "1.png",
    name: "Graue Stiefe",
    beschreibung: "sehr Grau",
    preis: 50,
    kategorie: 2
};
let nikes = {
    img: "2.jpg",
    name: "Neon gelbe Nikes",
    beschreibung: "wilde Farbe",
    preis: 200,
    kategorie: 2
};
let nikes2 = {
    img: "3.jpg",
    name: "Blau orangene Nikes",
    beschreibung: "nicht ganz so wilde Farbe",
    preis: 180,
    kategorie: 2
};
let converse = {
    img: "4.jpg",
    name: "Converse",
    beschreibung: "Converse in verschiedenen Farben",
    preis: 50,
    kategorie: 2
};
let rollschuhe = {
    img: "5.jpg",
    name: "Rollschuhe",
    beschreibung: "Krasse Rollschuhe",
    preis: 20,
    kategorie: 2
};
let schnürstiefel = {
    img: "6.jpg",
    name: "Wilde Schnürstiefel",
    beschreibung: "Hässliche Stiefel in Babyblau",
    preis: 1000,
    kategorie: 2
};
let alleArtikel = [toilettenpapier, seife, mehl, desinfektionsmittel, maske, dosen, grauestiefel, nikes, nikes2, converse, rollschuhe, schnürstiefel];
createArtikel();
function createArtikel() {
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
        kaufen.innerHTML = "Kaufen";
        divcontainer.appendChild(kaufen);
        //Kategorien werden den Ids zugewiesen
        switch (alleArtikel[index].kategorie) {
            case 1:
                let corona1 = document.getElementById("corona");
                corona1.appendChild(divcontainer);
                break;
            case 2:
                let schuhe1 = document.getElementById("schuhe");
                schuhe1.appendChild(divcontainer);
                break;
            default:
                break;
        }
    }
}
//# sourceMappingURL=shop.js.map