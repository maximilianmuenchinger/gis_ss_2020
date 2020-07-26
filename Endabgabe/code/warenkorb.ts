
let arrayZahl: string = localStorage.getItem("Zahl")!;
let split: string[] = arrayZahl.split(",");
let splitResult: number[] = split.map(Number);


let gesamtPreis: string = localStorage.getItem("gesamtpreis")!;


//variablen für getBestellung
let bestellung: string = "";
let getBestellung: string;


function artikelHinzufügen1(): void {



    for (let index: number = 0; index < splitResult.length; index++) {

        let indexZahl: number = splitResult[index];


        let divcontainer: HTMLElement = document.createElement("div");

        document.getElementById("Artikel")?.appendChild(divcontainer);

        let name1: HTMLElement = document.createElement("h3");
        name1.innerHTML = alleEisSorten[indexZahl].name;
        name1.setAttribute("bestellung", alleEisSorten[indexZahl].name);
        divcontainer.appendChild(name1);

        let img1: HTMLImageElement = document.createElement("img");
        img1.setAttribute("src", alleEisSorten[indexZahl].img);
        img1.setAttribute("alt", "Bild");
        divcontainer.appendChild(img1);




        let preis1: HTMLElement = document.createElement("p");
        let preisNumber: HTMLElement = document.createElement("number");
        divcontainer.appendChild(preis1);
        preis1.appendChild(preisNumber);

        if (alleEisSorten[indexZahl].kategorie == 2) {
            preisNumber.innerHTML = "-";
        }
        else {
            preisNumber.innerHTML = alleEisSorten[indexZahl].preis + "€";
            preisNumber.setAttribute("preis", alleEisSorten[indexZahl].preis.toString());
        }

        let entfernen: HTMLButtonElement;
        entfernen = document.createElement("button");
        entfernen.innerText = "entfernen";

        entfernen.addEventListener("click", einzelneArtikelEntfernen1);

        //kaufen.setAttribute("type", "button");
        entfernen.setAttribute("welcheZahl5", [indexZahl].toString());
        entfernen.setAttribute("welcheZahl6", [index].toString());
        divcontainer.appendChild(entfernen);



        //bestellung in local storage
        getBestellung = alleEisSorten[indexZahl].name;
        bestellung = bestellung + "," + getBestellung;
        localStorage.setItem("Bestellung", bestellung);

    }
    document.getElementById("allesEntfernen")?.addEventListener("click", allesEntfernen1);
    function allesEntfernen1(): void {
        localStorage.clear();
        location.reload();

    }

    let preisDiv: HTMLElement = document.getElementById("preis")!;
    preisDiv.innerText = gesamtPreis + "€";




    // button für Server send
    document.getElementById("button")?.addEventListener("click", submitVerarbeiten1);


}

function einzelneArtikelEntfernen1(_event: Event): void {
    let target: HTMLElement = (<HTMLElement>_event.target);
    let artikelZahl: number = parseFloat(target.getAttribute("welcheZahl5")!);  //welches Produkt
    let artikelZahl2: number = parseFloat(target.getAttribute("welcheZahl6")!); //welche stelle im array 

    let resultIndex: number = splitResult[artikelZahl];



    let artikelPreis: number = alleEisSorten[artikelZahl].preis;

    let preisStorage2: number = parseFloat(gesamtPreis);
    preisStorage2 = preisStorage2 - artikelPreis;

    localStorage.setItem("gesamtpreis", preisStorage2.toString());


    splitResult.splice(artikelZahl2, 1);
    console.log(splitResult);

    let resultjoin: string = splitResult.join();
    console.log(resultjoin);
    localStorage.setItem("Zahl", resultjoin);
    console.log(localStorage);
    let localStorage2: string = localStorage.getItem("Zahl")!;
    if (localStorage2[0] == undefined) {
        localStorage.clear();
    }


    location.reload();
}



    


//Datenbank und Server

async function submitVerarbeiten1(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let string: string = localStorage.getItem("Bestellung")!;
    let stringFormData1: void = formData.append("Bestellung", string);
    

    let url: string = "https://gismaximilianmuenchinger.herokuapp.com/senden";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let query2: URLSearchParams = new URLSearchParams(<any>stringFormData1);
    url += "?" + query.toString() + query2;

    let response: Response = await fetch(url);

}



