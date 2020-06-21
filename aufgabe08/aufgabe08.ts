
let button1: HTMLButtonElement = document.createElement("button");
button1.innerText = "abschicken";
button1.setAttribute("type", "button");
button1.addEventListener("click", submitVerarbeiten);
document.getElementById("button")?.appendChild(button1);






async function submitVerarbeiten(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gismaximilianmuenchinger.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += "?" + query.toString();
    
    let response: Response = await fetch(url);
    let answer: string = await response.text();
    
    console.log(answer);
    

}