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
        var fieldset = document.getElementById("f1");
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
        childNodeHTML += "<select name='Select' id='trees'>";
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
        let target = _event.target;
        if (target.id == "trees") {
            let node = document.getElementById("tree");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTree = Aufgabe4.trees[priceIndex].price;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.name == "Radiogroup") {
            let node = document.getElementById("holder");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTreeStands = Aufgabe4.treeStands[priceIndex].price;
            console.log(priceTreeStands);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "kugeln") {
            let node = document.getElementById("christmasOrnaments");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceChristmasOrnaments = Aufgabe4.christmasOrnaments[priceIndex].price;
            console.log(priceChristmasOrnaments);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge1") {
            let node = document.getElementById("ballMenge");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfChristmasOrnaments = numIndex;
            console.log(numberOfChristmasOrnaments);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "lametten") {
            let node = document.getElementById("lametta");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceTinsel = Aufgabe4.tinsel[priceIndex].price;
            console.log(priceTinsel);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge2") {
            let node = document.getElementById("lamettaMenge");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfTinsel = numIndex;
            console.log(numberOfTinsel);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "candles") {
            let node = document.getElementById("candle");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceCandles = Aufgabe4.candles[priceIndex].price;
            console.log(priceCandles);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge3") {
            let node = document.getElementById("candleMenge");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            numberOfCandles = numIndex;
            console.log(numberOfCandles);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "ship") {
            let node = document.getElementById("shipping");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            priceService = Aufgabe4.options[priceIndex].price;
            console.log(priceService);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "ad") {
            let node = document.getElementById("adress");
            adress = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let node = document.getElementById("price");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + priceTreeStands + (priceChristmasOrnaments * numberOfChristmasOrnaments) + (priceTinsel * numberOfTinsel) + (priceCandles * numberOfCandles) + priceService);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    function checkCheckout(_event) {
        if (adress == "" || priceTree == 0 || priceTreeStands == 0 || priceChristmasOrnaments == 0 || priceTinsel == 0 || priceCandles == 0 || priceService == 0 || numberOfChristmasOrnaments == 0 || numberOfTinsel == 0 || numberOfCandles == 0) {
            document.getElementById("missing").innerHTML = "Bitte fehlende Felder ausfuellen";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=A4.js.map