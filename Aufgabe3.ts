/*
Aufgabe: 3 Uno
Name: Julia Herr
Matrikel: 259568
Datum: 14.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/





namespace Aufgabe2 {
    document.addEventListener('DOMContentLoaded', playUno);



    interface Cards {
        color: string;
        value: string;
    }
    let redCard1: Cards = {
        color: "red",
        value: "0",
    }
    let redCard2: Cards = {
        color: "red",
        value: "1",
    }
    let redCard3: Cards = {
        color: "red",
        value: "1",
    }
    let redCard4: Cards = {
        color: "red",
        value: "2",
    }
    let redCard5: Cards = {
        color: "red",
        value: "2",
    }
    let redCard6: Cards = {
        color: "red",
        value: "3",
    }
    let redCard7: Cards = {
        color: "red",
        value: "3",
    }
    let redCard8: Cards = {
        color: "red",
        value: "4",
    }
    let redCard9: Cards = {
        color: "red",
        value: "4",
    }
    let redCard10: Cards = {
        color: "red",
        value: "5",
    }
    let redCard11: Cards = {
        color: "red",
        value: "5",
    }
    let redCard12: Cards = {
        color: "red",
        value: "6",
    }
    let redCard13: Cards = {
        color: "red",
        value: "6",
    }
    let redCard14: Cards = {
        color: "red",
        value: "7",
    }
    let redCard15: Cards = {
        color: "red",
        value: "7",
    }
    let redCard16: Cards = {
        color: "red",
        value: "8",
    }
    let redCard17: Cards = {
        color: "red",
        value: "8",
    }
    let redCard18: Cards = {
        color: "red",
        value: "9",
    }
    let redCard19: Cards = {
        color: "red",
        value: "9",
    }
    let redCard20: Cards = {
        color: "red",
        value: "Aussetzen",
    }
    let redCard21: Cards = {
        color: "red",
        value: "Aussetzen",
    }
    let redCard22: Cards = {
        color: "red",
        value: "Richtungswechsel",
    }
    let redCard23: Cards = {
        color: "red",
        value: "Richtungswechsel",
    }
    let redCard24: Cards = {
        color: "red",
        value: "+2",
    }
    let redCard25: Cards = {
        color: "red",
        value: "+2",
    }
    let blueCard26: Cards = {
        color: "blue",
        value: "0",
    }

    let blueCard27: Cards = {
        color: "blue",
        value: "1",
    }
    let blueCard28: Cards = {
        color: "blue",
        value: "1",
    }
    let blueCard29: Cards = {
        color: "blue",
        value: "2",
    }
    let blueCard30: Cards = {
        color: "blue",
        value: "2",
    }
    let blueCard31: Cards = {
        color: "blue",
        value: "3",
    }
    let blueCard32: Cards = {
        color: "blue",
        value: "3",

    }
    let blueCard33: Cards = {
        color: "blue",
        value: "4",
    }
    let blueCard34: Cards = {
        color: "blue",
        value: "4",
    }
    let blueCard35: Cards = {
        color: "blue",
        value: "5",
    }
    let blueCard36: Cards = {
        color: "blue",
        value: "5",
    }
    let blueCard37: Cards = {
        color: "blue",
        value: "6",
    }
    let blueCard38: Cards = {
        color: "blue",
        value: "6",
    }
    let blueCard39: Cards = {
        color: "blue",
        value: "7",
    }
    let blueCard40: Cards = {
        color: "blue",
        value: "7",
    }
    let blueCard41: Cards = {
        color: "blue",
        value: "8",
    }
    let blueCard42: Cards = {
        color: "blue",
        value: "8",
    }
    let blueCard43: Cards = {
        color: "blue",
        value: "9",
    }
    let blueCard44: Cards = {
        color: "blue",
        value: "9",
    }
    let blueCard45: Cards = {
        color: "blue",
        value: "Aussetzen",
    }
    let blueCard46: Cards = {
        color: "blue",
        value: "Aussetzen",
    }
    let blueCard47: Cards = {
        color: "blue",
        value: "Richtungswechsel",
    }
    let blueCard48: Cards = {
        color: "blue",
        value: "Richtungswechsel",
    }
    let blueCard49: Cards = {
        color: "blue",
        value: "+2",
    }
    let blueCard50: Cards = {
        color: "blue",
        value: "+2",
    }
    let greenCard51: Cards = {
        color: "green",
        value: "0",
    }

    let greenCard52: Cards = {
        color: "green",
        value: "1",
    }
    let greenCard53: Cards = {
        color: "green",
        value: "1",
    }
    let greenCard54: Cards = {
        color: "green",
        value: "2",
    }
    let greenCard55: Cards = {
        color: "green",
        value: "2",
    }
    let greenCard56: Cards = {
        color: "green",
        value: "3",
    }
    let greenCard57: Cards = {
        color: "green",
        value: "3",
    }
    let greenCard58: Cards = {
        color: "green",
        value: "4",
    }
    let greenCard59: Cards = {
        color: "green",
        value: "4",
    }
    let greenCard60: Cards = {
        color: "green",
        value: "5",
    }
    let greenCard61: Cards = {
        color: "green",
        value: "5",
    }
    let greenCard62: Cards = {
        color: "green",
        value: "6",
    }
    let greenCard63: Cards = {
        color: "green",
        value: "6",
    }
    let greenCard64: Cards = {
        color: "green",
        value: "7",
    }
    let greenCard65: Cards = {
        color: "green",
        value: "7",
    }
    let greenCard66: Cards = {
        color: "green",
        value: "8",
    }
    let greenCard67: Cards = {
        color: "green",
        value: "8",
    }
    let greenCard68: Cards = {
        color: "green",
        value: "9",
    }
    let greenCard69: Cards = {
        color: "green",
        value: "9",
    }
    let greenCard70: Cards = {
        color: "green",
        value: "Aussetzen",

    }
    let greenCard71: Cards = {
        color: "green",
        value: "Aussetzen",
    }
    let greenCard72: Cards = {
        color: "green",
        value: "Richtungswechsel",
    }
    let greenCard73: Cards = {
        color: "green",
        value: "Richtungswechsel",
    }
    let greenCard74: Cards = {
        color: "green",
        value: "+2",
    }
    let greenCard75: Cards = {
        color: "green",
        value: "+2",
    }
    let yellowCard76: Cards = {
        color: "yellow",
        value: "0",
    }
    let yellowCard77: Cards = {
        color: "yellow",
        value: "1",
    }
    let yellowCard78: Cards = {
        color: "yellow",
        value: "1",
    }
    let yellowCard79: Cards = {
        color: "yellow",
        value: "2",
    }
    let yellowCard80: Cards = {
        color: "yellow",
        value: "2",
    }
    let yellowCard81: Cards = {
        color: "yellow",
        value: "3",
    }
    let yellowCard82: Cards = {
        color: "yellow",
        value: "3",
    }
    let yellowCard83: Cards = {
        color: "yellow",
        value: "4",
    }
    let yellowCard84: Cards = {
        color: "yellow",
        value: "4",
    }
    let yellowCard85: Cards = {
        color: "yellow",
        value: "5",
    }
    let yellowCard86: Cards = {
        color: "yellow",
        value: "5",
    }
    let yellowCard87: Cards = {
        color: "yellow",
        value: "6",
    }
    let yellowCard88: Cards = {
        color: "yellow",
        value: "6",
    }
    let yellowCard89: Cards = {
        color: "yellow",
        value: "7",
    }
    let yellowCard90: Cards = {
        color: "yellow",
        value: "7",
    }
    let yellowCard91: Cards = {
        color: "yellow",
        value: "8",
    }
    let yellowCard92: Cards = {
        color: "yellow",
        value: "8",
    }
    let yellowCard93: Cards = {
        color: "yellow",
        value: "9",
    }
    let yellowCard94: Cards = {
        color: "yellow",
        value: "9",
    }
    let yellowCard95: Cards = {
        color: "yellow",
        value: "Aussetzen",
    }
    let yellowCard96: Cards = {
        color: "yellow",
        value: "Aussetzen",
    }
    let yellowCard97: Cards = {
        color: "yellow",
        value: "Richtungswechsel",
    }
    let yellowCard98: Cards = {
        color: "yellow",
        value: "Richtungswechsel",
    }
    let yellowCard99: Cards = {
        color: "yellow",
        value: "+2",
    }
    let yellowCard100: Cards = {
        color: "yellow",
        value: "+2",
    }
    let blackCard101: Cards = {
        color: "black",
        value: "+4",
    }

    let blackCard102: Cards = {
        color: "black",
        value: "+4",
    }
    let blackCard103: Cards = {
        color: "black",
        value: "+4",
    }
    let blackCard104: Cards = {
        color: "black",
        value: "+4",
    }
    let blackCard105: Cards = {
        color: "black",
        value: "Farbwahl",
    }
    let blackCard106: Cards = {
        color: "black",
        value: "Farbwahl",
    }
    let blackCard107: Cards = {
        color: "black",
        value: "Farbwahl",
    }
    let blackCard108: Cards = {
        color: "black",
        value: "Farbwahl",
    }
    let deck: Cards[] = [redCard1, redCard2, redCard3, redCard4, redCard5, redCard6, redCard7, redCard8, redCard9, redCard10, redCard11, redCard12, redCard13, redCard14, redCard15, redCard16, redCard17, redCard18, redCard19, redCard20, redCard21, redCard22, redCard23, redCard24, redCard25, blueCard26, blueCard27, blueCard28, blueCard29, blueCard30, blueCard31, blueCard32, blueCard33, blueCard34, blueCard35, blueCard36, blueCard37, blueCard38, blueCard39, blueCard40, blueCard41, blueCard42, blueCard43, blueCard44, blueCard45, blueCard46, blueCard47, blueCard48, blueCard49, blueCard50, greenCard51, greenCard52, greenCard53, greenCard54, greenCard55, greenCard56, greenCard57, greenCard58, greenCard59, greenCard60, greenCard61, greenCard62, greenCard63, greenCard64, greenCard65, greenCard66, greenCard67, greenCard68, greenCard69, greenCard70, greenCard71, greenCard72, greenCard73, greenCard74, greenCard75, yellowCard76, yellowCard77, yellowCard78, yellowCard79, yellowCard80, yellowCard81, yellowCard82, yellowCard83, yellowCard84, yellowCard85, yellowCard86, yellowCard87, yellowCard88, yellowCard89, yellowCard90, yellowCard91, yellowCard92, yellowCard93, yellowCard94, yellowCard95, yellowCard96, yellowCard97, yellowCard98, yellowCard99, yellowCard100, blackCard101, blackCard102, blackCard103, blackCard104, blackCard105, blackCard106, blackCard107, blackCard108]
    let hand: Cards[] = [];
    let stackCards:Cards[]= [];



    function giveRandomNumber(l: number) {
        return Math.floor(Math.random() * Math.floor(l));
    }
    function placeDiv(_color: string, _value: string, n: number) {
        let div: HTMLDivElement = document.createElement("div");
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
        document.getElementById("Aufnahme").addEventListener("click",pull);
        document.addEventListener("keydown",pull2);
        document.getElementById("main").addEventListener("click", removeCard);
        let d: string = prompt("Bitte gewuenschte Handkartenanzahl eingeben");
        let numberOfCards: number;
        numberOfCards = Number(d);
        
        for (let i: number = 0; i < numberOfCards; i++) {
            console.log("has");
            let q: number = giveRandomNumber(deck.length);
            placeDiv(deck[q].color, deck[q].value, i);
            let handCard: Cards = deck.splice(q, 1)[0];
            hand.push(handCard);
        }
    }

    function sortCards() {
        hand.sort(function(a, b) {
            var nameA = a.color.toUpperCase();
            var nameB = b.color.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            console.log(hand);
            // namen müssen gleich sein
            return 0;
        });
        deleteCards();
        for (let i:number=0; i<hand.length; i++){
            placeDiv(hand[i].color, hand[i].value, i)
            }
    }
    function deleteCards() {
        let node: HTMLElement = document.getElementById("main");
        node.innerHTML = "";
    }
    function pull(){
        deleteCards();
        for (let i:number=0; i<1; i++){
            let q: number = giveRandomNumber(deck.length);
            let handCard: Cards = deck.splice(q, 1)[0];
            hand.push(handCard);
            }
         for (let i:number=0; i<hand.length; i++){
            placeDiv(hand[i].color, hand[i].value, i)
            }
        }
    function pull2(_event:KeyboardEvent){
        var keyCode:number=_event.keyCode;
        if (keyCode == 32) {
            pull();
}
        }
    function removeCard(_event:MouseEvent){
        let main: HTMLElement = document.getElementById("main");
        let domCard: HTMLElement = <HTMLElement>_event.target;
        if (domCard != main){
            let index:number;
            let domAttribute: string=domCard.getAttribute("id");
            domAttribute = domAttribute.substr(5);
            index = parseInt(domAttribute);
            let pulledCard: Cards = hand.splice(index, 1)[0];
            stackCards.push(pulledCard);
            deleteCards();
            deleteStack();
            for (let i:number=0; i<hand.length; i++){
            placeDiv(hand[i].color, hand[i].value, i)
            }
            for (let i: number=0;i<stackCards.length;i++){
                placeStack(stackCards[i].color, stackCards[i].value, i)
                }
        }
        }
    function deleteStack(){
         let node: HTMLElement = document.getElementById("Ablage");
        node.innerHTML = "";
        }
    function placeStack(_color: string, _value: string, n: number) {
        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("id", "stack" + n);
        div.setAttribute("class","Stack");
        document.getElementById("Ablage").appendChild(div);
        document.getElementById("stack" + n).innerHTML += _value;
        let s = div.style;
        s.backgroundColor=_color;
        
        }
    }