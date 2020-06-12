interface Artikel {
    img: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: number;
}

let alleArtikel: Artikel[];
produkteLaden("data.json");


async function produkteLaden(_url: RequestInfo): Promise<void> {
let response: Response = await fetch(_url);
let jasonArray: JSON = await response.json();
alleArtikel = await JSON.parse(JSON.stringify(jasonArray));
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





