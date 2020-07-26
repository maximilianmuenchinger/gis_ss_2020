interface Eissorte {
    img: string;
    name: string;
    preis: number;
    kategorie: number;
}

let alleEisSorten: Eissorte[];
eisLaden("data.json");
allesLaden("data.json");




async function eisLaden(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    alleEisSorten = await response.json();
    eisHinzufügen();
}

async function allesLaden(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    alleEisSorten = await response.json();
    artikelHinzufügen1();
}


let zahlGlobal: string;



