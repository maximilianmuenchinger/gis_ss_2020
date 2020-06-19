"use strict";
let button1 = document.createElement("button");
button1.innerText = "abschicken";
button1.setAttribute("type", "button");
button1.addEventListener("click", zuSubmitWeiter);
document.getElementById("button")?.appendChild(button1);
function zuSubmitWeiter() {
    submitVerarbeiten("https://gismaximilianmuenchinger.herokuapp.com/");
}
async function submitVerarbeiten(_url) {
    let formData = new FormData(document.forms[0]);
    let url = "" + _url;
    let query = new URLSearchParams(formData);
    url += "?" + query.toString();
    let response = await fetch(_url, { method: "get" });
    let answer = await response.text();
    console.log(answer);
}
//# sourceMappingURL=aufgabe08.js.map