/*
Aufgabe: 3 Uno
Name: Julia Herr
Matrikel: 259568
Datum: 14.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe2;
(function (Aufgabe2) {
    document.addEventListener('DOMContentLoaded', playUno);
    let redCard1 = {
        color: "red",
        value: "0",
    };
    let redCard2 = {
        color: "red",
        value: "1",
    };
    let redCard3 = {
        color: "red",
        value: "1",
    };
    let redCard4 = {
        color: "red",
        value: "2",
    };
    let redCard5 = {
        color: "red",
        value: "2",
    };
    let redCard6 = {
        color: "red",
        value: "3",
    };
    let redCard7 = {
        color: "red",
        value: "3",
    };
    let redCard8 = {
        color: "red",
        value: "4",
    };
    let redCard9 = {
        color: "red",
        value: "4",
    };
    let redCard10 = {
        color: "red",
        value: "5",
    };
    let redCard11 = {
        color: "red",
        value: "5",
    };
    let redCard12 = {
        color: "red",
        value: "6",
    };
    let redCard13 = {
        color: "red",
        value: "6",
    };
    let redCard14 = {
        color: "red",
        value: "7",
    };
    let redCard15 = {
        color: "red",
        value: "7",
    };
    let redCard16 = {
        color: "red",
        value: "8",
    };
    let redCard17 = {
        color: "red",
        value: "8",
    };
    let redCard18 = {
        color: "red",
        value: "9",
    };
    let redCard19 = {
        color: "red",
        value: "9",
    };
    let redCard20 = {
        color: "red",
        value: "Aussetzen",
    };
    let redCard21 = {
        color: "red",
        value: "Aussetzen",
    };
    let redCard22 = {
        color: "red",
        value: "Richtungswechsel",
    };
    let redCard23 = {
        color: "red",
        value: "Richtungswechsel",
    };
    let redCard24 = {
        color: "red",
        value: "+2",
    };
    let redCard25 = {
        color: "red",
        value: "+2",
    };
    let blueCard26 = {
        color: "blue",
        value: "0",
    };
    let blueCard27 = {
        color: "blue",
        value: "1",
    };
    let blueCard28 = {
        color: "blue",
        value: "1",
    };
    let blueCard29 = {
        color: "blue",
        value: "2",
    };
    let blueCard30 = {
        color: "blue",
        value: "2",
    };
    let blueCard31 = {
        color: "blue",
        value: "3",
    };
    let blueCard32 = {
        color: "blue",
        value: "3",
    };
    let blueCard33 = {
        color: "blue",
        value: "4",
    };
    let blueCard34 = {
        color: "blue",
        value: "4",
    };
    let blueCard35 = {
        color: "blue",
        value: "5",
    };
    let blueCard36 = {
        color: "blue",
        value: "5",
    };
    let blueCard37 = {
        color: "blue",
        value: "6",
    };
    let blueCard38 = {
        color: "blue",
        value: "6",
    };
    let blueCard39 = {
        color: "blue",
        value: "7",
    };
    let blueCard40 = {
        color: "blue",
        value: "7",
    };
    let blueCard41 = {
        color: "blue",
        value: "8",
    };
    let blueCard42 = {
        color: "blue",
        value: "8",
    };
    let blueCard43 = {
        color: "blue",
        value: "9",
    };
    let blueCard44 = {
        color: "blue",
        value: "9",
    };
    let blueCard45 = {
        color: "blue",
        value: "Aussetzen",
    };
    let blueCard46 = {
        color: "blue",
        value: "Aussetzen",
    };
    let blueCard47 = {
        color: "blue",
        value: "Richtungswechsel",
    };
    let blueCard48 = {
        color: "blue",
        value: "Richtungswechsel",
    };
    let blueCard49 = {
        color: "blue",
        value: "+2",
    };
    let blueCard50 = {
        color: "blue",
        value: "+2",
    };
    let greenCard51 = {
        color: "green",
        value: "0",
    };
    let greenCard52 = {
        color: "green",
        value: "1",
    };
    let greenCard53 = {
        color: "green",
        value: "1",
    };
    let greenCard54 = {
        color: "green",
        value: "2",
    };
    let greenCard55 = {
        color: "green",
        value: "2",
    };
    let greenCard56 = {
        color: "green",
        value: "3",
    };
    let greenCard57 = {
        color: "green",
        value: "3",
    };
    let greenCard58 = {
        color: "green",
        value: "4",
    };
    let greenCard59 = {
        color: "green",
        value: "4",
    };
    let greenCard60 = {
        color: "green",
        value: "5",
    };
    let greenCard61 = {
        color: "green",
        value: "5",
    };
    let greenCard62 = {
        color: "green",
        value: "6",
    };
    let greenCard63 = {
        color: "green",
        value: "6",
    };
    let greenCard64 = {
        color: "green",
        value: "7",
    };
    let greenCard65 = {
        color: "green",
        value: "7",
    };
    let greenCard66 = {
        color: "green",
        value: "8",
    };
    let greenCard67 = {
        color: "green",
        value: "8",
    };
    let greenCard68 = {
        color: "green",
        value: "9",
    };
    let greenCard69 = {
        color: "green",
        value: "9",
    };
    let greenCard70 = {
        color: "green",
        value: "Aussetzen",
    };
    let greenCard71 = {
        color: "green",
        value: "Aussetzen",
    };
    let greenCard72 = {
        color: "green",
        value: "Richtungswechsel",
    };
    let greenCard73 = {
        color: "green",
        value: "Richtungswechsel",
    };
    let greenCard74 = {
        color: "green",
        value: "+2",
    };
    let greenCard75 = {
        color: "green",
        value: "+2",
    };
    let yellowCard76 = {
        color: "yellow",
        value: "0",
    };
    let yellowCard77 = {
        color: "yellow",
        value: "1",
    };
    let yellowCard78 = {
        color: "yellow",
        value: "1",
    };
    let yellowCard79 = {
        color: "yellow",
        value: "2",
    };
    let yellowCard80 = {
        color: "yellow",
        value: "2",
    };
    let yellowCard81 = {
        color: "yellow",
        value: "3",
    };
    let yellowCard82 = {
        color: "yellow",
        value: "3",
    };
    let yellowCard83 = {
        color: "yellow",
        value: "4",
    };
    let yellowCard84 = {
        color: "yellow",
        value: "4",
    };
    let yellowCard85 = {
        color: "yellow",
        value: "5",
    };
    let yellowCard86 = {
        color: "yellow",
        value: "5",
    };
    let yellowCard87 = {
        color: "yellow",
        value: "6",
    };
    let yellowCard88 = {
        color: "yellow",
        value: "6",
    };
    let yellowCard89 = {
        color: "yellow",
        value: "7",
    };
    let yellowCard90 = {
        color: "yellow",
        value: "7",
    };
    let yellowCard91 = {
        color: "yellow",
        value: "8",
    };
    let yellowCard92 = {
        color: "yellow",
        value: "8",
    };
    let yellowCard93 = {
        color: "yellow",
        value: "9",
    };
    let yellowCard94 = {
        color: "yellow",
        value: "9",
    };
    let yellowCard95 = {
        color: "yellow",
        value: "Aussetzen",
    };
    let yellowCard96 = {
        color: "yellow",
        value: "Aussetzen",
    };
    let yellowCard97 = {
        color: "yellow",
        value: "Richtungswechsel",
    };
    let yellowCard98 = {
        color: "yellow",
        value: "Richtungswechsel",
    };
    let yellowCard99 = {
        color: "yellow",
        value: "+2",
    };
    let yellowCard100 = {
        color: "yellow",
        value: "+2",
    };
    let blackCard101 = {
        color: "black",
        value: "+4",
    };
    let blackCard102 = {
        color: "black",
        value: "+4",
    };
    let blackCard103 = {
        color: "black",
        value: "+4",
    };
    let blackCard104 = {
        color: "black",
        value: "+4",
    };
    let blackCard105 = {
        color: "black",
        value: "Farbwahl",
    };
    let blackCard106 = {
        color: "black",
        value: "Farbwahl",
    };
    let blackCard107 = {
        color: "black",
        value: "Farbwahl",
    };
    let blackCard108 = {
        color: "black",
        value: "Farbwahl",
    };
    let deck = [redCard1, redCard2, redCard3, redCard4, redCard5, redCard6, redCard7, redCard8, redCard9, redCard10, redCard11, redCard12, redCard13, redCard14, redCard15, redCard16, redCard17, redCard18, redCard19, redCard20, redCard21, redCard22, redCard23, redCard24, redCard25, blueCard26, blueCard27, blueCard28, blueCard29, blueCard30, blueCard31, blueCard32, blueCard33, blueCard34, blueCard35, blueCard36, blueCard37, blueCard38, blueCard39, blueCard40, blueCard41, blueCard42, blueCard43, blueCard44, blueCard45, blueCard46, blueCard47, blueCard48, blueCard49, blueCard50, greenCard51, greenCard52, greenCard53, greenCard54, greenCard55, greenCard56, greenCard57, greenCard58, greenCard59, greenCard60, greenCard61, greenCard62, greenCard63, greenCard64, greenCard65, greenCard66, greenCard67, greenCard68, greenCard69, greenCard70, greenCard71, greenCard72, greenCard73, greenCard74, greenCard75, yellowCard76, yellowCard77, yellowCard78, yellowCard79, yellowCard80, yellowCard81, yellowCard82, yellowCard83, yellowCard84, yellowCard85, yellowCard86, yellowCard87, yellowCard88, yellowCard89, yellowCard90, yellowCard91, yellowCard92, yellowCard93, yellowCard94, yellowCard95, yellowCard96, yellowCard97, yellowCard98, yellowCard99, yellowCard100, blackCard101, blackCard102, blackCard103, blackCard104, blackCard105, blackCard106, blackCard107, blackCard108];
    let hand = [];
    let stackCards = [];
    function giveRandomNumber(l) {
        return Math.floor(Math.random() * Math.floor(l));
    }
    function placeDiv(_color, _value, n) {
        let div = document.createElement("div");
        div.setAttribute("id", "Karte" + n);
        document.getElementById("main").appendChild(div);
        document.getElementById("Karte" + n).innerHTML += _value;
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
    function playUno() {
        var button = document.createElement("button");
        button.setAttribute("id", "button");
        document.body.appendChild(button);
        document.getElementById("button").innerHTML += "Karten sortieren";
        let b = button.style;
        b.border = "thin solid black";
        b.position = "absolute";
        b.backgroundColor = "purple";
        b.color = "white";
        b.width = 300 + "px";
        b.height = 100 + "px";
        b.top = 25 + "px";
        b.textAlign = "center";
        b.fontSize = 2 + "em";
        b.borderRadius = 10 + "px";
        b.right = 25 + "px";
        document.getElementById("button").addEventListener("click", sortCards);
        document.getElementById("Aufnahme").addEventListener("click", pull);
        document.addEventListener("keydown", pull2);
        document.getElementById("main").addEventListener("click", removeCard);
        let d = prompt("Bitte gewuenschte Handkartenanzahl eingeben");
        let numberOfCards;
        numberOfCards = Number(d);
        for (let i = 0; i < numberOfCards; i++) {
            console.log("has");
            let q = giveRandomNumber(deck.length);
            placeDiv(deck[q].color, deck[q].value, i);
            let handCard = deck.splice(q, 1)[0];
            hand.push(handCard);
        }
    }
    function sortCards() {
        hand.sort(function (a, b) {
            var nameA = a.color.toUpperCase();
            var nameB = b.color.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            console.log(hand);
            // namen m�ssen gleich sein
            return 0;
        });
        deleteCards();
        for (let i = 0; i < hand.length; i++) {
            placeDiv(hand[i].color, hand[i].value, i);
        }
    }
    function deleteCards() {
        let node = document.getElementById("main");
        node.innerHTML = "";
    }
    function pull() {
        deleteCards();
        for (let i = 0; i < 1; i++) {
            let q = giveRandomNumber(deck.length);
            let handCard = deck.splice(q, 1)[0];
            hand.push(handCard);
        }
        for (let i = 0; i < hand.length; i++) {
            placeDiv(hand[i].color, hand[i].value, i);
        }
    }
    function pull2(_event) {
        var keyCode = _event.keyCode;
        if (keyCode == 32) {
            pull();
        }
    }
    function removeCard(_event) {
        let main = document.getElementById("main");
        let domCard = _event.target;
        if (domCard != main) {
            let index;
            let domAttribute = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(5);
            index = parseInt(domAttribute);
            let pulledCard = hand.splice(index, 1)[0];
            stackCards.push(pulledCard);
            deleteCards();
            deleteStack();
            for (let i = 0; i < hand.length; i++) {
                placeDiv(hand[i].color, hand[i].value, i);
            }
            for (let i = 0; i < stackCards.length; i++) {
                placeStack(stackCards[i].color, stackCards[i].value, i);
            }
        }
    }
    function deleteStack() {
        let node = document.getElementById("Ablage");
        node.innerHTML = "";
    }
    function placeStack(_color, _value, n) {
        let div = document.createElement("div");
        div.setAttribute("id", "stack" + n);
        div.setAttribute("class", "Stack");
        document.getElementById("Ablage").appendChild(div);
        document.getElementById("stack" + n).innerHTML += _value;
        let s = div.style;
        s.backgroundColor = _color;
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe3.js.map