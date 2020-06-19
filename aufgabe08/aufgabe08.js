"use strict";
let button = document.createElement("button");
document.getElementById("submit");
button.innerText = "submit";
button.setAttribute("type", "button");
button.addEventListener("click", submitVerarbeiten);
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