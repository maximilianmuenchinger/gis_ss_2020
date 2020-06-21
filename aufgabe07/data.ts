interface Artikel {
    img: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: number;
}

let alleArtikel: Artikel[];
produkteLaden("data.json");
produkteLaden2("data.json");


async function produkteLaden(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    alleArtikel = await response.json();
    artikelHinzufügen();
}

async function produkteLaden2(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    alleArtikel = await response.json();
    artikelHinzufügen2();
}




let preis: number;
let anfang: number;
let ganzeAusgabe: number;

let target: HTMLElement;
let price: number;
let ausgabe: number = 0;

let beschreibung: Number;
let case1: number;

let schuhe1: HTMLElement;





//einkaufswagenHinzufügen
let welcheZahl: number;
let array: string;
let vorherZahl: string = "";
let welcheZahlString: string;
let welcheZahlStringNumber: number;
