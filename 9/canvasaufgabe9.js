var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawHill();
        drawSky();
        drawSun();
        drawClouds();
        drawClouds1();
        drawClouds2();
        drawClouds3();
        drawDriver();
        drawDriver1();
        drawKid();
        drawKid1();
        giveRandomNumbersForTrees();
        giveRandomNumberForSnowflakes();
    }
    //Hang
    function drawHill() {
        crc2.beginPath();
        crc2.moveTo(0, 102);
        crc2.lineTo(320, 102);
        crc2.strokeStyle = "#080809";
        crc2.lineWidth = 2;
        crc2.closePath();
        crc2.stroke();
    }
    //Himmel
    function drawSky() {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(320, 0);
        crc2.lineTo(320, 102);
        crc2.lineTo(0, 102);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.fillStyle = "#9cfcff";
        crc2.strokeStyle = "#9cfcff";
        crc2.fill();
        crc2.stroke();
    }
    //Sonne
    function drawSun() {
        crc2.beginPath();
        crc2.moveTo(185, 0);
        crc2.arc(185, 0, 20, 0, 180 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#e7fc00";
        crc2.fillStyle = "#e7fc00";
        crc2.fill();
        crc2.stroke();
    }
    //Wolken
    function drawClouds() {
        crc2.beginPath();
        crc2.moveTo(270, 28);
        crc2.lineTo(310, 28);
        crc2.arcTo(320, 38, 310, 48, 14);
        crc2.lineTo(270, 48);
        crc2.arcTo(260, 38, 270, 28, 10);
        crc2.closePath();
        crc2.strokeStyle = "#fefbfb";
        crc2.fillStyle = "#fefbfb";
        crc2.fill();
        crc2.stroke();
    }
    function drawClouds1() {
        crc2.beginPath();
        crc2.moveTo(158, 28);
        crc2.lineTo(198, 28);
        crc2.arcTo(208, 38, 198, 48, 14);
        crc2.lineTo(158, 48);
        crc2.arcTo(148, 38, 158, 28, 10);
        crc2.closePath();
        crc2.strokeStyle = "#fefbfb";
        crc2.fillStyle = "#fefbfb";
        crc2.fill();
        crc2.stroke();
    }
    function drawClouds2() {
        crc2.beginPath();
        crc2.moveTo(80, 28);
        crc2.lineTo(120, 28);
        crc2.arcTo(130, 38, 120, 48, 14);
        crc2.lineTo(80, 48);
        crc2.arcTo(70, 38, 80, 28, 10);
        crc2.closePath();
        crc2.strokeStyle = "#fefbfb";
        crc2.fillStyle = "#fefbfb";
        crc2.fill();
        crc2.stroke();
    }
    function drawClouds3() {
        crc2.beginPath();
        crc2.moveTo(18, 28);
        crc2.lineTo(58, 28);
        crc2.arcTo(68, 38, 58, 48, 14);
        crc2.lineTo(18, 48);
        crc2.arcTo(8, 38, 18, 28, 10);
        crc2.closePath();
        crc2.strokeStyle = "#fefbfb";
        crc2.fillStyle = "#fefbfb";
        crc2.fill();
        crc2.stroke();
    }
    //fahrendes M�nnchen 1
    function drawDriver() {
        crc2.beginPath();
        crc2.moveTo(79, 267);
        crc2.lineTo(79, 237);
        crc2.lineTo(79, 247);
        crc2.lineTo(99, 247);
        crc2.lineTo(99, 237);
        crc2.lineTo(99, 267);
        crc2.lineTo(99, 257);
        crc2.lineTo(79, 257);
        crc2.closePath();
        crc2.strokeStyle = "#633c1a";
        crc2.fillStyle = "#633c1a";
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(79, 257);
        crc2.lineTo(89, 247);
        crc2.lineTo(99, 257);
        crc2.lineTo(89, 247);
        crc2.lineTo(89, 237);
        crc2.lineTo(89, 240);
        crc2.lineTo(86, 242);
        crc2.lineTo(89, 249);
        crc2.lineTo(92, 242);
        crc2.lineTo(89, 239);
        crc2.lineTo(89, 237);
        crc2.arc(89, 232, 5, 0, 360);
        crc2.strokeStyle = "#48ff34";
        crc2.fillStyle = "#48ff34";
        crc2.fill();
        crc2.stroke();
    }
    //fahrendes M�nnchen 2
    function drawDriver1() {
        crc2.beginPath();
        crc2.moveTo(70, 346);
        crc2.lineTo(70, 316);
        crc2.lineTo(70, 326);
        crc2.lineTo(90, 326);
        crc2.lineTo(90, 316);
        crc2.lineTo(90, 346);
        crc2.lineTo(90, 336);
        crc2.lineTo(70, 336);
        crc2.closePath();
        crc2.strokeStyle = "#72147b";
        crc2.fillStyle = "#72147b";
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(70, 336);
        crc2.lineTo(80, 326);
        crc2.lineTo(90, 336);
        crc2.lineTo(80, 326);
        crc2.lineTo(80, 316);
        crc2.lineTo(80, 319);
        crc2.lineTo(77, 321);
        crc2.lineTo(80, 328);
        crc2.lineTo(83, 321);
        crc2.lineTo(80, 318);
        crc2.lineTo(80, 316);
        crc2.arc(80, 311, 5, 0, 360);
        crc2.strokeStyle = "#5f0012";
        crc2.fillStyle = "#5f0012";
        crc2.fill();
        crc2.stroke();
    }
    //ziehendes M�nnchen 1
    function drawKid() {
        crc2.beginPath();
        crc2.moveTo(195, 270);
        crc2.lineTo(195, 240);
        crc2.lineTo(195, 250);
        crc2.lineTo(215, 250);
        crc2.lineTo(215, 240);
        crc2.lineTo(215, 270);
        crc2.lineTo(215, 260);
        crc2.lineTo(195, 260);
        crc2.closePath();
        crc2.strokeStyle = "#ff2ce6";
        crc2.fillStyle = "#ff2ce6";
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(205, 250);
        crc2.lineTo(197, 234);
        crc2.closePath();
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(192, 250);
        crc2.lineTo(187, 240);
        crc2.lineTo(182, 250);
        crc2.lineTo(187, 240);
        crc2.lineTo(187, 230);
        crc2.lineTo(187, 233);
        crc2.lineTo(197, 233);
        crc2.lineTo(187, 233);
        crc2.lineTo(182, 240);
        crc2.lineTo(187, 233);
        crc2.lineTo(187, 230);
        crc2.arc(185, 226, 5, 0, 360);
        crc2.strokeStyle = "#e90000";
        crc2.fillStyle = "#e90000";
        crc2.fill();
        crc2.stroke();
    }
    //ziehendes M�nnchen 2
    function drawKid1() {
        crc2.beginPath();
        crc2.moveTo(240, 245);
        crc2.lineTo(240, 215);
        crc2.lineTo(240, 225);
        crc2.lineTo(260, 225);
        crc2.lineTo(260, 215);
        crc2.lineTo(260, 245);
        crc2.lineTo(260, 235);
        crc2.lineTo(240, 235);
        crc2.closePath();
        crc2.strokeStyle = "#2c2cff";
        crc2.fillStyle = "#2c2cff";
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(265, 225);
        crc2.lineTo(270, 215);
        crc2.lineTo(275, 225);
        crc2.lineTo(270, 215);
        crc2.lineTo(270, 205);
        crc2.lineTo(270, 208);
        crc2.lineTo(260, 208);
        crc2.lineTo(270, 208);
        crc2.lineTo(275, 215);
        crc2.lineTo(270, 208);
        crc2.lineTo(270, 205);
        crc2.arc(270, 200, 5, 0, 360);
        crc2.strokeStyle = "#ff3903";
        crc2.fillStyle = "#ff3903";
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(260, 208);
        crc2.lineTo(250, 225);
        crc2.closePath();
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    }
    //B�ume
    function giveRandomNumbersForTrees() {
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.beginPath;
            crc2.moveTo(0, 102);
            crc2.lineTo(320, 102);
            crc2.lineTo(320, 460);
            crc2.lineTo(0, 460);
            crc2.lineTo(0, 102);
            if (crc2.isPointInPath(x, y)) {
                drawTree(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTree(_x, _y) {
        //Stamm
        crc2.strokeStyle = "#513309";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 10);
        crc2.fill();
        crc2.stroke();
        //Nadeln
        crc2.strokeStyle = "#4b903f";
        crc2.fillStyle = "#4b903f";
        crc2.beginPath();
        crc2.moveTo(_x, _y - 10);
        crc2.lineTo(_x + 10, _y - 10);
        crc2.lineTo(_x + 2, _y - 20);
        crc2.lineTo(_x + 8, _y - 20);
        crc2.lineTo(_x, _y - 30);
        crc2.lineTo(_x - 8, _y - 20);
        crc2.lineTo(_x - 2, _y - 20);
        crc2.lineTo(_x - 10, _y - 10);
        crc2.lineTo(_x, _y - 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //Schneeflocken
    function giveRandomNumberForSnowflakes() {
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawSnowflake(x, y);
        }
    }
    function drawSnowflake(_x, _y) {
        crc2.strokeStyle = "#51d4e6";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 10, _y);
        crc2.lineTo(_x - 10, _y);
        crc2.lineTo(_x + 5, _y + 5);
        crc2.lineTo(_x - 5, _y - 5);
        crc2.lineTo(_x, _y + 10);
        crc2.lineTo(_x, _y - 10);
        crc2.lineTo(_x - 5, _y + 5);
        crc2.lineTo(_x + 5, _y - 5);
        crc2.lineTo(_x - 10, _y);
        crc2.lineTo(_x + 10, _y);
        crc2.lineTo(_x - 5, _y - 5);
        crc2.lineTo(_x + 5, _y + 5);
        crc2.lineTo(_x, _y - 10);
        crc2.lineTo(_x, _y + 10);
        crc2.lineTo(_x + 5, _y - 5);
        crc2.lineTo(_x - 5, _y + 5);
        crc2.closePath();
        crc2.stroke();
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=canvasaufgabe9.js.map