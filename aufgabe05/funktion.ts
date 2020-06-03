

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
