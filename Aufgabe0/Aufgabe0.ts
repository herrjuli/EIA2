// Eingabe:
var input : string = prompt('Bitte geben Sie ihren Namen ein');
// Begrüßung:
function Begruessung() {
   var node = document.getElementById("content");
    node.innerHTML += "Guten Tag ";
    node.innerHTML += input;
    node.innerHTML += "!";
    }
// Konsole:
console.log("Guten Tag " + input + "!");

document.addEventListener('DOMContentLoaded', Begruessung);

    
  