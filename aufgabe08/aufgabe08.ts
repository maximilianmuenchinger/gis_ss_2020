

let button: HTMLButtonElement = document.createElement("button");
document.getElementById("submit");
button.innerText = "submit";

button.setAttribute("type", "button");
button.addEventListener("click", submitVerarbeiten);

async function submitVerarbeiten(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gismaximilianmuenchinger.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += "?" + query.toString();

    let response: Response = await fetch(url, {method: "get"});
    let answer: string = await response.url;

    console.log(answer);
}