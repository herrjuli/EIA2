// Eingabe:
var input = prompt('Bitte geben Sie ihren Namen ein');
// Begr��ung:
function Begruessung() {
    var node = document.getElementById("content");
    node.innerHTML += "Guten Tag ";
    node.innerHTML += input;
    node.innerHTML += "!";
}
// Konsole:
console.log("Guten Tag " + input + "!");
document.addEventListener('DOMContentLoaded', Begruessung);
//# sourceMappingURL=Aufgabe0.js.map