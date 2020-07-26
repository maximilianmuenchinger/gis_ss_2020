"use strict";
empfangen1();
async function empfangen1() {
    let url = "https://gismaximilianmuenchinger.herokuapp.com/";
    let response2 = await fetch(url);
    let answer = await response2.text();
    let split = answer.split("},");
    for (let index = 0; index < split.length; index++) {
        let divcontainer = document.createElement("div");
        document.getElementById("text")?.appendChild(divcontainer);
        divcontainer.setAttribute("class", "Haken");
        let ausgeben = document.createElement("p");
        ausgeben.innerText = split[index];
        divcontainer?.appendChild(ausgeben);
        let button;
        button = document.createElement("button");
        button.innerText = "erledigt";
        button.addEventListener("click", erledigt);
        button.setAttribute("id1", "bild" + index.toString());
        divcontainer.appendChild(button);
        let bild;
        bild = document.createElement("img");
        bild.setAttribute("src", "/Endabgabe/Bilder/icons8-häkchen-96.png");
        bild.setAttribute("id", "bild" + index.toString()); //bild+Index damit für ids
        bild.setAttribute("alt", "Haken");
        divcontainer.appendChild(bild);
        document.getElementById("bild" + index)?.setAttribute("style", "display: none");
    }
    document.getElementById("allesEntfernen")?.addEventListener("click", delete2);
}
function erledigt(_event) {
    let target = _event.target;
    let welcheZahl1 = target.getAttribute("id1");
    console.log(welcheZahl1);
    document.getElementById(welcheZahl1)?.setAttribute("style", "display: flex");
}
async function delete2() {
    let url = "https://gismaximilianmuenchinger.herokuapp.com/empty";
    let response2 = await fetch(url);
    location.reload();
}
//# sourceMappingURL=intern.js.map