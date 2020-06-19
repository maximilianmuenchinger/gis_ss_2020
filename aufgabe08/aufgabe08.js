"use strict";
let button = document.getElementById("submit");
button.addEventListener("click", submitVerarbeiten);
async function submitVerarbeiten() {
    let formData = new FormData(document.forms[0]);
    let url = "https://gismaximilianmuenchinger.herokuapp.com/";
    let query = new URLSearchParams(formData);
    url += "?" + query.toString();
    let response = await fetch(url);
    let answer = await response.url;
    console.log(answer);
}
//# sourceMappingURL=aufgabe08.js.map