//let einkaufswagenPage: Artikel[] = [];
//if (localStorage.getItem("alleArtikel") != null) {
    //let artikelHinzugefügt: Artikel[] = JSON.parse(localStorage.getItem("alleArtikel")!);
    //einkaufswagenPage = artikelHinzugefügt;
//}

function artikelHinzufügen(): void {
    for (let index: number = 0; index < alleArtikel.length; index++) {

        let divcontainer: HTMLElement = document.createElement("div");


        let img1: HTMLImageElement = document.createElement("img");
        img1.setAttribute("src", alleArtikel[index].img);
        img1.setAttribute("alt", "Bild");
        divcontainer.appendChild(img1);

        let name1: HTMLElement = document.createElement("h3");
        name1.innerHTML = alleArtikel[index].name;
        divcontainer.appendChild(name1);

        let beschreibung1: HTMLElement = document.createElement("p");
        beschreibung1.innerHTML = alleArtikel[index].beschreibung;
        divcontainer.appendChild(beschreibung1);

        let preis1: HTMLElement = document.createElement("p");
        let preisNumber: HTMLElement = document.createElement("number");
        divcontainer.appendChild(preis1);
        preis1.appendChild(preisNumber);
        preisNumber.innerHTML = alleArtikel[index].preis + "€";


        let kaufen: HTMLButtonElement = document.createElement("button");
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
                let corona1: HTMLElement = document.getElementById("corona")!;
                corona1.appendChild(divcontainer);
                break;
            case 2:
                schuhe1 = document.getElementById("schuhe")!;
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
let einkaufswagenZahl: number = 0;
let zahl: HTMLElement = document.createElement("string");

function addToEinkaufswagen(): void {

    einkaufswagenZahl++;
    zahl.innerHTML = einkaufswagenZahl.toString();

    document.getElementById("einkaufswagen")?.appendChild(zahl);
}

// Preis rechner
function rechner(_event: Event): void {
    target = (<HTMLElement>_event.target);
    price = parseFloat(target.getAttribute("artikelPreis")!);
    ausgabe = ausgabe + price;
    let preis1: HTMLElement = document.createElement("p");
    let preisNumber: HTMLElement = document.createElement("number");
    preis1.appendChild(preisNumber);
    preisNumber.innerHTML = "gesamter Preis:" + ausgabe + "€";
    document.getElementById("preis");
}



// Kategorien unterscheidung / ausblenden

let navDiv: HTMLElement = document.createElement("div");
let kategorien: string[] = ["Coronaartikel", "Schuhe", "alles anzeigen"];

for (let index: number = 0; index < kategorien.length; index++) {
    let nav: HTMLElement;
    nav = document.createElement("p");
    nav.setAttribute("unterscheidung", kategorien[index]);
    nav.innerText = kategorien[index];
    nav.addEventListener("click", navAusblenden);
    navDiv.appendChild(nav);
}
document.getElementById("nav")?.appendChild(navDiv);


function navAusblenden(_event: Event): void {
    let nav1: HTMLElement;
    nav1 = (<HTMLElement>_event.target);
    let unterscheidung: string = nav1.getAttribute("unterscheidung")!;

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


function einkaufswagenHinzufügen(_event: Event): void {

    target = (<HTMLElement>_event.target);
    let welcheZahl: number = parseFloat(target.getAttribute("welcherArtikel")!);

    let divcontainer: HTMLElement = document.createElement("div");
    divcontainer = document.getElementById("warenkorb")!;

    let img1: HTMLImageElement = document.createElement("img");
    img1.setAttribute("src", alleArtikel[welcheZahl].img);
    img1.setAttribute("alt", "Bild");
    divcontainer.appendChild(img1);

    let name1: HTMLElement = document.createElement("h3");
    name1.innerHTML = alleArtikel[welcheZahl].name;
    divcontainer.appendChild(name1);

    let beschreibung1: HTMLElement = document.createElement("p");
    beschreibung1.innerHTML = alleArtikel[welcheZahl].beschreibung;
    divcontainer.appendChild(beschreibung1);

    let preis1: HTMLElement = document.createElement("p");
    let preisNumber: HTMLElement = document.createElement("number");
    divcontainer.appendChild(preis1);
    preis1.appendChild(preisNumber);
    preisNumber.innerHTML = alleArtikel[welcheZahl].preis + "€";


    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerText = "entfernen";
    kaufen.addEventListener("click", addToEinkaufswagen);
    kaufen.setAttribute("type", "button");
}


