var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let childOn = [];
    let childWith = [];
    let image;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        drawHill();
        drawSky();
        drawSun();
        drawClouds();
        drawClouds1();
        drawClouds2();
        drawClouds3();
        giveRandomNumbersForTrees();
        image = Aufgabe10.crc2.getImageData(0, 0, 320, 460);
        for (let i = 0; i < 20; i++) {
            let snowflake = new Aufgabe10.Snowflakes();
            snowflake.x = Math.random() * Aufgabe10.crc2.canvas.width;
            snowflake.y = Math.random() * Aufgabe10.crc2.canvas.height;
            snowflake.dx = Math.random() * 4 - 2;
            snowflake.dy = Math.random() * 4 - 2;
            snowflake.color = "#00ff00";
            snowflakes.push(snowflake);
        }
        for (let i = 0; i < 5; i++) {
            let driver = new Aufgabe10.ChildOn();
            driver.x = Math.random() * Aufgabe10.crc2.canvas.width;
            driver.y = Math.random() * Aufgabe10.crc2.canvas.height;
            driver.dx = Math.random() * 4 - 2;
            driver.dy = Math.random() * 4 - 2;
            driver.color = "#000000";
            childOn.push(driver);
        }
        for (let i = 0; i < 5; i++) {
            let walker = new Aufgabe10.ChildWith();
            walker.x = Math.random() * Aufgabe10.crc2.canvas.width;
            walker.y = Math.random() * Aufgabe10.crc2.canvas.height;
            walker.dx = Math.random() * 4 - 2;
            walker.dy = Math.random() * 4 - 2;
            walker.color = "#000000";
            childWith.push(walker);
        }
        update();
    }
    //Hang
    function drawHill() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 102);
        Aufgabe10.crc2.lineTo(320, 102);
        Aufgabe10.crc2.strokeStyle = "#080809";
        Aufgabe10.crc2.lineWidth = 2;
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
    }
    Aufgabe10.drawHill = drawHill;
    //Himmel
    function drawSky() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 0);
        Aufgabe10.crc2.lineTo(320, 0);
        Aufgabe10.crc2.lineTo(320, 102);
        Aufgabe10.crc2.lineTo(0, 102);
        Aufgabe10.crc2.lineTo(0, 0);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#9cfcff";
        Aufgabe10.crc2.strokeStyle = "#9cfcff";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    Aufgabe10.drawSky = drawSky;
    //Sonne
    function drawSun() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(185, 0);
        Aufgabe10.crc2.arc(185, 0, 20, 0, 180 * Math.PI);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "#e7fc00";
        Aufgabe10.crc2.fillStyle = "#e7fc00";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    //Wolken
    function drawClouds() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(270, 28);
        Aufgabe10.crc2.lineTo(310, 28);
        Aufgabe10.crc2.arcTo(320, 38, 310, 48, 14);
        Aufgabe10.crc2.lineTo(270, 48);
        Aufgabe10.crc2.arcTo(260, 38, 270, 28, 10);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "#fefbfb";
        Aufgabe10.crc2.fillStyle = "#fefbfb";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function drawClouds1() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(158, 28);
        Aufgabe10.crc2.lineTo(198, 28);
        Aufgabe10.crc2.arcTo(208, 38, 198, 48, 14);
        Aufgabe10.crc2.lineTo(158, 48);
        Aufgabe10.crc2.arcTo(148, 38, 158, 28, 10);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "#fefbfb";
        Aufgabe10.crc2.fillStyle = "#fefbfb";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function drawClouds2() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(80, 28);
        Aufgabe10.crc2.lineTo(120, 28);
        Aufgabe10.crc2.arcTo(130, 38, 120, 48, 14);
        Aufgabe10.crc2.lineTo(80, 48);
        Aufgabe10.crc2.arcTo(70, 38, 80, 28, 10);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "#fefbfb";
        Aufgabe10.crc2.fillStyle = "#fefbfb";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function drawClouds3() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(18, 28);
        Aufgabe10.crc2.lineTo(58, 28);
        Aufgabe10.crc2.arcTo(68, 38, 58, 48, 14);
        Aufgabe10.crc2.lineTo(18, 48);
        Aufgabe10.crc2.arcTo(8, 38, 18, 28, 10);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "#fefbfb";
        Aufgabe10.crc2.fillStyle = "#fefbfb";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function giveRandomNumbersForTrees() {
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * Aufgabe10.crc2.canvas.width;
            let y = Math.random() * Aufgabe10.crc2.canvas.height;
            Aufgabe10.crc2.beginPath;
            Aufgabe10.crc2.moveTo(0, 102);
            Aufgabe10.crc2.lineTo(320, 102);
            Aufgabe10.crc2.lineTo(320, 460);
            Aufgabe10.crc2.lineTo(0, 460);
            Aufgabe10.crc2.lineTo(0, 102);
            if (Aufgabe10.crc2.isPointInPath(x, y)) {
                drawTree(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTree(_x, _y) {
        //Nadeln
        Aufgabe10.crc2.strokeStyle = "#4b903f";
        Aufgabe10.crc2.fillStyle = "#4b903f";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y - 10);
        Aufgabe10.crc2.lineTo(_x + 10, _y - 10);
        Aufgabe10.crc2.lineTo(_x + 2, _y - 20);
        Aufgabe10.crc2.lineTo(_x + 8, _y - 20);
        Aufgabe10.crc2.lineTo(_x, _y - 30);
        Aufgabe10.crc2.lineTo(_x - 8, _y - 20);
        Aufgabe10.crc2.lineTo(_x - 2, _y - 20);
        Aufgabe10.crc2.lineTo(_x - 10, _y - 10);
        Aufgabe10.crc2.lineTo(_x, _y - 10);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe10.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < snowflakes.length; i++) {
            let snowflakes1 = snowflakes[i];
            snowflakes1.move();
            snowflakes1.draw();
        }
        for (let i = 0; i < childOn.length; i++) {
            let childrenOn = childOn[i];
            childrenOn.move();
            childrenOn.draw();
        }
        for (let i = 0; i < childWith.length; i++) {
            let childrenWith = childWith[i];
            childrenWith.move();
            childrenWith.draw();
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map