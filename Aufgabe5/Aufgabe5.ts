/*
Aufgabe:6
Name: Julia Herr
Matrikel: 259568
Datum: 02.12.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/




namespace Aufgabe5 {

    document.addEventListener("DOMContentLoaded", fillFieldset);
    document.addEventListener("DOMContentLoaded", changeListener);
    document.addEventListener("DOMContentLoaded", init);


    function changeListener(_event) {
        let fieldset = document.getElementById("f1");
        fieldset.addEventListener("change", handleChange);
    }
    let priceTree: number = 0;
     let priceTreeStands:number = 0;
    let priceService: number = 0;
    let adress = "";
    function fillFieldset() {
        let node = document.getElementById("f1");
        let childNodeHTML;
        childNodeHTML = "<h3>Baum</h3>";
        childNodeHTML += "<select name='Baum' id='trees'>";
        for (var i = 0; i < trees.length; i++) {
            childNodeHTML += "<option value='" + i + trees[i].typ + " " + trees[i].price + " Euro'>" + trees[i].typ + " " + trees[i].price + " Euro</option title='" + trees[i].typ + "' + price='" + trees[i].price + "' description='Baum'/>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h3>Christbaumstaender</h3>";
        childNodeHTML += "<select name='Christbaumstaender' id='treeStands'>";
        for (var i = 0; i < treeStands.length; i++) {
            childNodeHTML += "<option value='" + i + treeStands[i].typ + " " + treeStands[i].price + " Euro'>" + treeStands[i].typ + " " + treeStands[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Christbaumkugeln</h3>";
        for (let i: number = 0; i < christmasOrnaments.length; i++) {
            childNodeHTML += christmasOrnaments[i].typ + christmasOrnaments[i].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='COAmounts" + i + "' name='Kugeln' step='1' min='0' max='50' value='0' title='" + christmasOrnaments[i].typ + "' price='" + christmasOrnaments[i].price + "' description='Christbaumkugeln'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lametta</h3>";
        for (let i: number = 0; i < tinsel.length; i++) {
            childNodeHTML += tinsel[i].typ + tinsel[i].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='tinselAmounts" + i + "' name='Lametta' step='1' min='0' max='50' value='0' title='" + tinsel[i].typ + "' price='" + tinsel[i].price + "'description='Lametta'/>";
            childNodeHTML += "<br>";
            continue;
        }


        childNodeHTML += "<h3>Kerzen</h3>";
        for (let i: number = 0; i < candles.length; i++) {
            childNodeHTML += candles[i].typ + candles[i].price + " " + "Euro";
            childNodeHTML += "<input type='number' id='candlesAmounts" + i + "' name='Kerzen' step='1' min='0' max='50' value='0' title='" + candles[i].typ + "' price='" + candles[i].price + "'description='Kerzen'/>";
            childNodeHTML += "<br>";
            continue;
        }
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Lieferoptionen' id='ship'>";
        for (var i = 0; i < options.length; i++) {
            childNodeHTML += "<option value='" + i + options[i].typ + " " + options[i].price + " Euro'>" + options[i].typ + " " + options[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Adresse' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }

    function handleChange(_event: Event) {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let div: HTMLElement = document.getElementById("div")
        let section: HTMLElement = document.getElementById("section")
        section.innerHTML = ""
        for (let i: number = 0; i < articles.length; i++) {
            let article: HTMLInputElement = articles[i];

            let section: HTMLElement = document.getElementById("section")
            let p: HTMLElement = document.createElement("p");
            let articleName: string = article.getAttribute("title");
            let articlePrice: number = Number(article.getAttribute("price"));
            let articleDescription: string = article.getAttribute("description");
            
            let articleAmount: number = parseInt(article.getAttribute("value"));
           
            let eventValue: number = Number(target.value);
            target.setAttribute("value", eventValue.toFixed());
            let articleValue: number = Number(article.getAttribute("value"));
            p.setAttribute("price", (articlePrice * articleValue).toString());
            if (articleValue > 0) {
                p.innerText = articleDescription + ": " + articleValue + "* " + articleName + " " + articlePrice * articleValue + " Euro";

            }
            
            section.appendChild(p);

            if (target.id == "trees") {
                let node: HTMLElement = document.getElementById("tree");
                let value: string = target.value;
                let priceIndex: number = parseInt(value.substr(0, 1));
                priceTree = trees[priceIndex].price

                let childNodeHTML: string;

                childNodeHTML = "";
                childNodeHTML += "<a>";
                childNodeHTML += " " + value.substr(1);
                childNodeHTML += "</a>";

                node.innerHTML = childNodeHTML;
            }
   if (target.id == "treeStands") {
            let node: HTMLElement = document.getElementById("treeStand")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTreeStands = treeStands[priceIndex].price
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
      if (target.id == "ship") {
            let node: HTMLElement = document.getElementById("shipping")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceService = options[priceIndex].price
            console.log(priceService)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
            
        }
        if (target.id == "ad") {
                let node: HTMLElement = document.getElementById("adress");
                
                adress = target.value;
                let childNodeHTML: string;

                childNodeHTML = "";
                childNodeHTML += "<a price='0'>";
                childNodeHTML += " " + target.value;
                childNodeHTML += "</a>";

                node.innerHTML = childNodeHTML;
            }
        summarizeTotalPrice();
    }
    function summarizeTotalPrice() {
        let element: HTMLElement = document.getElementById("section");
        let price: number = 0;
        console.log(element.childNodes);
        for (var i = 0; i < element.childNodes.length -1; i++) {
            var article: any= element.childNodes[i];
            var articlePrice = Number(article.getAttribute("price"));
            price += articlePrice;
            console.log(articlePrice);
        }
        var HTML;
        var node = document.getElementById("price");
        HTML = " ";
        HTML += (priceTree + priceService + price +priceTreeStands);
        HTML += " Euro";
        node.innerHTML = HTML;
    }

    function init(_event: Event) {
        document.getElementById("button").addEventListener("click", checkCheckout);
    }
    function checkCheckout(_event: Event): void {
        if (adress == "" || priceTree == 0 || priceService == 0) {
            document.getElementById("missing").innerHTML = "Bitte fehlende Felder ausfuellen!";
        }

        else {

            document.getElementById("missing").innerHTML = "";
        }
    }
}



