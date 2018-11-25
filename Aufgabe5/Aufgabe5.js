/*
Aufgabe:5
Name: Julia Herr
Matrikel: 259568
Datum: 25.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    document.addEventListener("DOMContentLoaded", init);
    function changeListener(_event) {
        var fieldset = document.getElementById("f1");
        fieldset.addEventListener("change", handleChange);
    }
    var priceTree = 0;
    var priceTreeStands = 0;
    var priceService = 0;
    var adress = "";
    function fillFieldset() {
        var node = document.getElementById("f1");
        var childNodeHTML;
        childNodeHTML = "<h3>Baum</h3>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (var i = 0; i < Aufgabe5.trees.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.trees[i].typ + " " + Aufgabe5.trees[i].price + " Euro'>" + Aufgabe5.trees[i].typ + " " + Aufgabe5.trees[i].price + " Euro</option title='" + Aufgabe5.trees[i].typ + "' + price='" + Aufgabe5.trees[i].price + "' description='Baum'/>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Christbaumstaender</h3>";
        childNodeHTML += "<select name='Select' id='treeStands'>";
        for (var i = 0; i < Aufgabe5.treeStands.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.treeStands[i].typ + " " + Aufgabe5.treeStands[i].price + " Euro'>" + Aufgabe5.treeStands[i].typ + " " + Aufgabe5.treeStands[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Christbaumkugeln</h3>";
        for (var i_1 = 0; i_1 < Aufgabe5.christmasOrnaments.length; i_1++) {
            childNodeHTML += Aufgabe5.christmasOrnaments[i_1].typ + Aufgabe5.christmasOrnaments[i_1].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='COAmounts" + i_1 + "' name='Stepper' step='1' min='0' max='50' value='0' title='" + Aufgabe5.christmasOrnaments[i_1].typ + "' price='" + Aufgabe5.christmasOrnaments[i_1].price + "' description='Christbaumkugeln'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (var i_2 = 0; i_2 < Aufgabe5.tinsel.length; i_2++) {
            childNodeHTML += Aufgabe5.tinsel[i_2].typ + Aufgabe5.tinsel[i_2].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='tinselAmounts" + i_2 + "' name='Stepper' step='1' min='0' max='50' value='0' title='" + Aufgabe5.tinsel[i_2].typ + "' price='" + Aufgabe5.tinsel[i_2].price + "'description='Lametta'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Kerzen</h3>";
        for (var i_3 = 0; i_3 < Aufgabe5.candles.length; i_3++) {
            childNodeHTML += Aufgabe5.candles[i_3].typ + Aufgabe5.candles[i_3].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='candlesAmounts" + i_3 + "' name='Stepper' step='1' min='0' max='50' value='0' title='" + Aufgabe5.candles[i_3].typ + "' price='" + Aufgabe5.candles[i_3].price + "'description='Kerzen'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (var i = 0; i < Aufgabe5.options.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.options[i].typ + " " + Aufgabe5.options[i].price + " Euro'>" + Aufgabe5.options[i].typ + " " + Aufgabe5.options[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        var target = _event.target;
        var articles = document.getElementsByTagName("input");
        var div = document.getElementById("div");
        var section = document.getElementById("section");
        section.innerHTML = "";
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            var section_1 = document.getElementById("section");
            var p = document.createElement("p");
            var articleName = article.getAttribute("title");
            var articlePrice = Number(article.getAttribute("price"));
            var articleDescription = article.getAttribute("description");
            var articleAmount = parseInt(article.getAttribute("value"));
            var eventValue = Number(target.value);
            target.setAttribute("value", eventValue.toFixed());
            var articleValue = Number(article.getAttribute("value"));
            p.setAttribute("price", (articlePrice * articleValue).toString());
            if (articleValue > 0) {
                p.innerText = articleDescription + ": " + articleValue + "* " + articleName + " " + articlePrice * articleValue + " Euro";
            }
            section_1.appendChild(p);
            if (target.id == "trees") {
                var node = document.getElementById("tree");
                var value = target.value;
                var priceIndex = parseInt(value.substr(0, 1));
                priceTree = Aufgabe5.trees[priceIndex].price;
                var childNodeHTML = void 0;
                childNodeHTML = "";
                childNodeHTML += "<a>";
                childNodeHTML += " " + value.substr(1);
                childNodeHTML += "</a>";
                node.innerHTML = childNodeHTML;
            }
            if (target.id == "treeStands") {
                var node = document.getElementById("treeStand");
                var value = target.value;
                var priceIndex = parseInt(value.substr(0, 1));
                priceTreeStands = Aufgabe5.treeStands[priceIndex].price;
                var childNodeHTML = void 0;
                childNodeHTML = "";
                childNodeHTML += "<a>";
                childNodeHTML += " " + value.substr(1);
                childNodeHTML += "</a>";
                node.innerHTML = childNodeHTML;
            }
            if (target.id == "ship") {
                var node = document.getElementById("shipping");
                var value = target.value;
                var priceIndex = parseInt(value.substr(0, 1));
                priceService = Aufgabe5.options[priceIndex].price;
                console.log(priceService);
                var childNodeHTML = void 0;
                childNodeHTML = "";
                childNodeHTML += "<a>";
                childNodeHTML += " " + value.substr(1);
                childNodeHTML += "</a>";
                node.innerHTML = childNodeHTML;
            }
        }
        if (target.id == "ad") {
            var node = document.getElementById("adress");
            adress = target.value;
            var childNodeHTML = void 0;
            childNodeHTML = "";
            childNodeHTML += "<a price='0'>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        summarizeTotalPrice();
    }
    function summarizeTotalPrice() {
        var element = document.getElementById("section");
        var price = 0;
        console.log(element.childNodes);
        for (var i = 0; i < element.childNodes.length - 1; i++) {
            var article = element.childNodes[i];
            var articlePrice = Number(article.getAttribute("price"));
            price += articlePrice;
            console.log(articlePrice);
        }
        var HTML;
        var node = document.getElementById("price");
        HTML = " ";
        HTML += (priceTree + priceService + price + priceTreeStands);
        HTML += " Euro";
        node.innerHTML = HTML;
    }
    function init(_event) {
        document.getElementById("button").addEventListener("click", checkCheckout);
    }
    function checkCheckout(_event) {
        if (adress == "" || priceTree == 0 || priceService == 0) {
            document.getElementById("missing").innerHTML = "Bitte fehlende Felder ausfuellen!";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map