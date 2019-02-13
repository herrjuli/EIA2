var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    let address = "https://eia2herrjuli.herokuapp.com";
    let fps = 25;
    let all = [];
    let children = [];
    let score = 0;
    let image;
    let thrownSnowballs = [];
    function init(_event) {
        document.getElementById("button").addEventListener("click", play);
        document.getElementById("canvas").style.display = "initial";
        document.getElementById("ende").style.display = "none";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", createSB);
        Endabgabe.crc2 = canvas.getContext("2d");
        drawHill();
        drawSky();
        drawSun();
        drawClouds();
        drawClouds1();
        drawClouds2();
        drawClouds3();
        image = Endabgabe.crc2.getImageData(0, 0, 320, 460);
    }
    //Spiel
    function play() {
        setTimeout(end, 6000);
        //B�ume
        for (let i = 0; i < 6; i++) {
            let tree = new Endabgabe.Tree();
            tree.x = Math.random() * Endabgabe.crc2.canvas.width;
            tree.y = Math.random() * Endabgabe.crc2.canvas.height;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(0, 110);
            Endabgabe.crc2.lineTo(320, 110);
            Endabgabe.crc2.lineTo(320, 460);
            Endabgabe.crc2.lineTo(0, 460);
            Endabgabe.crc2.lineTo(0, 110);
            Endabgabe.crc2.closePath();
            if (Endabgabe.crc2.isPointInPath(tree.x, tree.y)) {
                all.push(tree);
            }
            else {
                i--;
            }
        }
        //Schneeflocken
        for (let i = 0; i < 20; i++) {
            let snowflake = new Endabgabe.Snowflakes();
            snowflake.x = Math.random() * Endabgabe.crc2.canvas.width;
            snowflake.y = Math.random() * Endabgabe.crc2.canvas.height;
            snowflake.dx = Math.random() * 4 - 2;
            snowflake.dy = Math.random() * 4 - 2;
            snowflake.color = "#00ff00";
            all.push(snowflake);
        }
        for (let i = 0; i < 20; i++) {
            newChild();
        }
        document.getElementById("button").style.display = "none";
        update();
    }
    //Schneeball
    function createSB(_event) {
        let sb = new Endabgabe.ThrownSnowball();
        sb.x = _event.clientX;
        sb.y = _event.clientY;
        sb.r = 45;
        thrownSnowballs.push(sb);
    }
    function newChild() {
        let kids = new Endabgabe.Children();
        kids.x = Math.random() * Endabgabe.crc2.canvas.width;
        kids.y = 110;
        kids.dx = Math.random() * 4 - 2;
        kids.dy = Math.random() * 4;
        kids.state = "moveDown";
        children.push(kids);
    }
    //Hang
    function drawHill() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(0, 102);
        Endabgabe.crc2.lineTo(Endabgabe.crc2.canvas.width, 102);
        Endabgabe.crc2.lineTo(Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
        Endabgabe.crc2.lineTo(0, Endabgabe.crc2.canvas.height);
        Endabgabe.crc2.lineWidth = 2;
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.strokeStyle = "#ffffff";
        Endabgabe.crc2.fillStyle = "#ffffff";
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.fill();
    }
    Endabgabe.drawHill = drawHill;
    //Himmel
    function drawSky() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(0, 0);
        Endabgabe.crc2.lineTo(320, 0);
        Endabgabe.crc2.lineTo(320, 102);
        Endabgabe.crc2.lineTo(0, 102);
        Endabgabe.crc2.lineTo(0, 0);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = "#9cfcff";
        Endabgabe.crc2.strokeStyle = "#9cfcff";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
    }
    Endabgabe.drawSky = drawSky;
    //Sonne
    function drawSun() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(185, 0);
        Endabgabe.crc2.arc(185, 0, 20, 0, 180 * Math.PI);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.strokeStyle = "#e7fc00";
        Endabgabe.crc2.fillStyle = "#e7fc00";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
    }
    //Wolken
    function drawClouds() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(270, 28);
        Endabgabe.crc2.lineTo(310, 28);
        Endabgabe.crc2.arcTo(320, 38, 310, 48, 14);
        Endabgabe.crc2.lineTo(270, 48);
        Endabgabe.crc2.arcTo(260, 38, 270, 28, 10);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.strokeStyle = "#fefbfb";
        Endabgabe.crc2.fillStyle = "#fefbfb";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
    }
    function drawClouds1() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(158, 28);
        Endabgabe.crc2.lineTo(198, 28);
        Endabgabe.crc2.arcTo(208, 38, 198, 48, 14);
        Endabgabe.crc2.lineTo(158, 48);
        Endabgabe.crc2.arcTo(148, 38, 158, 28, 10);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.strokeStyle = "#fefbfb";
        Endabgabe.crc2.fillStyle = "#fefbfb";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
    }
    function drawClouds2() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(80, 28);
        Endabgabe.crc2.lineTo(120, 28);
        Endabgabe.crc2.arcTo(130, 38, 120, 48, 14);
        Endabgabe.crc2.lineTo(80, 48);
        Endabgabe.crc2.arcTo(70, 38, 80, 28, 10);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.strokeStyle = "#fefbfb";
        Endabgabe.crc2.fillStyle = "#fefbfb";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
    }
    function drawClouds3() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(18, 28);
        Endabgabe.crc2.lineTo(58, 28);
        Endabgabe.crc2.arcTo(68, 38, 58, 48, 14);
        Endabgabe.crc2.lineTo(18, 48);
        Endabgabe.crc2.arcTo(8, 38, 18, 28, 10);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.strokeStyle = "#fefbfb";
        Endabgabe.crc2.fillStyle = "#fefbfb";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
    }
    function update() {
        if (document.getElementById("canvas").getAttribute("style") != "display: none;") {
            window.setTimeout(update, 1000 / fps);
            Endabgabe.crc2.putImageData(image, 0, 0);
            document.getElementById("score").innerHTML = "Punktzahl:" + score.toString() + "";
            for (let i = 0; i < all.length; i++) {
                all[i].move();
                all[i].draw();
            }
            for (let i = 0; i < children.length; i++) {
                if (children[i].x > Endabgabe.crc2.canvas.width || children[i].x < 0 || children[i].y > Endabgabe.crc2.canvas.height) {
                    children.splice(i, 1);
                    newChild();
                }
                else {
                    children[i].move();
                    children[i].draw();
                }
            }
            for (let i = 0; i < thrownSnowballs.length; i++) {
                let SB = thrownSnowballs[i];
                if (SB.r > 0) {
                    SB.move();
                    SB.draw();
                }
                if (SB.r == -1) {
                    SB.move();
                    console.log(SB.r);
                    for (let i2 = 0; i2 < children.length; i2++) {
                        console.log("x:" + children[i2].x + "y:" + children[i2].y + " i:" + i2);
                        if (SB.hit(children[i2].x, children[i2].y) == true && children[i2].state == "moveDown") {
                            children[i2].state = "dead";
                            score += Math.floor(children[i2].getSpeed() * 4);
                            console.log("hit");
                        }
                        else {
                            console.log("else");
                        }
                    }
                }
            }
        }
    }
    function end() {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("anfang").style.display = "none";
        document.getElementById("ende").style.display = "initial";
        document.getElementById("score").style.display = "none";
        let node = document.getElementsByTagName("body")[0];
        let childNodeHTML;
        childNodeHTML += "<h3 id='abgabe' value='" + score.toString() + "'>Deine Punktzahl:" + score + "</h3></br>";
        node.innerHTML += childNodeHTML;
        document.getElementById("restart").addEventListener("click", refresh);
        return;
    }
    function refresh() {
        window.location.reload();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map