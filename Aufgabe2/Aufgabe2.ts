/*
Aufgabe: 2 Uno
Name: Julia Herr
Matrikel: 259568
Datum: 28.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/





namespace Aufgabe2 {
    function spiel() {
        interface Karte {
            Farbe: string;
            Wert: string;
        }
        let Karte1: Karte = {
            Farbe: "red",
            Wert: "0",
        }
        let Karte2: Karte = {
            Farbe: "red",
            Wert: "1",
        }
        let Karte3: Karte = {
            Farbe: "red",
            Wert: "1",
        }
        let Karte4: Karte = {
            Farbe: "red",
            Wert: "2",
        }
        let Karte5: Karte = {
            Farbe: "red",
            Wert: "2",
        }
        let Karte6: Karte = {
            Farbe: "red",
            Wert: "3",
        }
        let Karte7: Karte = {
            Farbe: "red",
            Wert: "3",
        }
        let Karte8: Karte = {
            Farbe: "red",
            Wert: "4",
        }
        let Karte9: Karte = {
            Farbe: "red",
            Wert: "4",
        }
        let Karte10: Karte = {
            Farbe: "red",
            Wert: "5",
        }
        let Karte11: Karte = {
            Farbe: "red",
            Wert: "5",
        }
        let Karte12: Karte = {
            Farbe: "red",
            Wert: "6",
        }
        let Karte13: Karte = {
            Farbe: "red",
            Wert: "6",
        }
        let Karte14: Karte = {
            Farbe: "red",
            Wert: "7",
        }
        let Karte15: Karte = {
            Farbe: "red",
            Wert: "7",
        }
        let Karte16: Karte = {
            Farbe: "red",
            Wert: "8",
        }
        let Karte17: Karte = {
            Farbe: "red",
            Wert: "8",
        }
        let Karte18: Karte = {
            Farbe: "red",
            Wert: "9",
        }
        let Karte19: Karte = {
            Farbe: "red",
            Wert: "9",
        }
        let Karte20: Karte = {
            Farbe: "red",
            Wert: "Aussetzen",
        }
        let Karte21: Karte = {
            Farbe: "red",
            Wert: "Aussetzen",
        }
        let Karte22: Karte = {
            Farbe: "red",
            Wert: "Richtungswechsel",
        }
        let Karte23: Karte = {
            Farbe: "red",
            Wert: "Richtungswechsel",
        }
        let Karte24: Karte = {
            Farbe: "red",
            Wert: "+2",
        }
        let Karte25: Karte = {
            Farbe: "red",
            Wert: "+2",
        }
        let Karte26: Karte = {
            Farbe: "blue",
            Wert: "0",
        }

        let Karte27: Karte = {
            Farbe: "blue",
            Wert: "1",
        }
        let Karte28: Karte = {
            Farbe: "blue",
            Wert: "1",
        }
        let Karte29: Karte = {
            Farbe: "blue",
            Wert: "2",
        }
        let Karte30: Karte = {
            Farbe: "blue",
            Wert: "2",
        }
        let Karte31: Karte = {
            Farbe: "blue",
            Wert: "3",
        }
        let Karte32: Karte = {
            Farbe: "blue",
            Wert: "3",

        }
        let Karte33: Karte = {
            Farbe: "blue",
            Wert: "4",
        }
        let Karte34: Karte = {
            Farbe: "blue",
            Wert: "4",
        }
        let Karte35: Karte = {
            Farbe: "blue",
            Wert: "5",
        }
        let Karte36: Karte = {
            Farbe: "blue",
            Wert: "5",
        }
        let Karte37: Karte = {
            Farbe: "blue",
            Wert: "6",
        }
        let Karte38: Karte = {
            Farbe: "blue",
            Wert: "6",
        }
        let Karte39: Karte = {
            Farbe: "blue",
            Wert: "7",
        }
        let Karte40: Karte = {
            Farbe: "blue",
            Wert: "7",
        }
        let Karte41: Karte = {
            Farbe: "blue",
            Wert: "8",
        }
        let Karte42: Karte = {
            Farbe: "blue",
            Wert: "8",
        }
        let Karte43: Karte = {
            Farbe: "blue",
            Wert: "9",
        }
        let Karte44: Karte = {
            Farbe: "blue",
            Wert: "9",
        }
        let Karte45: Karte = {
            Farbe: "blue",
            Wert: "Aussetzen",
        }
        let Karte46: Karte = {
            Farbe: "blue",
            Wert: "Aussetzen",
        }
        let Karte47: Karte = {
            Farbe: "blue",
            Wert: "Richtungswechsel",
        }
        let Karte48: Karte = {
            Farbe: "blue",
            Wert: "Richtungswechsel",
        }
        let Karte49: Karte = {
            Farbe: "blue",
            Wert: "+2",
        }
        let Karte50: Karte = {
            Farbe: "blue",
            Wert: "+2",
        }
        let Karte51: Karte = {
            Farbe: "green",
            Wert: "0",
        }

        let Karte52: Karte = {
            Farbe: "green",
            Wert: "1",
        }
        let Karte53: Karte = {
            Farbe: "green",
            Wert: "1",
        }
        let Karte54: Karte = {
            Farbe: "green",
            Wert: "2",
        }
        let Karte55: Karte = {
            Farbe: "green",
            Wert: "2",
        }
        let Karte56: Karte = {
            Farbe: "green",
            Wert: "3",
        }
        let Karte57: Karte = {
            Farbe: "green",
            Wert: "3",
        }
        let Karte58: Karte = {
            Farbe: "green",
            Wert: "4",
        }
        let Karte59: Karte = {
            Farbe: "green",
            Wert: "4",
        }
        let Karte60: Karte = {
            Farbe: "green",
            Wert: "5",
        }
        let Karte61: Karte = {
            Farbe: "green",
            Wert: "5",
        }
        let Karte62: Karte = {
            Farbe: "green",
            Wert: "6",
        }
        let Karte63: Karte = {
            Farbe: "green",
            Wert: "6",
        }
        let Karte64: Karte = {
            Farbe: "green",
            Wert: "7",
        }
        let Karte65: Karte = {
            Farbe: "green",
            Wert: "7",
        }
        let Karte66: Karte = {
            Farbe: "green",
            Wert: "8",
        }
        let Karte67: Karte = {
            Farbe: "green",
            Wert: "8",
        }
        let Karte68: Karte = {
            Farbe: "green",
            Wert: "9",
        }
        let Karte69: Karte = {
            Farbe: "green",
            Wert: "9",
        }
        let Karte70: Karte = {
            Farbe: "green",
            Wert: "Aussetzen",

        }
        let Karte71: Karte = {
            Farbe: "green",
            Wert: "Aussetzen",
        }
        let Karte72: Karte = {
            Farbe: "green",
            Wert: "Richtungswechsel",
        }
        let Karte73: Karte = {
            Farbe: "green",
            Wert: "Richtungswechsel",
        }
        let Karte74: Karte = {
            Farbe: "green",
            Wert: "+2",
        }
        let Karte75: Karte = {
            Farbe: "green",
            Wert: "+2",
        }
        let Karte76: Karte = {
            Farbe: "yellow",
            Wert: "0",
        }
        let Karte77: Karte = {
            Farbe: "yellow",
            Wert: "1",
        }
        let Karte78: Karte = {
            Farbe: "yellow",
            Wert: "1",
        }
        let Karte79: Karte = {
            Farbe: "yellow",
            Wert: "2",
        }
        let Karte80: Karte = {
            Farbe: "yellow",
            Wert: "2",
        }
        let Karte81: Karte = {
            Farbe: "yellow",
            Wert: "3",
        }
        let Karte82: Karte = {
            Farbe: "yellow",
            Wert: "3",
        }
        let Karte83: Karte = {
            Farbe: "yellow",
            Wert: "4",
        }
        let Karte84: Karte = {
            Farbe: "yellow",
            Wert: "4",
        }
        let Karte85: Karte = {
            Farbe: "yellow",
            Wert: "5",
        }
        let Karte86: Karte = {
            Farbe: "yellow",
            Wert: "5",
        }
        let Karte87: Karte = {
            Farbe: "yellow",
            Wert: "6",
        }
        let Karte88: Karte = {
            Farbe: "yellow",
            Wert: "6",
        }
        let Karte89: Karte = {
            Farbe: "yellow",
            Wert: "7",
        }
        let Karte90: Karte = {
            Farbe: "yellow",
            Wert: "7",
        }
        let Karte91: Karte = {
            Farbe: "yellow",
            Wert: "8",
        }
        let Karte92: Karte = {
            Farbe: "yellow",
            Wert: "8",
        }
        let Karte93: Karte = {
            Farbe: "yellow",
            Wert: "9",
        }
        let Karte94: Karte = {
            Farbe: "yellow",
            Wert: "9",
        }
        let Karte95: Karte = {
            Farbe: "yellow",
            Wert: "Aussetzen",
        }
        let Karte96: Karte = {
            Farbe: "yellow",
            Wert: "Aussetzen",
        }
        let Karte97: Karte = {
            Farbe: "yellow",
            Wert: "Richtungswechsel",
        }
        let Karte98: Karte = {
            Farbe: "yellow",
            Wert: "Richtungswechsel",
        }
        let Karte99: Karte = {
            Farbe: "yellow",
            Wert: "+2",
        }
        let Karte100: Karte = {
            Farbe: "yellow",
            Wert: "+2",
        }
        let Karte101: Karte = {
            Farbe: "black",
            Wert: "+4",
        }

        let Karte102: Karte = {
            Farbe: "black",
            Wert: "+4",
        }
        let Karte103: Karte = {
            Farbe: "black",
            Wert: "+4",
        }
        let Karte104: Karte = {
            Farbe: "black",
            Wert: "+4",
        }
        let Karte105: Karte = {
            Farbe: "black",
            Wert: "Farbwahl",
        }
        let Karte106: Karte = {
            Farbe: "black",
            Wert: "Farbwahl",
        }
        let Karte107: Karte = {
            Farbe: "black",
            Wert: "Farbwahl",
        }
        let Karte108: Karte = {
            Farbe: "black",
            Wert: "Farbwahl",
        }
        let Deck: Karte[] = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28, Karte29, Karte30, Karte31, Karte32, Karte33, Karte34, Karte35, Karte36, Karte37, Karte38, Karte39, Karte40, Karte41, Karte42, Karte43, Karte44, Karte45, Karte46, Karte47, Karte48, Karte49, Karte50, Karte51, Karte52, Karte53, Karte54, Karte55, Karte56, Karte57, Karte58, Karte59, Karte60, Karte61, Karte62, Karte63, Karte64, Karte65, Karte66, Karte67, Karte68, Karte69, Karte70, Karte71, Karte72, Karte73, Karte74, Karte75, Karte76, Karte77, Karte78, Karte79, Karte80, Karte81, Karte82, Karte83, Karte84, Karte85, Karte86, Karte87, Karte88, Karte89, Karte90, Karte91, Karte92, Karte93, Karte94, Karte95, Karte96, Karte97, Karte98, Karte99, Karte100, Karte101, Karte102, Karte103, Karte104, Karte105, Karte106, Karte107, Karte108]

        let d: string = prompt("Bitte gewuenschte Handkartenanzahl eingeben");
        let o: number;
        o = Number(d);
        function random(l: number) {
            return Math.floor(Math.random() * Math.floor(l));
        }
        function start(_color: string, _nummer: string, n: number) {
            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("id", "Karte" + n);
            document.body.appendChild(div);
            document.getElementById("Karte" + n).innerHTML += _nummer;
            let s = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.color = "white";
            s.width = 135 + "px";
            s.height = 200 + "px";
            s.bottom = 25 + "px";
            s.textAlign = "center";
            s.fontSize = 2 + "em";
            s.borderRadius = 10 + "px";
            s.left = (n + 0.2) * 110 + "px";

        }
        for (let i = 0; i < o; i++) {
            let q = random(Deck.length);
            start(Deck[q].Farbe, Deck[q].Wert, i);
            Deck.splice(q, 1);
            continue;

        }
    }
    document.addEventListener('DOMContentLoaded', spiel);
}