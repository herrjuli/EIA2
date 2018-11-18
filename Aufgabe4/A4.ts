/*
Aufgabe:4
Name: Julia Herr
Matrikel: 259568
Datum: 18.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/





namespace Aufgabe4 {

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
        for (var i = 0; i < trees.length; i++) {
            childNodeHTML += "<option value='" + i + trees[i].typ + " " + trees[i].price + " Euro'>" + trees[i].typ + " " + trees[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h3>Christbaumstaender</h3>";
        for (var i = 0; i < treeStands.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + treeStands[i].typ + " " + treeStands[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + treeStands[i].typ + " " + treeStands[i].price + " Euro</label>";
        }
        childNodeHTML += "<hr>";

        childNodeHTML += "<h3>Christbaumkugeln</h3>";
        childNodeHTML += "<select name='Select' id='kugeln'>";
        for (var i = 0; i < christmasOrnaments.length; i++) {
            childNodeHTML += "<option value='" + i + christmasOrnaments[i].typ + " " + christmasOrnaments[i].price + " Euro'>" + christmasOrnaments[i].typ + " " + christmasOrnaments[i].price + " Euro</option>";
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
        for (var i = 0; i < tinsel.length; i++) {
            childNodeHTML += "<option value='" + i + tinsel[i].typ + " " + tinsel[i].price + " Euro'>" + tinsel[i].typ + " " + tinsel[i].price + " Euro</option>";
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
        for (var i = 0; i < candles.length; i++) {
            childNodeHTML += "<option value='" + i + candles[i].typ + " " + candles[i].price + " Euro'>" + candles[i].typ + " " + candles[i].price + " Euro</option>";
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
        for (var i = 0; i < options.length; i++) {
            childNodeHTML += "<option value='" + i + options[i].typ + " " + options[i].price + " Euro'>" + options[i].typ + " " + options[i].price + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='enter adress here' required/>";
        node.innerHTML += childNodeHTML;
    }

    function handleChange(_event: Event) {


        let target: HTMLInputElement = <HTMLInputElement>_event.target
        
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
        
        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("holder")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTreeStands = treeStands[priceIndex].price
            console.log(priceTreeStands)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        
        if (target.id == "kugeln") {
            let node: HTMLElement = document.getElementById("ball")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceChristmasOrnaments = christmasOrnaments[priceIndex].price
            console.log(priceChristmasOrnaments)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Menge1") {
            let node: HTMLElement = document.getElementById("ballMenge")
            let value: string = target.value;
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfChristmasOrnaments = numIndex;
            console.log(numberOfChristmasOrnaments)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "lametten") {
            let node: HTMLElement = document.getElementById("lametta")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceTinsel = tinsel[priceIndex].price
            console.log(priceTinsel)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Menge2") {
            let node: HTMLElement = document.getElementById("lamettaMenge")
            let value: string = target.value
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfTinsel = numIndex;
            console.log(numberOfTinsel)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Kerzen
        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("candle")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            priceCandles = candles[priceIndex].price
            console.log(priceCandles)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Menge3") {
            let node: HTMLElement = document.getElementById("candleMenge")
            let value: string = target.value
            let numIndex: number = parseInt(value.substr(1, 2));
            numberOfCandles = numIndex;
            console.log(numberOfCandles)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
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
       
        if (target.id == "ad") {
            let node: HTMLElement = document.getElementById("adress");
            adress = target.value;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        let node: HTMLElement = document.getElementById("price");
        let childNodeHTML: string;

        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (priceTree + priceTreeStands + (priceChristmasOrnaments * numberOfChristmasOrnaments) + (priceTinsel * numberOfTinsel) + (priceCandles * numberOfCandles) + priceService);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }

    function checkCheckout(_event: Event): void {
        if (adress == "" || priceTree == 0 || priceTreeStands == 0 || priceChristmasOrnaments == 0 || priceTinsel == 0 || priceCandles == 0 || priceService == 0 || numberOfChristmasOrnaments == 0 || numberOfTinsel == 0 || numberOfCandles == 0) {
            document.getElementById("missing").innerHTML = "fehlende Angaben";
        }

        else {

            document.getElementById("missing").innerHTML = "";
        }
        }
        }
    
        
    
    