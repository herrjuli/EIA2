/*
Aufgabe:4
Name: Julia Herr
Matrikel: 259568
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe4;
(function (Aufgabe4) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    function changeListener(_event) {
        var fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    var priceTree = 0;
    var priceTreeStands = 0;
    var priceCandles = 0;
    var priceChristmasOrnaments = 0;
    var priceTinsel = 0;
    var priceService = 0;
    var numberOfCandles = 0;
    var numberOfChristmasOrnaments = 0;
    var numberOfTinsel = 0;
    var adress = "";
    function fillFieldset() {
        var node = document.getElementById("f1");
        document.getElementById("button").addEventListener("click", checkCheckout);
        var childNodeHTML;
        childNodeHTML = "<h3>Baum</h3>";
        childNodeHTML += "<select name='Select' id='tree'>";
        for (var i = 0; i < Aufgabe4.trees.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.trees[i].typ + " " + Aufgabe4.trees[i].price + " Euro'>" + Aufgabe4.trees[i].typ + " " + Aufgabe4.trees[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Christbaumstaender</h3>";
        for (var i = 0; i < Aufgabe4.treeStands.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + Aufgabe4.treeStands[i].typ + " " + Aufgabe4.treeStands[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe4.treeStands[i].typ + " " + Aufgabe4.treeStands[i].price + " Euro</label>";
        }
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Christbaumkugeln</h3>";
        childNodeHTML += "<select name='Select' id='kugeln'>";
        for (var i = 0; i < Aufgabe4.christmasOrnaments.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.christmasOrnaments[i].typ + " " + Aufgabe4.christmasOrnaments[i].price + " Euro'>" + Aufgabe4.christmasOrnaments[i].typ + " " + Aufgabe4.christmasOrnaments[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Anzahl in Stueck</h3>";
        childNodeHTML += "<select name='Select' id='Menge1'>";
        for (var i = 0; i < 51; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='lametten'>";
        for (var i = 0; i < Aufgabe4.tinsel.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.tinsel[i].typ + " " + Aufgabe4.tinsel[i].price + " Euro'>" + Aufgabe4.tinsel[i].typ + " " + Aufgabe4.tinsel[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Laenge in Meter</h3>";
        childNodeHTML += "<select name='Select' id='Menge2'>";
        for (var i = 0; i < 6; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (var i = 0; i < Aufgabe4.candles.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.candles[i].typ + " " + Aufgabe4.candles[i].price + " Euro'>" + Aufgabe4.candles[i].typ + " " + Aufgabe4.candles[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Anzahl in Stueck</h3>";
        childNodeHTML += "<select name='Select' id='Menge3'>";
        for (var i = 0; i < 21; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (var i = 0; i < Aufgabe4.options.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.options[i].typ + " " + Aufgabe4.options[i].price + " Euro'>" + Aufgabe4.options[i].typ + " " + Aufgabe4.options[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        var target = _event.target;
        if (target.id == "trees") {
            var node_1 = document.getElementById("tree");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTree = Aufgabe4.trees[priceIndex].price;
            var childNodeHTML_1;
            childNodeHTML_1 = "";
            childNodeHTML_1 += "<a>";
            childNodeHTML_1 += " " + value.substr(1);
            childNodeHTML_1 += "</a>";
            node_1.innerHTML = childNodeHTML_1;
        }
        if (target.name == "Radiogroup") {
            var node_2 = document.getElementById("holder");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTreeStands = Aufgabe4.treeStands[priceIndex].price;
            console.log(priceTreeStands);
            var childNodeHTML_2;
            childNodeHTML_2 = "";
            childNodeHTML_2 += "<a>";
            childNodeHTML_2 += " " + value.substr(1);
            childNodeHTML_2 += "</a>";
            node_2.innerHTML = childNodeHTML_2;
        }
        if (target.id == "kugeln") {
            var node_3 = document.getElementById("ball");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceChristmasOrnaments = Aufgabe4.christmasOrnaments[priceIndex].price;
            console.log(priceChristmasOrnaments);
            var childNodeHTML_3;
            childNodeHTML_3 = "";
            childNodeHTML_3 += "<a>";
            childNodeHTML_3 += " " + value.substr(1);
            childNodeHTML_3 += "</a>";
            node_3.innerHTML = childNodeHTML_3;
        }
        if (target.id == "Menge1") {
            var node_4 = document.getElementById("ballMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfChristmasOrnaments = numIndex;
            console.log(numberOfChristmasOrnaments);
            var childNodeHTML_4;
            childNodeHTML_4 = "";
            childNodeHTML_4 += "<a>";
            childNodeHTML_4 += " " + target.value;
            childNodeHTML_4 += "</a>";
            node_4.innerHTML = childNodeHTML_4;
        }
        if (target.id == "lametten") {
            var node_5 = document.getElementById("lametta");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceTinsel = Aufgabe4.tinsel[priceIndex].price;
            console.log(priceTinsel);
            var childNodeHTML_5;
            childNodeHTML_5 = "";
            childNodeHTML_5 += "<a>";
            childNodeHTML_5 += " " + value.substr(1);
            childNodeHTML_5 += "</a>";
            node_5.innerHTML = childNodeHTML_5;
        }
        if (target.id == "Menge2") {
            var node_6 = document.getElementById("lamettaMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfTinsel = numIndex;
            console.log(numberOfTinsel);
            var childNodeHTML_6;
            childNodeHTML_6 = "";
            childNodeHTML_6 += "<a>";
            childNodeHTML_6 += " " + target.value;
            childNodeHTML_6 += "</a>";
            node_6.innerHTML = childNodeHTML_6;
        }
        //Kerzen
        if (target.id == "candles") {
            var node_7 = document.getElementById("candle");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceCandles = Aufgabe4.candles[priceIndex].price;
            console.log(priceCandles);
            var childNodeHTML_7;
            childNodeHTML_7 = "";
            childNodeHTML_7 += "<a>";
            childNodeHTML_7 += " " + value.substr(1);
            childNodeHTML_7 += "</a>";
            node_7.innerHTML = childNodeHTML_7;
        }
        if (target.id == "Menge3") {
            var node_8 = document.getElementById("candleMenge");
            var value = target.value;
            var numIndex = parseInt(value.substr(1, 2));
            numberOfCandles = numIndex;
            console.log(numberOfCandles);
            var childNodeHTML_8;
            childNodeHTML_8 = "";
            childNodeHTML_8 += "<a>";
            childNodeHTML_8 += " " + target.value;
            childNodeHTML_8 += "</a>";
            node_8.innerHTML = childNodeHTML_8;
        }
        if (target.id == "ship") {
            var node_9 = document.getElementById("shipping");
            var value = target.value;
            var priceIndex = parseInt(value.substr(0, 1));
            priceService = Aufgabe4.options[priceIndex].price;
            console.log(priceService);
            var childNodeHTML_9;
            childNodeHTML_9 = "";
            childNodeHTML_9 += "<a>";
            childNodeHTML_9 += " " + value.substr(1);
            childNodeHTML_9 += "</a>";
            node_9.innerHTML = childNodeHTML_9;
        }
        if (target.id == "ad") {
            var node_10 = document.getElementById("adress");
            adress = target.value;
            var childNodeHTML_10;
            childNodeHTML_10 = "";
            childNodeHTML_10 += "<a>";
            childNodeHTML_10 += " " + target.value;
            childNodeHTML_10 += "</a>";
            node_10.innerHTML = childNodeHTML_10;
        }
        var node = document.getElementById("price");
        var childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + priceTreeStands + (priceChristmasOrnaments * numberOfChristmasOrnaments) + (priceTinsel * numberOfTinsel) + (priceCandles * numberOfCandles) + priceService);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    function checkCheckout(_event) {
        if (adress == "" || priceTree == 0 || priceTreeStands == 0 || priceChristmasOrnaments == 0 || priceTinsel == 0 || priceCandles == 0 || priceService == 0 || numberOfChristmasOrnaments == 0 || numberOfTinsel == 0 || numberOfCandles == 0) {
            document.getElementById("missing").innerHTML = "fehlende Angaben";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=A4.js.map