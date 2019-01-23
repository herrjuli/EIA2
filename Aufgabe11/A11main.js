var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let fps = 25;
    let all = [];
    let image;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        drawHill();
        drawSky();
        drawSun();
        drawClouds();
        drawClouds1();
        drawClouds2();
        drawClouds3();
        image = Aufgabe11.crc2.getImageData(0, 0, 320, 460);
        for (let i = 0; i < 6; i++) {
            let tree = new Aufgabe11.Tree();
            tree.x = Math.random() * Aufgabe11.crc2.canvas.width;
            tree.y = Math.random() * Aufgabe11.crc2.canvas.height;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(0, 110);
            Aufgabe11.crc2.lineTo(320, 110);
            Aufgabe11.crc2.lineTo(320, 460);
            Aufgabe11.crc2.lineTo(0, 460);
            Aufgabe11.crc2.lineTo(0, 110);
            Aufgabe11.crc2.closePath();
            if (Aufgabe11.crc2.isPointInPath(tree.x, tree.y)) {
                all.push(tree);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 20; i++) {
            let snowflake = new Aufgabe11.Snowflakes();
            snowflake.x = Math.random() * Aufgabe11.crc2.canvas.width;
            snowflake.y = Math.random() * Aufgabe11.crc2.canvas.height;
            snowflake.dx = Math.random() * 4 - 2;
            snowflake.dy = Math.random() * 4 - 2;
            snowflake.color = "#00ff00";
            all.push(snowflake);
        }
        for (let i = 0; i < 20; i++) {
            let kids = new Aufgabe11.Children();
            kids.x = Math.random() * Aufgabe11.crc2.canvas.width;
            kids.y = Math.random() * Aufgabe11.crc2.canvas.height;
            kids.dx = Math.random() * 4 - 2;
            kids.dy = Math.random() * 4 - 2;
            kids.state = "moveDown";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(0, 110);
            Aufgabe11.crc2.lineTo(320, 110);
            Aufgabe11.crc2.lineTo(320, 460);
            Aufgabe11.crc2.lineTo(0, 460);
            Aufgabe11.crc2.lineTo(0, 110);
            Aufgabe11.crc2.closePath();
            if (Aufgabe11.crc2.isPointInPath(kids.x, kids.y)) {
                all.push(kids);
            }
            else {
                i--;
            }
        }
        update();
    }
    //Hang
    function drawHill() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 102);
        Aufgabe11.crc2.lineTo(320, 102);
        Aufgabe11.crc2.strokeStyle = "#080809";
        Aufgabe11.crc2.lineWidth = 2;
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
    }
    Aufgabe11.drawHill = drawHill;
    //Himmel
    function drawSky() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 0);
        Aufgabe11.crc2.lineTo(320, 0);
        Aufgabe11.crc2.lineTo(320, 102);
        Aufgabe11.crc2.lineTo(0, 102);
        Aufgabe11.crc2.lineTo(0, 0);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "#9cfcff";
        Aufgabe11.crc2.strokeStyle = "#9cfcff";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.stroke();
    }
    Aufgabe11.drawSky = drawSky;
    //Sonne
    function drawSun() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(185, 0);
        Aufgabe11.crc2.arc(185, 0, 20, 0, 180 * Math.PI);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "#e7fc00";
        Aufgabe11.crc2.fillStyle = "#e7fc00";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.stroke();
    }
    //Wolken
    function drawClouds() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(270, 28);
        Aufgabe11.crc2.lineTo(310, 28);
        Aufgabe11.crc2.arcTo(320, 38, 310, 48, 14);
        Aufgabe11.crc2.lineTo(270, 48);
        Aufgabe11.crc2.arcTo(260, 38, 270, 28, 10);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "#fefbfb";
        Aufgabe11.crc2.fillStyle = "#fefbfb";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.stroke();
    }
    function drawClouds1() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(158, 28);
        Aufgabe11.crc2.lineTo(198, 28);
        Aufgabe11.crc2.arcTo(208, 38, 198, 48, 14);
        Aufgabe11.crc2.lineTo(158, 48);
        Aufgabe11.crc2.arcTo(148, 38, 158, 28, 10);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "#fefbfb";
        Aufgabe11.crc2.fillStyle = "#fefbfb";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.stroke();
    }
    function drawClouds2() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(80, 28);
        Aufgabe11.crc2.lineTo(120, 28);
        Aufgabe11.crc2.arcTo(130, 38, 120, 48, 14);
        Aufgabe11.crc2.lineTo(80, 48);
        Aufgabe11.crc2.arcTo(70, 38, 80, 28, 10);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "#fefbfb";
        Aufgabe11.crc2.fillStyle = "#fefbfb";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.stroke();
    }
    function drawClouds3() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(18, 28);
        Aufgabe11.crc2.lineTo(58, 28);
        Aufgabe11.crc2.arcTo(68, 38, 58, 48, 14);
        Aufgabe11.crc2.lineTo(18, 48);
        Aufgabe11.crc2.arcTo(8, 38, 18, 28, 10);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "#fefbfb";
        Aufgabe11.crc2.fillStyle = "#fefbfb";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.stroke();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < all.length; i++) {
            all[i].move();
            all[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=A11main.js.map