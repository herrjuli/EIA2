/*
Aufgabe: 2 Uno
Name: Julia Herr
Matrikel: 259568
Datum: 21.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe2;
(function (Aufgabe2) {
    var Karte1 = {
        Farbe: "red",
        Wert: "0",
        Da: true
    };
    var Karte2 = {
        Farbe: "red",
        Wert: "1",
        Da: true
    };
    var Karte2a = {
        Farbe: "red",
        Wert: "1",
        Da: true
    };
    var Karte3 = {
        Farbe: "red",
        Wert: "2",
        Da: true
    };
    var Karte4 = {
        Farbe: "red",
        Wert: "2",
        Da: true
    };
    var Karte5 = {
        Farbe: "red",
        Wert: "3",
        Da: true
    };
    var Karte6 = {
        Farbe: "red",
        Wert: "3",
        Da: true
    };
    var Karte7 = {
        Farbe: "red",
        Wert: "4",
        Da: true
    };
    var Karte8 = {
        Farbe: "red",
        Wert: "4",
        Da: true
    };
    var Karte9 = {
        Farbe: "red",
        Wert: "5",
        Da: true
    };
    var Karte10 = {
        Farbe: "red",
        Wert: "5",
        Da: true
    };
    var Karte11 = {
        Farbe: "red",
        Wert: "6",
        Da: true
    };
    var Karte11a = {
        Farbe: "red",
        Wert: "6",
        Da: true
    };
    var Karte12 = {
        Farbe: "red",
        Wert: "7",
        Da: true
    };
    var Karte13 = {
        Farbe: "red",
        Wert: "7",
        Da: true
    };
    var Karte14 = {
        Farbe: "red",
        Wert: "8",
        Da: true
    };
    var Karte15 = {
        Farbe: "red",
        Wert: "8",
        Da: true
    };
    var Karte16 = {
        Farbe: "red",
        Wert: "9",
        Da: true
    };
    var Karte17 = {
        Farbe: "red",
        Wert: "9",
        Da: true
    };
    var Karte18 = {
        Farbe: "red",
        Wert: "Aussetzen",
        Da: true
    };
    var Karte19 = {
        Farbe: "red",
        Wert: "Aussetzen",
        Da: true
    };
    var Karte20 = {
        Farbe: "red",
        Wert: "Richtungswechsel",
        Da: true
    };
    var Karte21 = {
        Farbe: "red",
        Wert: "Richtungswechsel",
        Da: true
    };
    var Karte22 = {
        Farbe: "red",
        Wert: "+2",
        Da: true
    };
    var Karte23 = {
        Farbe: "red",
        Wert: "+2",
        Da: true
    };
    var Karte24 = {
        Farbe: "blue",
        Wert: "0",
        Da: true
    };
    var Karte25 = {
        Farbe: "blue",
        Wert: "1",
        Da: true
    };
    var Karte26 = {
        Farbe: "blue",
        Wert: "1",
        Da: true
    };
    var Karte27 = {
        Farbe: "blue",
        Wert: "2",
        Da: true
    };
    var Karte28 = {
        Farbe: "blue",
        Wert: "2",
        Da: true
    };
    var Karte29 = {
        Farbe: "blue",
        Wert: "3",
        Da: true
    };
    var Karte30 = {
        Farbe: "blue",
        Wert: "3",
        Da: true
    };
    var Karte31 = {
        Farbe: "blue",
        Wert: "4",
        Da: true
    };
    var Karte32 = {
        Farbe: "blue",
        Wert: "4",
        Da: true
    };
    var Karte33 = {
        Farbe: "blue",
        Wert: "5",
        Da: true
    };
    var Karte34 = {
        Farbe: "blue",
        Wert: "5",
        Da: true
    };
    var Karte35 = {
        Farbe: "blue",
        Wert: "6",
        Da: true
    };
    var Karte36 = {
        Farbe: "blue",
        Wert: "6",
        Da: true
    };
    var Karte37 = {
        Farbe: "blue",
        Wert: "7",
        Da: true
    };
    var Karte38 = {
        Farbe: "blue",
        Wert: "7",
        Da: true
    };
    var Karte39 = {
        Farbe: "blue",
        Wert: "8",
        Da: true
    };
    var Karte40 = {
        Farbe: "blue",
        Wert: "8",
        Da: true
    };
    var Karte41 = {
        Farbe: "blue",
        Wert: "9",
        Da: true
    };
    var Karte42 = {
        Farbe: "blue",
        Wert: "9",
        Da: true
    };
    var Karte43 = {
        Farbe: "blue",
        Wert: "Aussetzen",
        Da: true
    };
    var Karte44 = {
        Farbe: "blue",
        Wert: "Aussetzen",
        Da: true
    };
    var Karte45 = {
        Farbe: "blue",
        Wert: "Richtungswechsel",
        Da: true
    };
    var Karte46 = {
        Farbe: "blue",
        Wert: "Richtungswechsel",
        Da: true
    };
    var Karte47 = {
        Farbe: "blue",
        Wert: "+2",
        Da: true
    };
    var Karte48 = {
        Farbe: "blue",
        Wert: "+2",
        Da: true
    };
    var Karte49 = {
        Farbe: "green",
        Wert: "0",
        Da: true
    };
    var Karte50 = {
        Farbe: "green",
        Wert: "1",
        Da: true
    };
    var Karte51 = {
        Farbe: "green",
        Wert: "1",
        Da: true
    };
    var Karte52 = {
        Farbe: "green",
        Wert: "2",
        Da: true
    };
    var Karte53 = {
        Farbe: "green",
        Wert: "2",
        Da: true
    };
    var Karte54 = {
        Farbe: "green",
        Wert: "3",
        Da: true
    };
    var Karte55 = {
        Farbe: "green",
        Wert: "3",
        Da: true
    };
    var Karte56 = {
        Farbe: "green",
        Wert: "4",
        Da: true
    };
    var Karte57 = {
        Farbe: "green",
        Wert: "4",
        Da: true
    };
    var Karte58 = {
        Farbe: "green",
        Wert: "5",
        Da: true
    };
    var Karte59 = {
        Farbe: "green",
        Wert: "5",
        Da: true
    };
    var Karte60 = {
        Farbe: "green",
        Wert: "6",
        Da: true
    };
    var Karte61 = {
        Farbe: "green",
        Wert: "6",
        Da: true
    };
    var Karte62 = {
        Farbe: "green",
        Wert: "7",
        Da: true
    };
    var Karte63 = {
        Farbe: "green",
        Wert: "7",
        Da: true
    };
    var Karte64 = {
        Farbe: "green",
        Wert: "8",
        Da: true
    };
    var Karte65 = {
        Farbe: "green",
        Wert: "8",
        Da: true
    };
    var Karte66 = {
        Farbe: "green",
        Wert: "9",
        Da: true
    };
    var Karte67 = {
        Farbe: "green",
        Wert: "9",
        Da: true
    };
    var Karte68 = {
        Farbe: "green",
        Wert: "Aussetzen",
        Da: true
    };
    var Karte69 = {
        Farbe: "green",
        Wert: "Aussetzen",
        Da: true
    };
    var Karte70 = {
        Farbe: "green",
        Wert: "Richtungswechsel",
        Da: true
    };
    var Karte71 = {
        Farbe: "green",
        Wert: "Richtungswechsel",
        Da: true
    };
    var Karte72 = {
        Farbe: "green",
        Wert: "+2",
        Da: true
    };
    var Karte73 = {
        Farbe: "green",
        Wert: "+2",
        Da: true
    };
    var Karte74 = {
        Farbe: "yellow",
        Wert: "0",
        Da: true
    };
    var Karte74a = {
        Farbe: "yellow",
        Wert: "1",
        Da: true
    };
    var Karte75 = {
        Farbe: "yellow",
        Wert: "1",
        Da: true
    };
    var Karte76 = {
        Farbe: "yellow",
        Wert: "2",
        Da: true
    };
    var Karte77 = {
        Farbe: "yellow",
        Wert: "2",
        Da: true
    };
    var Karte78 = {
        Farbe: "yellow",
        Wert: "3",
        Da: true
    };
    var Karte79 = {
        Farbe: "yellow",
        Wert: "3",
        Da: true
    };
    var Karte80 = {
        Farbe: "yellow",
        Wert: "4",
        Da: true
    };
    var Karte81 = {
        Farbe: "yellow",
        Wert: "4",
        Da: true
    };
    var Karte82 = {
        Farbe: "yellow",
        Wert: "5",
        Da: true
    };
    var Karte83 = {
        Farbe: "yellow",
        Wert: "5",
        Da: true
    };
    var Karte84 = {
        Farbe: "yellow",
        Wert: "6",
        Da: true
    };
    var Karte85 = {
        Farbe: "yellow",
        Wert: "6",
        Da: true
    };
    var Karte86 = {
        Farbe: "yellow",
        Wert: "7",
        Da: true
    };
    var Karte87 = {
        Farbe: "yellow",
        Wert: "7",
        Da: true
    };
    var Karte88 = {
        Farbe: "yellow",
        Wert: "8",
        Da: true
    };
    var Karte89 = {
        Farbe: "yellow",
        Wert: "8",
        Da: true
    };
    var Karte90 = {
        Farbe: "yellow",
        Wert: "9",
        Da: true
    };
    var Karte91 = {
        Farbe: "yellow",
        Wert: "9",
        Da: true
    };
    var Karte92 = {
        Farbe: "yellow",
        Wert: "Aussetzen",
        Da: true
    };
    var Karte93 = {
        Farbe: "yellow",
        Wert: "Aussetzen",
        Da: true
    };
    var Karte94 = {
        Farbe: "yellow",
        Wert: "Richtungswechsel",
        Da: true
    };
    var Karte95 = {
        Farbe: "yellow",
        Wert: "Richtungswechsel",
        Da: true
    };
    var Karte96 = {
        Farbe: "yellow",
        Wert: "+2",
        Da: true
    };
    var Karte97 = {
        Farbe: "yellow",
        Wert: "+2",
        Da: true
    };
    var Karte98 = {
        Farbe: "black",
        Wert: "+4",
        Da: true
    };
    var Karte99 = {
        Farbe: "black",
        Wert: "+4",
        Da: true
    };
    var Karte100 = {
        Farbe: "black",
        Wert: "+4",
        Da: true
    };
    var Karte101 = {
        Farbe: "black",
        Wert: "+4",
        Da: true
    };
    var Karte102 = {
        Farbe: "black",
        Wert: "Farbwahl",
        Da: true
    };
    var Karte103 = {
        Farbe: "black",
        Wert: "Farbwahl",
        Da: true
    };
    var Karte104 = {
        Farbe: "black",
        Wert: "Farbwahl",
        Da: true
    };
    var Karte105 = {
        Farbe: "black",
        Wert: "Farbwahl",
        Da: true
    };
    var Deck = [Karte1, Karte2, Karte2a, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte11a, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28, Karte29, Karte30, Karte31, Karte32, Karte33, Karte34, Karte35, Karte36, Karte37, Karte38, Karte39, Karte40, Karte41, Karte42, Karte43, Karte44, Karte45, Karte46, Karte47, Karte48, Karte49, Karte50, Karte51, Karte52, Karte53, Karte54, Karte55, Karte56, Karte57, Karte58, Karte59, Karte60, Karte61, Karte62, Karte63, Karte64, Karte65, Karte66, Karte67, Karte68, Karte69, Karte70, Karte71, Karte72, Karte73, Karte74, Karte74a, Karte75, Karte76, Karte77, Karte78, Karte79, Karte80, Karte81, Karte82, Karte83, Karte84, Karte85, Karte86, Karte87, Karte88, Karte89, Karte90, Karte91, Karte92, Karte93, Karte94, Karte95, Karte96, Karte97, Karte98, Karte99, Karte100, Karte101, Karte102, Karte103, Karte104, Karte105];
    function Auswahl() {
        var d = prompt();
        var o;
        o = Number(d);
        for (var i = 0; i < o; i++) {
            var x = Math.floor(Math.random() * Math.floor(105));
            if (Deck[x].Da == false) {
                i--;
                continue;
            }
            else if (Deck[x].Da == true) {
                Deck[x].Da = false;
                start(Deck[x].Farbe, Deck[x].Wert, i);
            }
        }
    }
    function start(_color, _nummer, n) {
        var ab = n * 150;
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
        s.left = ab + "px";
        s.bottom = 25 + "px";
        s.textAlign = "center";
        s.fontSize = 2 + "em";
        s.borderRadius = 10 + "px";
    }
    function Stapel() {
        var Ablage = document.createElement("div");
        document.body.appendChild(Ablage);
        Ablage.setAttribute("id", "ablage");
        document.getElementById("ablage").innerHTML += "Ablage";
        var a = Ablage.style;
        a.border = "thin solid black";
        a.position = "absolute";
        a.backgroundColor = "black";
        a.width = 128 + "px";
        a.height = 200 + "px";
        a.right = 1025 + "px";
        a.top = 25 + "px";
        a.textAlign = "center";
        a.borderRadius = 10 + "px";
        a.color = "yellow";
        a.fontSize = 2 + "em";
        var Aufnahme = document.createElement("div");
        document.body.appendChild(Aufnahme);
        Aufnahme.setAttribute("id", "aufnahme");
        document.getElementById("aufnahme").innerHTML += "Aufnahme";
        var z = Aufnahme.style;
        z.border = "thin solid black";
        z.position = "absolute";
        z.backgroundColor = "black";
        z.width = 128 + "px";
        z.height = 200 + "px";
        z.left = 25 + "px";
        z.top = 25 + "px";
        z.textAlign = "center";
        z.borderRadius = 10 + "px";
        z.color = "yellow";
        z.fontSize = 2 + "em";
    }
    Stapel();
    document.addEventListener('DOMContentLoaded', Auswahl);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map