"use strict";
function eisHinzufügen() {
    for (let index = 0; index < alleEisSorten.length; index++) {
        let divcontainer = document.createElement("div");
        switch (alleEisSorten[index].kategorie) {
            case 1:
                let div1 = document.getElementById("eis");
                div1.appendChild(divcontainer);
                break;
            case 2:
                let div2 = document.getElementById("weiter1");
                div2.appendChild(divcontainer);
                div2.setAttribute("style", "display: none");
                break;
            case 3:
                let div3 = document.getElementById("weiter2");
                div3.appendChild(divcontainer);
                div3.setAttribute("style", "display: none");
                break;
        }
        let name1 = document.createElement("h3");
        name1.innerHTML = alleEisSorten[index].name;
        divcontainer.appendChild(name1);
        let img = document.createElement("img");
        img.setAttribute("src", alleEisSorten[index].img);
        img.setAttribute("alt", alleEisSorten[index].name);
        divcontainer.appendChild(img);
        let preis1 = document.createElement("p");
        let preisNumber = document.createElement("number");
        divcontainer.appendChild(preis1);
        preis1.appendChild(preisNumber);
        //Preis bei Kategorie 2 weg
        if (alleEisSorten[index].kategorie == 2) {
            preisNumber.innerHTML = "";
        }
        else {
            preisNumber.innerHTML = alleEisSorten[index].preis + "€";
        }
        //Button inner änderung
        let kaufen = document.createElement("button");
        switch (alleEisSorten[index].kategorie) {
            case 1:
                kaufen.innerText = "Eine Kugel hinzufügen";
                break;
            case 2:
                kaufen.innerText = "Behälter hinzufügen";
                break;
            case 3:
                kaufen.innerText = "Extras hinzufügen";
                break;
        }
        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("preis", alleEisSorten[index].preis.toString());
        divcontainer.appendChild(kaufen);
        kaufen.setAttribute("welcherArtikel", [index].toString());
        kaufen.addEventListener("click", addToCart);
        kaufen.addEventListener("click", preisHolen);
        kaufen.addEventListener("click", addToEinkaufswagen);
    }
    let einkaufswagenZahl = 0;
    let zahl = document.createElement("string");
    function addToEinkaufswagen() {
        einkaufswagenZahl++;
        zahl.innerHTML = einkaufswagenZahl.toString();
        document.getElementById("einkaufswagen")?.appendChild(zahl);
    }
    //zeigen und hiden der Elenente
    document.getElementById("weiterButton2")?.setAttribute("style", "display: none");
    document.getElementById("weiterButton2")?.addEventListener("click", weiter2);
    document.getElementById("weiterButton")?.addEventListener("click", weiter1);
    document.getElementById("zurück")?.setAttribute("style", "display: none");
    document.getElementById("zurück2")?.setAttribute("style", "display: none");
    document.getElementById("zurück")?.addEventListener("click", zurück1);
    document.getElementById("zurück2")?.addEventListener("click", zurück2);
    function weiter1() {
        document.getElementById("eis")?.setAttribute("style", "display: none");
        document.getElementById("weiter2")?.setAttribute("style", "display: none");
        document.getElementById("weiter1")?.setAttribute("style", "display: flex");
        document.getElementById("weiterButton")?.setAttribute("style", "display: none");
        document.getElementById("weiterButton2")?.setAttribute("style", "display: flex");
        document.getElementById("zurück")?.setAttribute("style", "display: felx");
    }
    function weiter2() {
        document.getElementById("eis")?.setAttribute("style", "display: none");
        document.getElementById("weiter1")?.setAttribute("style", "display: none");
        document.getElementById("weiter2")?.setAttribute("style", "display: flex");
        document.getElementById("weiterButton2")?.setAttribute("style", "display: none");
        document.getElementById("zurück2")?.setAttribute("style", "display: flex");
        document.getElementById("zurück")?.setAttribute("style", "display: none");
    }
    function zurück1() {
        document.getElementById("eis")?.setAttribute("style", "display: felx");
        // document.getElementById("weiter2")?.setAttribute("style", "display: none");
        document.getElementById("weiter1")?.setAttribute("style", "display: none");
        document.getElementById("weiterButton2")?.setAttribute("style", "display: none");
        document.getElementById("weiterButton")?.setAttribute("style", "display: flex");
        document.getElementById("zurück")?.setAttribute("style", "display: none");
    }
    function zurück2() {
        //  document.getElementById("eis")?.setAttribute("style", "display: none");
        document.getElementById("weiter2")?.setAttribute("style", "display: none");
        document.getElementById("weiter1")?.setAttribute("style", "display: flex");
        document.getElementById("weiterButton2")?.setAttribute("style", "display: flex");
        document.getElementById("weiterButton")?.setAttribute("style", "display: none");
        document.getElementById("zurück2")?.setAttribute("style", "display: none");
        document.getElementById("zurück")?.setAttribute("style", "display: flex");
    }
}
function addToCart(_event) {
    let target = _event.target;
    let welcheZahl = parseFloat(target.getAttribute("welcherArtikel"));
    let welcheZahlString = JSON.stringify(welcheZahl);
    if (zahlGlobal == undefined) {
        zahlGlobal = "";
    }
    if (zahlGlobal != "") {
        zahlGlobal = zahlGlobal + "," + welcheZahlString;
    }
    else {
        zahlGlobal = welcheZahlString;
    }
    localStorage.setItem("Zahl", zahlGlobal);
}
let gesamtpreis;
function preisHolen(_event) {
    let target = _event.target;
    let artikelZahl = parseFloat(target.getAttribute("preis"));
    if (gesamtpreis == undefined) {
        gesamtpreis = artikelZahl;
    }
    else {
        gesamtpreis = gesamtpreis + artikelZahl;
    }
    localStorage.setItem("gesamtpreis", gesamtpreis.toString());
}
//# sourceMappingURL=erste.js.map