/*
Aufgabe:6
Name: Julia Herr
Matrikel: 259568
Datum: 02.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    document.addEventListener("DOMContentLoaded", init);
    function changeListener(_event) {
        let fieldset = document.getElementById("f1");
        fieldset.addEventListener("change", handleChange);
    }
    let priceTree = 0;
    let priceTreeStands = 0;
    let priceService = 0;
    let adress = "";
    function fillFieldset() {
        let node = document.getElementById("f1");
        let childNodeHTML;
        childNodeHTML = "<h3>Baum</h3>";
        childNodeHTML += "<select name='Baum' id='trees'>";
        for (var i = 0; i < Aufgabe5.trees.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.trees[i].typ + " " + Aufgabe5.trees[i].price + " Euro'>" + Aufgabe5.trees[i].typ + " " + Aufgabe5.trees[i].price + " Euro</option title='" + Aufgabe5.trees[i].typ + "' + price='" + Aufgabe5.trees[i].price + "' description='Baum'/>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Christbaumstaender</h3>";
        childNodeHTML += "<select name='Christbaumstaender' id='treeStands'>";
        for (var i = 0; i < Aufgabe5.treeStands.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.treeStands[i].typ + " " + Aufgabe5.treeStands[i].price + " Euro'>" + Aufgabe5.treeStands[i].typ + " " + Aufgabe5.treeStands[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Christbaumkugeln</h3>";
        for (let i = 0; i < Aufgabe5.christmasOrnaments.length; i++) {
            childNodeHTML += Aufgabe5.christmasOrnaments[i].typ + Aufgabe5.christmasOrnaments[i].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='COAmounts" + i + "' name='Kugeln' step='1' min='0' max='50' value='0' title='" + Aufgabe5.christmasOrnaments[i].typ + "' price='" + Aufgabe5.christmasOrnaments[i].price + "' description='Christbaumkugeln'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (let i = 0; i < Aufgabe5.tinsel.length; i++) {
            childNodeHTML += Aufgabe5.tinsel[i].typ + Aufgabe5.tinsel[i].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='tinselAmounts" + i + "' name='Lametta' step='1' min='0' max='50' value='0' title='" + Aufgabe5.tinsel[i].typ + "' price='" + Aufgabe5.tinsel[i].price + "'description='Lametta'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Kerzen</h3>";
        for (let i = 0; i < Aufgabe5.candles.length; i++) {
            childNodeHTML += Aufgabe5.candles[i].typ + Aufgabe5.candles[i].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='candlesAmounts" + i + "' name='Kerzen' step='1' min='0' max='50' value='0' title='" + Aufgabe5.candles[i].typ + "' price='" + Aufgabe5.candles[i].price + "'description='Kerzen'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Lieferoptionen' id='ship'>";
        for (var i = 0; i < Aufgabe5.options.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.options[i].typ + " " + Aufgabe5.options[i].price + " Euro'>" + Aufgabe5.options[i].typ + " " + Aufgabe5.options[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Adresse' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        let articles = document.getElementsByTagName("input");
        let div = document.getElementById("div");
        let section = document.getElementById("section");
        section.innerHTML = "";
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            let section = document.getElementById("section");
            let p = document.createElement("p");
            let articleName = article.getAttribute("title");
            let articlePrice = Number(article.getAttribute("price"));
            let articleDescription = article.getAttribute("description");
            let articleAmount = parseInt(article.getAttribute("value"));
            let eventValue = Number(target.value);
            target.setAttribute("value", eventValue.toFixed());
            let articleValue = Number(article.getAttribute("value"));
            p.setAttribute("price", (articlePrice * articleValue).toString());
            if (articleValue > 0) {
                p.innerText = articleDescription + ": " + articleValue + "* " + articleName + " " + articlePrice * articleValue + " Euro";
            }
            section.appendChild(p);
            if (target.id == "trees") {
                let node = document.getElementById("tree");
                let value = target.value;
                let priceIndex = parseInt(value.substr(0, 1));
                priceTree = Aufgabe5.trees[priceIndex].price;
                let childNodeHTML;
                childNodeHTML = "";
                childNodeHTML += "<a>";
                childNodeHTML += " " + value.substr(1);
                childNodeHTML += "</a>";
                node.innerHTML = childNodeHTML;
            }
            if (target.id == "treeStands") {
                let node = document.getElementById("treeStand");
                let value = target.value;
                let priceIndex = parseInt(value.substr(0, 1));
                priceTreeStands = Aufgabe5.treeStands[priceIndex].price;
                let childNodeHTML;
                childNodeHTML = "";
                childNodeHTML += "<a>";
                childNodeHTML += " " + value.substr(1);
                childNodeHTML += "</a>";
                node.innerHTML = childNodeHTML;
            }
            if (target.id == "ship") {
                let node = document.getElementById("shipping");
                let value = target.value;
                let priceIndex = parseInt(value.substr(0, 1));
                priceService = Aufgabe5.options[priceIndex].price;
                console.log(priceService);
                let childNodeHTML;
                childNodeHTML = "";
                childNodeHTML += "<a>";
                childNodeHTML += " " + value.substr(1);
                childNodeHTML += "</a>";
                node.innerHTML = childNodeHTML;
            }
        }
        if (target.id == "ad") {
            let node = document.getElementById("adress");
            adress = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a price='0'>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        summarizeTotalPrice();
    }
    function summarizeTotalPrice() {
        let element = document.getElementById("section");
        let price = 0;
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