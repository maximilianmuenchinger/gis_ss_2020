"use strict";
let button1 = document.createElement("button");
button1.innerText = "abschicken";
button1.setAttribute("type", "button");
button1.addEventListener("click", submitVerarbeiten);
document.getElementById("button")?.appendChild(button1);
async function submitVerarbeiten() {
    let formData = new FormData(document.forms[0]);
    let url = "https://gismaximilianmuenchinger.herokuapp.com/";
    let query = new URLSearchParams(formData);
    url += "?" + query.toString();
    let response = await fetch(url, { method: "get" });
    let answer = await response.url;
    console.log(answer);
}
//# sourceMappingURL=aufgabe08.js.map