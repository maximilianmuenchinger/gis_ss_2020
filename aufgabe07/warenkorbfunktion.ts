//Preis ausgabe
let ausgabe1: HTMLElement = document.createElement("p");
let ausgabe3: string = localStorage.getItem("ausgabe2")!;
ausgabe1.innerHTML = "total:" + ausgabe3 + "€";
document.getElementById("preis")?.appendChild(ausgabe1);






// alles entfernen button

let allesEntfernen: HTMLButtonElement = document.createElement("button");
allesEntfernen.innerText = "alles entfernen";
allesEntfernen.setAttribute("type", "button");
allesEntfernen.addEventListener("click", alleArtikelEntfernen);
document.getElementById("allesLöschen")?.appendChild(allesEntfernen);

function alleArtikelEntfernen(_event: Event): void {
    localStorage.removeItem("ausgabe2");
    localStorage.removeItem("vorherzahl");
    location.reload();

}

let welcheZahl2: string = localStorage.getItem("vorherzahl")!;
let res: string[] = welcheZahl2.split(",");
let result: number[] = res.map(Number);




let artikelZahl: number;
let divcontainer: HTMLElement;
let wert: string;


//Produkte hinzufügen
function artikelHinzufügen2(): void {



    for (let index: number = 0; index < result.length; index++) {

        let indexZahl: number = result[index];


        divcontainer = document.createElement("div");

        document.getElementById("warenkorb")?.appendChild(divcontainer);


        let img1: HTMLImageElement = document.createElement("img");
        img1.setAttribute("src", alleArtikel[indexZahl].img);
        img1.setAttribute("alt", "Bild");
        divcontainer.appendChild(img1);

        let name1: HTMLElement = document.createElement("h3");
        name1.innerHTML = alleArtikel[indexZahl].name;
        divcontainer.appendChild(name1);


        let preis1: HTMLElement = document.createElement("p");
        let preisNumber: HTMLElement = document.createElement("number");
        divcontainer.appendChild(preis1);
        preis1.appendChild(preisNumber);
        preisNumber.innerHTML = alleArtikel[indexZahl].preis + "€";

        let kaufen: HTMLButtonElement;
        kaufen = document.createElement("button");
        kaufen.innerText = "entfernen";

        kaufen.addEventListener("click", einzelneArtikelEntfernen);

        kaufen.setAttribute("type", "button");
        kaufen.setAttribute("welcheZahl4", [index].toString());
        divcontainer.appendChild(kaufen);





    }

}

function einzelneArtikelEntfernen(_event: Event): void {
    target = (<HTMLElement>_event.target);
    artikelZahl = parseFloat(target.getAttribute("welcheZahl4")!);


    let resultIndex: number = result[artikelZahl];
    let artikelPreis: number = alleArtikel[resultIndex].preis;

    let preisStorage2: number = JSON.parse(localStorage.getItem("ausgabe2")!);
    preisStorage2 = preisStorage2 - artikelPreis;

    localStorage.setItem("ausgabe2", preisStorage2.toString());




    
    result.splice(artikelZahl, 1);
    let resultjoin: string = result.join();
    localStorage.setItem("vorherzahl", resultjoin);
    let localStorage2: string = localStorage.getItem("vorherzahl")!;
    if (localStorage2[0] == undefined) {
        localStorage.clear();
    }








    location.reload();
}









