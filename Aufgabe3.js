/*
Aufgabe: 3 Uno
Name: Julia Herr
Matrikel: 259568
Datum: 08.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe2;
(function (Aufgabe2) {
    document.addEventListener('DOMContentLoaded', playUno);
    function playUno() {
        var Karte1 = {
            color: "red",
            value: "0",
        };
        var Karte2 = {
            color: "red",
            value: "1",
        };
        var Karte3 = {
            color: "red",
            value: "1",
        };
        var Karte4 = {
            color: "red",
            value: "2",
        };
        var Karte5 = {
            color: "red",
            value: "2",
        };
        var Karte6 = {
            color: "red",
            value: "3",
        };
        var Karte7 = {
            color: "red",
            value: "3",
        };
        var Karte8 = {
            color: "red",
            value: "4",
        };
        var Karte9 = {
            color: "red",
            value: "4",
        };
        var Karte10 = {
            color: "red",
            value: "5",
        };
        var Karte11 = {
            color: "red",
            value: "5",
        };
        var Karte12 = {
            color: "red",
            value: "6",
        };
        var Karte13 = {
            color: "red",
            value: "6",
        };
        var Karte14 = {
            color: "red",
            value: "7",
        };
        var Karte15 = {
            color: "red",
            value: "7",
        };
        var Karte16 = {
            color: "red",
            value: "8",
        };
        var Karte17 = {
            color: "red",
            value: "8",
        };
        var Karte18 = {
            color: "red",
            value: "9",
        };
        var Karte19 = {
            color: "red",
            value: "9",
        };
        var Karte20 = {
            color: "red",
            value: "Aussetzen",
        };
        var Karte21 = {
            color: "red",
            value: "Aussetzen",
        };
        var Karte22 = {
            color: "red",
            value: "Richtungswechsel",
        };
        var Karte23 = {
            color: "red",
            value: "Richtungswechsel",
        };
        var Karte24 = {
            color: "red",
            value: "+2",
        };
        var Karte25 = {
            color: "red",
            value: "+2",
        };
        var Karte26 = {
            color: "blue",
            value: "0",
        };
        var Karte27 = {
            color: "blue",
            value: "1",
        };
        var Karte28 = {
            color: "blue",
            value: "1",
        };
        var Karte29 = {
            color: "blue",
            value: "2",
        };
        var Karte30 = {
            color: "blue",
            value: "2",
        };
        var Karte31 = {
            color: "blue",
            value: "3",
        };
        var Karte32 = {
            color: "blue",
            value: "3",
        };
        var Karte33 = {
            color: "blue",
            value: "4",
        };
        var Karte34 = {
            color: "blue",
            value: "4",
        };
        var Karte35 = {
            color: "blue",
            value: "5",
        };
        var Karte36 = {
            color: "blue",
            value: "5",
        };
        var Karte37 = {
            color: "blue",
            value: "6",
        };
        var Karte38 = {
            color: "blue",
            value: "6",
        };
        var Karte39 = {
            color: "blue",
            value: "7",
        };
        var Karte40 = {
            color: "blue",
            value: "7",
        };
        var Karte41 = {
            color: "blue",
            value: "8",
        };
        var Karte42 = {
            color: "blue",
            value: "8",
        };
        var Karte43 = {
            color: "blue",
            value: "9",
        };
        var Karte44 = {
            color: "blue",
            value: "9",
        };
        var Karte45 = {
            color: "blue",
            value: "Aussetzen",
        };
        var Karte46 = {
            color: "blue",
            value: "Aussetzen",
        };
        var Karte47 = {
            color: "blue",
            value: "Richtungswechsel",
        };
        var Karte48 = {
            color: "blue",
            value: "Richtungswechsel",
        };
        var Karte49 = {
            color: "blue",
            value: "+2",
        };
        var Karte50 = {
            color: "blue",
            value: "+2",
        };
        var Karte51 = {
            color: "green",
            value: "0",
        };
        var Karte52 = {
            color: "green",
            value: "1",
        };
        var Karte53 = {
            color: "green",
            value: "1",
        };
        var Karte54 = {
            color: "green",
            value: "2",
        };
        var Karte55 = {
            color: "green",
            value: "2",
        };
        var Karte56 = {
            color: "green",
            value: "3",
        };
        var Karte57 = {
            color: "green",
            value: "3",
        };
        var Karte58 = {
            color: "green",
            value: "4",
        };
        var Karte59 = {
            color: "green",
            value: "4",
        };
        var Karte60 = {
            color: "green",
            value: "5",
        };
        var Karte61 = {
            color: "green",
            value: "5",
        };
        var Karte62 = {
            color: "green",
            value: "6",
        };
        var Karte63 = {
            color: "green",
            value: "6",
        };
        var Karte64 = {
            color: "green",
            value: "7",
        };
        var Karte65 = {
            color: "green",
            value: "7",
        };
        var Karte66 = {
            color: "green",
            value: "8",
        };
        var Karte67 = {
            color: "green",
            value: "8",
        };
        var Karte68 = {
            color: "green",
            value: "9",
        };
        var Karte69 = {
            color: "green",
            value: "9",
        };
        var Karte70 = {
            color: "green",
            value: "Aussetzen",
        };
        var Karte71 = {
            color: "green",
            value: "Aussetzen",
        };
        var Karte72 = {
            color: "green",
            value: "Richtungswechsel",
        };
        var Karte73 = {
            color: "green",
            value: "Richtungswechsel",
        };
        var Karte74 = {
            color: "green",
            value: "+2",
        };
        var Karte75 = {
            color: "green",
            value: "+2",
        };
        var Karte76 = {
            color: "yellow",
            value: "0",
        };
        var Karte77 = {
            color: "yellow",
            value: "1",
        };
        var Karte78 = {
            color: "yellow",
            value: "1",
        };
        var Karte79 = {
            color: "yellow",
            value: "2",
        };
        var Karte80 = {
            color: "yellow",
            value: "2",
        };
        var Karte81 = {
            color: "yellow",
            value: "3",
        };
        var Karte82 = {
            color: "yellow",
            value: "3",
        };
        var Karte83 = {
            color: "yellow",
            value: "4",
        };
        var Karte84 = {
            color: "yellow",
            value: "4",
        };
        var Karte85 = {
            color: "yellow",
            value: "5",
        };
        var Karte86 = {
            color: "yellow",
            value: "5",
        };
        var Karte87 = {
            color: "yellow",
            value: "6",
        };
        var Karte88 = {
            color: "yellow",
            value: "6",
        };
        var Karte89 = {
            color: "yellow",
            value: "7",
        };
        var Karte90 = {
            color: "yellow",
            value: "7",
        };
        var Karte91 = {
            color: "yellow",
            value: "8",
        };
        var Karte92 = {
            color: "yellow",
            value: "8",
        };
        var Karte93 = {
            color: "yellow",
            value: "9",
        };
        var Karte94 = {
            color: "yellow",
            value: "9",
        };
        var Karte95 = {
            color: "yellow",
            value: "Aussetzen",
        };
        var Karte96 = {
            color: "yellow",
            value: "Aussetzen",
        };
        var Karte97 = {
            color: "yellow",
            value: "Richtungswechsel",
        };
        var Karte98 = {
            color: "yellow",
            value: "Richtungswechsel",
        };
        var Karte99 = {
            color: "yellow",
            value: "+2",
        };
        var Karte100 = {
            color: "yellow",
            value: "+2",
        };
        var Karte101 = {
            color: "black",
            value: "+4",
        };
        var Karte102 = {
            color: "black",
            value: "+4",
        };
        var Karte103 = {
            color: "black",
            value: "+4",
        };
        var Karte104 = {
            color: "black",
            value: "+4",
        };
        var Karte105 = {
            color: "black",
            value: "Farbwahl",
        };
        var Karte106 = {
            color: "black",
            value: "Farbwahl",
        };
        var Karte107 = {
            color: "black",
            value: "Farbwahl",
        };
        var Karte108 = {
            color: "black",
            value: "Farbwahl",
        };
        var deck = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28, Karte29, Karte30, Karte31, Karte32, Karte33, Karte34, Karte35, Karte36, Karte37, Karte38, Karte39, Karte40, Karte41, Karte42, Karte43, Karte44, Karte45, Karte46, Karte47, Karte48, Karte49, Karte50, Karte51, Karte52, Karte53, Karte54, Karte55, Karte56, Karte57, Karte58, Karte59, Karte60, Karte61, Karte62, Karte63, Karte64, Karte65, Karte66, Karte67, Karte68, Karte69, Karte70, Karte71, Karte72, Karte73, Karte74, Karte75, Karte76, Karte77, Karte78, Karte79, Karte80, Karte81, Karte82, Karte83, Karte84, Karte85, Karte86, Karte87, Karte88, Karte89, Karte90, Karte91, Karte92, Karte93, Karte94, Karte95, Karte96, Karte97, Karte98, Karte99, Karte100, Karte101, Karte102, Karte103, Karte104, Karte105, Karte106, Karte107, Karte108];
        var d = prompt("Bitte gewuenschte Handkartenanzahl eingeben");
        var numberOfCards;
        numberOfCards = Number(d);
        function giveRandomNumber(l) {
            return Math.floor(Math.random() * Math.floor(l));
        }
        function placeDiv(_color, _value, n) {
            var div = document.createElement("div");
            div.setAttribute("id", "Karte" + n);
            document.body.appendChild(div);
            document.getElementById("Karte" + n).innerHTML += _value;
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
        var Hand = [];
        for (var i = 0; i < numberOfCards; i++) {
            var q = giveRandomNumber(deck.length);
            placeDiv(deck[q].color, deck[q].value, i);
            var handCard = deck.splice(q, 1)[0];
            Hand.push(handCard);
            continue;
        }
        var button = document.createElement("button");
        button.setAttribute("id", "button");
        document.body.appendChild(button);
        document.getElementById("button").innerHTML += "Karten sortieren";
        var b = button.style;
        b.border = "thin solid black";
        b.position = "absolute";
        b.backgroundColor = "purple";
        b.color = "black";
        b.width = 300 + "px";
        b.height = 100 + "px";
        b.top = 25 + "px";
        b.textAlign = "center";
        b.fontSize = 2 + "em";
        b.borderRadius = 10 + "px";
        b.right = 25 + "px";
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe3.js.map