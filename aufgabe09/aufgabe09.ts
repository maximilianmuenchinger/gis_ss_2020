
let button1: HTMLButtonElement = document.createElement("button");
button1.innerText = "html";
button1.setAttribute("type", "button");
button1.addEventListener("click", submitVerarbeiten);
document.getElementById("button")?.appendChild(button1);

let button2: HTMLButtonElement = document.createElement("button");
button2.innerText = "json";
button2.setAttribute("type", "button");
button2.addEventListener("click", submitVerarbeiten2);
document.getElementById("button2")?.appendChild(button2);






async function submitVerarbeiten(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gismaximilianmuenchinger.herokuapp.com/html";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += "?" + query.toString();

    let response: Response = await fetch(url);
    let answer: string = await response.text();
    let answerSplit: string[] = answer.split("&");
    let answerSplitBreak: string = answerSplit.join("<br>");


    (<HTMLElement>document.getElementById("html")).innerHTML = answerSplitBreak;

}
async function submitVerarbeiten2(): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gismaximilianmuenchinger.herokuapp.com/json";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += "?" + query.toString();
    console.log(url);
    let response2: Response = await fetch(url);
    let answer: string = await response2.text();

    //  let answerSplit = answer.split("/");
    // let answerSplitBreak: string = answerSplit.join("<br>");
    //  let answerSplitJson = JSON.parse(answerSplitBreak);

    console.log(answer);


}

