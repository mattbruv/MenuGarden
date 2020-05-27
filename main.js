import { mNames } from "./m";
import { cNames } from "./c";

function newName() {
    const name = up(rand(mNames)) + " " + up(rand(cNames));
    document.getElementById("name").innerText = name;
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(name)
    window.speechSynthesis.speak(msg);
}

function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function up(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

window.onload = () => {
    newName();
    document.getElementById("pic").addEventListener("click", () => {
        newName();
    })
}
document.onkeydown = () => newName();
