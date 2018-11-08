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
        var Karte1 = {
            Farbe: "red",
            Wert: "0",
        };
        var Karte2 = {
            Farbe: "red",
            Wert: "1",
        };
        var Karte3 = {
            Farbe: "red",
            Wert: "1",
        };
        var Karte4 = {
            Farbe: "red",
            Wert: "2",
        };
        var Karte5 = {
            Farbe: "red",
            Wert: "2",
        };
        var Karte6 = {
            Farbe: "red",
            Wert: "3",
        };
        var Karte7 = {
            Farbe: "red",
            Wert: "3",
        };
        var Karte8 = {
            Farbe: "red",
            Wert: "4",
        };
        var Karte9 = {
            Farbe: "red",
            Wert: "4",
        };
        var Karte10 = {
            Farbe: "red",
            Wert: "5",
        };
        var Karte11 = {
            Farbe: "red",
            Wert: "5",
        };
        var Karte12 = {
            Farbe: "red",
            Wert: "6",
        };
        var Karte13 = {
            Farbe: "red",
            Wert: "6",
        };
        var Karte14 = {
            Farbe: "red",
            Wert: "7",
        };
        var Karte15 = {
            Farbe: "red",
            Wert: "7",
        };
        var Karte16 = {
            Farbe: "red",
            Wert: "8",
        };
        var Karte17 = {
            Farbe: "red",
            Wert: "8",
        };
        var Karte18 = {
            Farbe: "red",
            Wert: "9",
        };
        var Karte19 = {
            Farbe: "red",
            Wert: "9",
        };
        var Karte20 = {
            Farbe: "red",
            Wert: "Aussetzen",
        };
        var Karte21 = {
            Farbe: "red",
            Wert: "Aussetzen",
        };
        var Karte22 = {
            Farbe: "red",
            Wert: "Richtungswechsel",
        };
        var Karte23 = {
            Farbe: "red",
            Wert: "Richtungswechsel",
        };
        var Karte24 = {
            Farbe: "red",
            Wert: "+2",
        };
        var Karte25 = {
            Farbe: "red",
            Wert: "+2",
        };
        var Karte26 = {
            Farbe: "blue",
            Wert: "0",
        };
        var Karte27 = {
            Farbe: "blue",
            Wert: "1",
        };
        var Karte28 = {
            Farbe: "blue",
            Wert: "1",
        };
        var Karte29 = {
            Farbe: "blue",
            Wert: "2",
        };
        var Karte30 = {
            Farbe: "blue",
            Wert: "2",
        };
        var Karte31 = {
            Farbe: "blue",
            Wert: "3",
        };
        var Karte32 = {
            Farbe: "blue",
            Wert: "3",
        };
        var Karte33 = {
            Farbe: "blue",
            Wert: "4",
        };
        var Karte34 = {
            Farbe: "blue",
            Wert: "4",
        };
        var Karte35 = {
            Farbe: "blue",
            Wert: "5",
        };
        var Karte36 = {
            Farbe: "blue",
            Wert: "5",
        };
        var Karte37 = {
            Farbe: "blue",
            Wert: "6",
        };
        var Karte38 = {
            Farbe: "blue",
            Wert: "6",
        };
        var Karte39 = {
            Farbe: "blue",
            Wert: "7",
        };
        var Karte40 = {
            Farbe: "blue",
            Wert: "7",
        };
        var Karte41 = {
            Farbe: "blue",
            Wert: "8",
        };
        var Karte42 = {
            Farbe: "blue",
            Wert: "8",
        };
        var Karte43 = {
            Farbe: "blue",
            Wert: "9",
        };
        var Karte44 = {
            Farbe: "blue",
            Wert: "9",
        };
        var Karte45 = {
            Farbe: "blue",
            Wert: "Aussetzen",
        };
        var Karte46 = {
            Farbe: "blue",
            Wert: "Aussetzen",
        };
        var Karte47 = {
            Farbe: "blue",
            Wert: "Richtungswechsel",
        };
        var Karte48 = {
            Farbe: "blue",
            Wert: "Richtungswechsel",
        };
        var Karte49 = {
            Farbe: "blue",
            Wert: "+2",
        };
        var Karte50 = {
            Farbe: "blue",
            Wert: "+2",
        };
        var Karte51 = {
            Farbe: "green",
            Wert: "0",
        };
        var Karte52 = {
            Farbe: "green",
            Wert: "1",
        };
        var Karte53 = {
            Farbe: "green",
            Wert: "1",
        };
        var Karte54 = {
            Farbe: "green",
            Wert: "2",
        };
        var Karte55 = {
            Farbe: "green",
            Wert: "2",
        };
        var Karte56 = {
            Farbe: "green",
            Wert: "3",
        };
        var Karte57 = {
            Farbe: "green",
            Wert: "3",
        };
        var Karte58 = {
            Farbe: "green",
            Wert: "4",
        };
        var Karte59 = {
            Farbe: "green",
            Wert: "4",
        };
        var Karte60 = {
            Farbe: "green",
            Wert: "5",
        };
        var Karte61 = {
            Farbe: "green",
            Wert: "5",
        };
        var Karte62 = {
            Farbe: "green",
            Wert: "6",
        };
        var Karte63 = {
            Farbe: "green",
            Wert: "6",
        };
        var Karte64 = {
            Farbe: "green",
            Wert: "7",
        };
        var Karte65 = {
            Farbe: "green",
            Wert: "7",
        };
        var Karte66 = {
            Farbe: "green",
            Wert: "8",
        };
        var Karte67 = {
            Farbe: "green",
            Wert: "8",
        };
        var Karte68 = {
            Farbe: "green",
            Wert: "9",
        };
        var Karte69 = {
            Farbe: "green",
            Wert: "9",
        };
        var Karte70 = {
            Farbe: "green",
            Wert: "Aussetzen",
        };
        var Karte71 = {
            Farbe: "green",
            Wert: "Aussetzen",
        };
        var Karte72 = {
            Farbe: "green",
            Wert: "Richtungswechsel",
        };
        var Karte73 = {
            Farbe: "green",
            Wert: "Richtungswechsel",
        };
        var Karte74 = {
            Farbe: "green",
            Wert: "+2",
        };
        var Karte75 = {
            Farbe: "green",
            Wert: "+2",
        };
        var Karte76 = {
            Farbe: "yellow",
            Wert: "0",
        };
        var Karte77 = {
            Farbe: "yellow",
            Wert: "1",
        };
        var Karte78 = {
            Farbe: "yellow",
            Wert: "1",
        };
        var Karte79 = {
            Farbe: "yellow",
            Wert: "2",
        };
        var Karte80 = {
            Farbe: "yellow",
            Wert: "2",
        };
        var Karte81 = {
            Farbe: "yellow",
            Wert: "3",
        };
        var Karte82 = {
            Farbe: "yellow",
            Wert: "3",
        };
        var Karte83 = {
            Farbe: "yellow",
            Wert: "4",
        };
        var Karte84 = {
            Farbe: "yellow",
            Wert: "4",
        };
        var Karte85 = {
            Farbe: "yellow",
            Wert: "5",
        };
        var Karte86 = {
            Farbe: "yellow",
            Wert: "5",
        };
        var Karte87 = {
            Farbe: "yellow",
            Wert: "6",
        };
        var Karte88 = {
            Farbe: "yellow",
            Wert: "6",
        };
        var Karte89 = {
            Farbe: "yellow",
            Wert: "7",
        };
        var Karte90 = {
            Farbe: "yellow",
            Wert: "7",
        };
        var Karte91 = {
            Farbe: "yellow",
            Wert: "8",
        };
        var Karte92 = {
            Farbe: "yellow",
            Wert: "8",
        };
        var Karte93 = {
            Farbe: "yellow",
            Wert: "9",
        };
        var Karte94 = {
            Farbe: "yellow",
            Wert: "9",
        };
        var Karte95 = {
            Farbe: "yellow",
            Wert: "Aussetzen",
        };
        var Karte96 = {
            Farbe: "yellow",
            Wert: "Aussetzen",
        };
        var Karte97 = {
            Farbe: "yellow",
            Wert: "Richtungswechsel",
        };
        var Karte98 = {
            Farbe: "yellow",
            Wert: "Richtungswechsel",
        };
        var Karte99 = {
            Farbe: "yellow",
            Wert: "+2",
        };
        var Karte100 = {
            Farbe: "yellow",
            Wert: "+2",
        };
        var Karte101 = {
            Farbe: "black",
            Wert: "+4",
        };
        var Karte102 = {
            Farbe: "black",
            Wert: "+4",
        };
        var Karte103 = {
            Farbe: "black",
            Wert: "+4",
        };
        var Karte104 = {
            Farbe: "black",
            Wert: "+4",
        };
        var Karte105 = {
            Farbe: "black",
            Wert: "Farbwahl",
        };
        var Karte106 = {
            Farbe: "black",
            Wert: "Farbwahl",
        };
        var Karte107 = {
            Farbe: "black",
            Wert: "Farbwahl",
        };
        var Karte108 = {
            Farbe: "black",
            Wert: "Farbwahl",
        };
        var Deck = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28, Karte29, Karte30, Karte31, Karte32, Karte33, Karte34, Karte35, Karte36, Karte37, Karte38, Karte39, Karte40, Karte41, Karte42, Karte43, Karte44, Karte45, Karte46, Karte47, Karte48, Karte49, Karte50, Karte51, Karte52, Karte53, Karte54, Karte55, Karte56, Karte57, Karte58, Karte59, Karte60, Karte61, Karte62, Karte63, Karte64, Karte65, Karte66, Karte67, Karte68, Karte69, Karte70, Karte71, Karte72, Karte73, Karte74, Karte75, Karte76, Karte77, Karte78, Karte79, Karte80, Karte81, Karte82, Karte83, Karte84, Karte85, Karte86, Karte87, Karte88, Karte89, Karte90, Karte91, Karte92, Karte93, Karte94, Karte95, Karte96, Karte97, Karte98, Karte99, Karte100, Karte101, Karte102, Karte103, Karte104, Karte105, Karte106, Karte107, Karte108];
        var d = prompt("Bitte gewuenschte Handkartenanzahl eingeben");
        var o;
        o = Number(d);
        function giveRandomNumber(l) {
            return Math.floor(Math.random() * Math.floor(l));
        }
        function placeDiv(_color, _nummer, n) {
            var div = document.createElement("div");
            div.setAttribute("id", "Karte" + n);
            document.body.appendChild(div);
            document.getElementById("Karte" + n).innerHTML += _nummer;
            var s = div.style;
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
        for (var i = 0; i < o; i++) {
            var q = giveRandomNumber(Deck.length);
            placeDiv(Deck[q].Farbe, Deck[q].Wert, i);
            Deck.splice(q, 1);
            continue;
        }
    }
    document.addEventListener('DOMContentLoaded', playUno);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map