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
        var redCard1 = {
            color: "red",
            value: "0",
        };
        var redCard2 = {
            color: "red",
            value: "1",
        };
        var redCard3 = {
            color: "red",
            value: "1",
        };
        var redCard4 = {
            color: "red",
            value: "2",
        };
        var redCard5 = {
            color: "red",
            value: "2",
        };
        var redCard6 = {
            color: "red",
            value: "3",
        };
        var redCard7 = {
            color: "red",
            value: "3",
        };
        var redCard8 = {
            color: "red",
            value: "4",
        };
        var redCard9 = {
            color: "red",
            value: "4",
        };
        var redCard10 = {
            color: "red",
            value: "5",
        };
        var redCard11 = {
            color: "red",
            value: "5",
        };
        var redCard12 = {
            color: "red",
            value: "6",
        };
        var redCard13 = {
            color: "red",
            value: "6",
        };
        var redCard14 = {
            color: "red",
            value: "7",
        };
        var redCard15 = {
            color: "red",
            value: "7",
        };
        var redCard16 = {
            color: "red",
            value: "8",
        };
        var redCard17 = {
            color: "red",
            value: "8",
        };
        var redCard18 = {
            color: "red",
            value: "9",
        };
        var redCard19 = {
            color: "red",
            value: "9",
        };
        var redCard20 = {
            color: "red",
            value: "Aussetzen",
        };
        var redCard21 = {
            color: "red",
            value: "Aussetzen",
        };
        var redCard22 = {
            color: "red",
            value: "Richtungswechsel",
        };
        var redCard23 = {
            color: "red",
            value: "Richtungswechsel",
        };
        var redCard24 = {
            color: "red",
            value: "+2",
        };
        var redCard25 = {
            color: "red",
            value: "+2",
        };
        var blueCard26 = {
            color: "blue",
            value: "0",
        };
        var blueCard27 = {
            color: "blue",
            value: "1",
        };
        var blueCard28 = {
            color: "blue",
            value: "1",
        };
        var blueCard29 = {
            color: "blue",
            value: "2",
        };
        var blueCard30 = {
            color: "blue",
            value: "2",
        };
        var blueCard31 = {
            color: "blue",
            value: "3",
        };
        var blueCard32 = {
            color: "blue",
            value: "3",
        };
        var blueCard33 = {
            color: "blue",
            value: "4",
        };
        var blueCard34 = {
            color: "blue",
            value: "4",
        };
        var blueCard35 = {
            color: "blue",
            value: "5",
        };
        var blueCard36 = {
            color: "blue",
            value: "5",
        };
        var blueCard37 = {
            color: "blue",
            value: "6",
        };
        var blueCard38 = {
            color: "blue",
            value: "6",
        };
        var blueCard39 = {
            color: "blue",
            value: "7",
        };
        var blueCard40 = {
            color: "blue",
            value: "7",
        };
        var blueCard41 = {
            color: "blue",
            value: "8",
        };
        var blueCard42 = {
            color: "blue",
            value: "8",
        };
        var blueCard43 = {
            color: "blue",
            value: "9",
        };
        var blueCard44 = {
            color: "blue",
            value: "9",
        };
        var blueCard45 = {
            color: "blue",
            value: "Aussetzen",
        };
        var blueCard46 = {
            color: "blue",
            value: "Aussetzen",
        };
        var blueCard47 = {
            color: "blue",
            value: "Richtungswechsel",
        };
        var blueCard48 = {
            color: "blue",
            value: "Richtungswechsel",
        };
        var blueCard49 = {
            color: "blue",
            value: "+2",
        };
        var blueCard50 = {
            color: "blue",
            value: "+2",
        };
        var greenCard51 = {
            color: "green",
            value: "0",
        };
        var greenCard52 = {
            color: "green",
            value: "1",
        };
        var greenCard53 = {
            color: "green",
            value: "1",
        };
        var greenCard54 = {
            color: "green",
            value: "2",
        };
        var greenCard55 = {
            color: "green",
            value: "2",
        };
        var greenCard56 = {
            color: "green",
            value: "3",
        };
        var greenCard57 = {
            color: "green",
            value: "3",
        };
        var greenCard58 = {
            color: "green",
            value: "4",
        };
        var greenCard59 = {
            color: "green",
            value: "4",
        };
        var greenCard60 = {
            color: "green",
            value: "5",
        };
        var greenCard61 = {
            color: "green",
            value: "5",
        };
        var greenCard62 = {
            color: "green",
            value: "6",
        };
        var greenCard63 = {
            color: "green",
            value: "6",
        };
        var greenCard64 = {
            color: "green",
            value: "7",
        };
        var greenCard65 = {
            color: "green",
            value: "7",
        };
        var greenCard66 = {
            color: "green",
            value: "8",
        };
        var greenCard67 = {
            color: "green",
            value: "8",
        };
        var greenCard68 = {
            color: "green",
            value: "9",
        };
        var greenCard69 = {
            color: "green",
            value: "9",
        };
        var greenCard70 = {
            color: "green",
            value: "Aussetzen",
        };
        var greenCard71 = {
            color: "green",
            value: "Aussetzen",
        };
        var greenCard72 = {
            color: "green",
            value: "Richtungswechsel",
        };
        var greenCard73 = {
            color: "green",
            value: "Richtungswechsel",
        };
        var greenCard74 = {
            color: "green",
            value: "+2",
        };
        var greenCard75 = {
            color: "green",
            value: "+2",
        };
        var yellowCard76 = {
            color: "yellow",
            value: "0",
        };
        var yellowCard77 = {
            color: "yellow",
            value: "1",
        };
        var yellowCard78 = {
            color: "yellow",
            value: "1",
        };
        var yellowCard79 = {
            color: "yellow",
            value: "2",
        };
        var yellowCard80 = {
            color: "yellow",
            value: "2",
        };
        var yellowCard81 = {
            color: "yellow",
            value: "3",
        };
        var yellowCard82 = {
            color: "yellow",
            value: "3",
        };
        var yellowCard83 = {
            color: "yellow",
            value: "4",
        };
        var yellowCard84 = {
            color: "yellow",
            value: "4",
        };
        var yellowCard85 = {
            color: "yellow",
            value: "5",
        };
        var yellowCard86 = {
            color: "yellow",
            value: "5",
        };
        var yellowCard87 = {
            color: "yellow",
            value: "6",
        };
        var yellowCard88 = {
            color: "yellow",
            value: "6",
        };
        var yellowCard89 = {
            color: "yellow",
            value: "7",
        };
        var yellowCard90 = {
            color: "yellow",
            value: "7",
        };
        var yellowCard91 = {
            color: "yellow",
            value: "8",
        };
        var yellowCard92 = {
            color: "yellow",
            value: "8",
        };
        var yellowCard93 = {
            color: "yellow",
            value: "9",
        };
        var yellowCard94 = {
            color: "yellow",
            value: "9",
        };
        var yellowCard95 = {
            color: "yellow",
            value: "Aussetzen",
        };
        var yellowCard96 = {
            color: "yellow",
            value: "Aussetzen",
        };
        var yellowCard97 = {
            color: "yellow",
            value: "Richtungswechsel",
        };
        var yellowCard98 = {
            color: "yellow",
            value: "Richtungswechsel",
        };
        var yellowCard99 = {
            color: "yellow",
            value: "+2",
        };
        var yellowCard100 = {
            color: "yellow",
            value: "+2",
        };
        var blackCard101 = {
            color: "black",
            value: "+4",
        };
        var blackCard102 = {
            color: "black",
            value: "+4",
        };
        var blackCard103 = {
            color: "black",
            value: "+4",
        };
        var blackCard104 = {
            color: "black",
            value: "+4",
        };
        var blackCard105 = {
            color: "black",
            value: "Farbwahl",
        };
        var blackCard106 = {
            color: "black",
            value: "Farbwahl",
        };
        var blackCard107 = {
            color: "black",
            value: "Farbwahl",
        };
        var blackCard108 = {
            color: "black",
            value: "Farbwahl",
        };
        var deck = [redCard1, redCard2, redCard3, redCard4, redCard5, redCard6, redCard7, redCard8, redCard9, redCard10, redCard11, redCard12, redCard13, redCard14, redCard15, redCard16, redCard17, redCard18, redCard19, redCard20, redCard21, redCard22, redCard23, redCard24, redCard25, blueCard26, blueCard27, blueCard28, blueCard29, blueCard30, blueCard31, blueCard32, blueCard33, blueCard34, blueCard35, blueCard36, blueCard37, blueCard38, blueCard39, blueCard40, blueCard41, blueCard42, blueCard43, blueCard44, blueCard45, blueCard46, blueCard47, blueCard48, blueCard49, blueCard50, greenCard51, greenCard52, greenCard53, greenCard54, greenCard55, greenCard56, greenCard57, greenCard58, greenCard59, greenCard60, greenCard61, greenCard62, greenCard63, greenCard64, greenCard65, greenCard66, greenCard67, greenCard68, greenCard69, greenCard70, greenCard71, greenCard72, greenCard73, greenCard74, greenCard75, yellowCard76, yellowCard77, yellowCard78, yellowCard79, yellowCard80, yellowCard81, yellowCard82, yellowCard83, yellowCard84, yellowCard85, yellowCard86, yellowCard87, yellowCard88, yellowCard89, yellowCard90, yellowCard91, yellowCard92, yellowCard93, yellowCard94, yellowCard95, yellowCard96, yellowCard97, yellowCard98, yellowCard99, yellowCard100, blackCard101, blackCard102, blackCard103, blackCard104, blackCard105, blackCard106, blackCard107, blackCard108];
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
        var hand = [];
        for (var i = 0; i < numberOfCards; i++) {
            var q = giveRandomNumber(deck.length);
            placeDiv(deck[q].color, deck[q].value, i);
            var handCard = deck.splice(q, 1)[0];
            hand.push(handCard);
            var button = document.createElement("button");
            button.setAttribute("id", "button");
            document.body.appendChild(button);
            document.getElementById("button").innerHTML += "Karten sortieren";
            var b = button.style;
            b.border = "thin solid black";
            b.position = "absolute";
            b.backgroundColor = "pink";
            b.color = "black";
            b.width = 250 + "px";
            b.height = 100 + "px";
            b.top = 25 + "px";
            b.textAlign = "center";
            b.fontSize = 2 + "em";
            b.borderRadius = 10 + "px";
            b.right = 25 + "px";
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe3.js.map