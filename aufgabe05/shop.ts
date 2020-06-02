 interface Artikel {
     img: string;
     name: string;
     beschreibung: string;
     preis: number;
     kategorie: number;
 }

 let toilettenpapier: Artikel = {
     img: "21.jpg",
     name: "Toilettenpapier",
     beschreibung: "man weiß ja nie",
     preis: 50,
     kategorie: 1
 };
 let seife: Artikel = {
     img: "22.jpg",
     name: "Seife",
     beschreibung: "super wichtig",
     preis: 5,
     kategorie: 1
 };
 let mehl: Artikel = {
     img: "23.jpg",
     name: "Mehl",
     beschreibung: "alle werden auf einmal Bäcker",
     preis: 20,
     kategorie: 1
 };
 let desinfektionsmittel: Artikel = {
     img: "24.jpg",
     name: "Desinfektionsmittel",
     beschreibung: "schlagt euch drum",
     preis: 100,
     kategorie: 1
 };
 let maske: Artikel = {
     img: "25.jpg",
     name: "Maske",
     beschreibung: "wichtig zum einkaufe",
     preis: 5,
     kategorie: 1
 };
 let dosen: Artikel = {
     img: "26.jpg",
     name: "Dosen",
     beschreibung: "super lecker",
     preis: 2,
     kategorie: 1
 };
 


 let grauestiefel: Artikel = {
    img: "1.png",
    name: "Graue Stiefe",
    beschreibung: "sehr Grau",
    preis: 50,
    kategorie: 2
};
 let nikes: Artikel = {
    img: "2.jpg",
    name: "Neon gelbe Nikes",
    beschreibung: "wilde Farbe",
    preis: 200,
    kategorie: 2
};
 let nikes2: Artikel = {
     img: "3.jpg",
     name: "Blau orangene Nikes",
     beschreibung: "nicht ganz so wilde Farbe",
     preis: 180,
     kategorie: 2
 };
 let converse: Artikel = {
     img: "4.jpg",
     name: "Converse",
     beschreibung: "Converse in verschiedenen Farben",
     preis: 50,
     kategorie: 2
 };
 let rollschuhe: Artikel = {
     img: "5.jpg", 
     name: "Rollschuhe",
     beschreibung: "Krasse Rollschuhe",
     preis: 20,
     kategorie: 2
 };
 let schnürstiefel: Artikel = {
     img: "6.jpg",
     name: "Wilde Schnürstiefel",
     beschreibung: "Hässliche Stiefel in Babyblau",
     preis: 1000,
     kategorie: 2
 };

 let alleArtikel: Artikel[] = [toilettenpapier, seife, mehl, desinfektionsmittel, maske, dosen, grauestiefel, nikes, nikes2, converse, rollschuhe, schnürstiefel];
 
 

 
 createArtikel();
    
 function createArtikel(): void {

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
    kaufen.innerHTML = "Kaufen";
    divcontainer.appendChild(kaufen);


    //Kategorien werden den Ids zugewiesen
    switch (alleArtikel[index].kategorie) {
        case 1:
            let corona1: HTMLElement = document.getElementById("corona")!;
            corona1.appendChild(divcontainer);
            break;
        case 2:
            let schuhe1: HTMLElement = document.getElementById("schuhe")!;
            schuhe1.appendChild(divcontainer);
            break;
        default:
            break;
    }
}
 
 }

 

 


