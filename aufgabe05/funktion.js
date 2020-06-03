"use strict";
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
//# sourceMappingURL=funktion.js.map