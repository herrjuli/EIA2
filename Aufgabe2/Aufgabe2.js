/*
Aufgabe: 2 Uno
Name: Julia Herr
Matrikel: 259568
Datum: 28.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe2;
(function (Aufgabe2) {
    function playUno() {
        let Karte1 = {
            Farbe: "red",
            Wert: "0",
        };
        let Karte2 = {
            Farbe: "red",
            Wert: "1",
        };
        let Karte3 = {
            Farbe: "red",
            Wert: "1",
        };
        let Karte4 = {
            Farbe: "red",
            Wert: "2",
        };
        let Karte5 = {
            Farbe: "red",
            Wert: "2",
        };
        let Karte6 = {
            Farbe: "red",
            Wert: "3",
        };
        let Karte7 = {
            Farbe: "red",
            Wert: "3",
        };
        let Karte8 = {
            Farbe: "red",
            Wert: "4",
        };
        let Karte9 = {
            Farbe: "red",
            Wert: "4",
        };
        let Karte10 = {
            Farbe: "red",
            Wert: "5",
        };
        let Karte11 = {
            Farbe: "red",
            Wert: "5",
        };
        let Karte12 = {
            Farbe: "red",
            Wert: "6",
        };
        let Karte13 = {
            Farbe: "red",
            Wert: "6",
        };
        let Karte14 = {
            Farbe: "red",
            Wert: "7",
        };
        let Karte15 = {
            Farbe: "red",
            Wert: "7",
        };
        let Karte16 = {
            Farbe: "red",
            Wert: "8",
        };
        let Karte17 = {
            Farbe: "red",
            Wert: "8",
        };
        let Karte18 = {
            Farbe: "red",
            Wert: "9",
        };
        let Karte19 = {
            Farbe: "red",
            Wert: "9",
        };
        let Karte20 = {
            Farbe: "red",
            Wert: "Aussetzen",
        };
        let Karte21 = {
            Farbe: "red",
            Wert: "Aussetzen",
        };
        let Karte22 = {
            Farbe: "red",
            Wert: "Richtungswechsel",
        };
        let Karte23 = {
            Farbe: "red",
            Wert: "Richtungswechsel",
        };
        let Karte24 = {
            Farbe: "red",
            Wert: "+2",
        };
        let Karte25 = {
            Farbe: "red",
            Wert: "+2",
        };
        let Karte26 = {
            Farbe: "blue",
            Wert: "0",
        };
        let Karte27 = {
            Farbe: "blue",
            Wert: "1",
        };
        let Karte28 = {
            Farbe: "blue",
            Wert: "1",
        };
        let Karte29 = {
            Farbe: "blue",
            Wert: "2",
        };
        let Karte30 = {
            Farbe: "blue",
            Wert: "2",
        };
        let Karte31 = {
            Farbe: "blue",
            Wert: "3",
        };
        let Karte32 = {
            Farbe: "blue",
            Wert: "3",
        };
        let Karte33 = {
            Farbe: "blue",
            Wert: "4",
        };
        let Karte34 = {
            Farbe: "blue",
            Wert: "4",
        };
        let Karte35 = {
            Farbe: "blue",
            Wert: "5",
        };
        let Karte36 = {
            Farbe: "blue",
            Wert: "5",
        };
        let Karte37 = {
            Farbe: "blue",
            Wert: "6",
        };
        let Karte38 = {
            Farbe: "blue",
            Wert: "6",
        };
        let Karte39 = {
            Farbe: "blue",
            Wert: "7",
        };
        let Karte40 = {
            Farbe: "blue",
            Wert: "7",
        };
        let Karte41 = {
            Farbe: "blue",
            Wert: "8",
        };
        let Karte42 = {
            Farbe: "blue",
            Wert: "8",
        };
        let Karte43 = {
            Farbe: "blue",
            Wert: "9",
        };
        let Karte44 = {
            Farbe: "blue",
            Wert: "9",
        };
        let Karte45 = {
            Farbe: "blue",
            Wert: "Aussetzen",
        };
        let Karte46 = {
            Farbe: "blue",
            Wert: "Aussetzen",
        };
        let Karte47 = {
            Farbe: "blue",
            Wert: "Richtungswechsel",
        };
        let Karte48 = {
            Farbe: "blue",
            Wert: "Richtungswechsel",
        };
        let Karte49 = {
            Farbe: "blue",
            Wert: "+2",
        };
        let Karte50 = {
            Farbe: "blue",
            Wert: "+2",
        };
        let Karte51 = {
            Farbe: "green",
            Wert: "0",
        };
        let Karte52 = {
            Farbe: "green",
            Wert: "1",
        };
        let Karte53 = {
            Farbe: "green",
            Wert: "1",
        };
        let Karte54 = {
            Farbe: "green",
            Wert: "2",
        };
        let Karte55 = {
            Farbe: "green",
            Wert: "2",
        };
        let Karte56 = {
            Farbe: "green",
            Wert: "3",
        };
        let Karte57 = {
            Farbe: "green",
            Wert: "3",
        };
        let Karte58 = {
            Farbe: "green",
            Wert: "4",
        };
        let Karte59 = {
            Farbe: "green",
            Wert: "4",
        };
        let Karte60 = {
            Farbe: "green",
            Wert: "5",
        };
        let Karte61 = {
            Farbe: "green",
            Wert: "5",
        };
        let Karte62 = {
            Farbe: "green",
            Wert: "6",
        };
        let Karte63 = {
            Farbe: "green",
            Wert: "6",
        };
        let Karte64 = {
            Farbe: "green",
            Wert: "7",
        };
        let Karte65 = {
            Farbe: "green",
            Wert: "7",
        };
        let Karte66 = {
            Farbe: "green",
            Wert: "8",
        };
        let Karte67 = {
            Farbe: "green",
            Wert: "8",
        };
        let Karte68 = {
            Farbe: "green",
            Wert: "9",
        };
        let Karte69 = {
            Farbe: "green",
            Wert: "9",
        };
        let Karte70 = {
            Farbe: "green",
            Wert: "Aussetzen",
        };
        let Karte71 = {
            Farbe: "green",
            Wert: "Aussetzen",
        };
        let Karte72 = {
            Farbe: "green",
            Wert: "Richtungswechsel",
        };
        let Karte73 = {
            Farbe: "green",
            Wert: "Richtungswechsel",
        };
        let Karte74 = {
            Farbe: "green",
            Wert: "+2",
        };
        let Karte75 = {
            Farbe: "green",
            Wert: "+2",
        };
        let Karte76 = {
            Farbe: "yellow",
            Wert: "0",
        };
        let Karte77 = {
            Farbe: "yellow",
            Wert: "1",
        };
        let Karte78 = {
            Farbe: "yellow",
            Wert: "1",
        };
        let Karte79 = {
            Farbe: "yellow",
            Wert: "2",
        };
        let Karte80 = {
            Farbe: "yellow",
            Wert: "2",
        };
        let Karte81 = {
            Farbe: "yellow",
            Wert: "3",
        };
        let Karte82 = {
            Farbe: "yellow",
            Wert: "3",
        };
        let Karte83 = {
            Farbe: "yellow",
            Wert: "4",
        };
        let Karte84 = {
            Farbe: "yellow",
            Wert: "4",
        };
        let Karte85 = {
            Farbe: "yellow",
            Wert: "5",
        };
        let Karte86 = {
            Farbe: "yellow",
            Wert: "5",
        };
        let Karte87 = {
            Farbe: "yellow",
            Wert: "6",
        };
        let Karte88 = {
            Farbe: "yellow",
            Wert: "6",
        };
        let Karte89 = {
            Farbe: "yellow",
            Wert: "7",
        };
        let Karte90 = {
            Farbe: "yellow",
            Wert: "7",
        };
        let Karte91 = {
            Farbe: "yellow",
            Wert: "8",
        };
        let Karte92 = {
            Farbe: "yellow",
            Wert: "8",
        };
        let Karte93 = {
            Farbe: "yellow",
            Wert: "9",
        };
        let Karte94 = {
            Farbe: "yellow",
            Wert: "9",
        };
        let Karte95 = {
            Farbe: "yellow",
            Wert: "Aussetzen",
        };
        let Karte96 = {
            Farbe: "yellow",
            Wert: "Aussetzen",
        };
        let Karte97 = {
            Farbe: "yellow",
            Wert: "Richtungswechsel",
        };
        let Karte98 = {
            Farbe: "yellow",
            Wert: "Richtungswechsel",
        };
        let Karte99 = {
            Farbe: "yellow",
            Wert: "+2",
        };
        let Karte100 = {
            Farbe: "yellow",
            Wert: "+2",
        };
        let Karte101 = {
            Farbe: "black",
            Wert: "+4",
        };
        let Karte102 = {
            Farbe: "black",
            Wert: "+4",
        };
        let Karte103 = {
            Farbe: "black",
            Wert: "+4",
        };
        let Karte104 = {
            Farbe: "black",
            Wert: "+4",
        };
        let Karte105 = {
            Farbe: "black",
            Wert: "Farbwahl",
        };
        let Karte106 = {
            Farbe: "black",
            Wert: "Farbwahl",
        };
        let Karte107 = {
            Farbe: "black",
            Wert: "Farbwahl",
        };
        let Karte108 = {
            Farbe: "black",
            Wert: "Farbwahl",
        };
        let Deck = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28, Karte29, Karte30, Karte31, Karte32, Karte33, Karte34, Karte35, Karte36, Karte37, Karte38, Karte39, Karte40, Karte41, Karte42, Karte43, Karte44, Karte45, Karte46, Karte47, Karte48, Karte49, Karte50, Karte51, Karte52, Karte53, Karte54, Karte55, Karte56, Karte57, Karte58, Karte59, Karte60, Karte61, Karte62, Karte63, Karte64, Karte65, Karte66, Karte67, Karte68, Karte69, Karte70, Karte71, Karte72, Karte73, Karte74, Karte75, Karte76, Karte77, Karte78, Karte79, Karte80, Karte81, Karte82, Karte83, Karte84, Karte85, Karte86, Karte87, Karte88, Karte89, Karte90, Karte91, Karte92, Karte93, Karte94, Karte95, Karte96, Karte97, Karte98, Karte99, Karte100, Karte101, Karte102, Karte103, Karte104, Karte105, Karte106, Karte107, Karte108];
        let d = prompt("Bitte gewuenschte Handkartenanzahl eingeben");
        let o;
        o = Number(d);
        function giveRandomNumber(l) {
            return Math.floor(Math.random() * Math.floor(l));
        }
        function placeDiv(_color, _nummer, n) {
            let div = document.createElement("div");
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
            s.left = n * 200 + "px";
        }
        for (let i = 0; i < o; i++) {
            let q = giveRandomNumber(Deck.length);
            placeDiv(Deck[q].Farbe, Deck[q].Wert, i);
            Deck.splice(q, 1);
            continue;
        }
    }
    document.addEventListener('DOMContentLoaded', playUno);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map