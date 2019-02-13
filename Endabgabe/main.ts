namespace Endabgabe {
    window.addEventListener("load", init);
    let address: string = "https://eia2herrjuli.herokuapp.com";
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let all: Overclass[] = [];
    let children: Children[] = [];
    let score: number = 0;
    let image: ImageData;
    let thrownSnowballs: ThrownSnowball[] = [];

    function init(_event: Event): void {
        document.getElementById("button").addEventListener("click", play);


        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", createSB);
        crc2 = canvas.getContext("2d");
        drawHill();
        drawSky();
        drawSun();
        drawClouds();
        drawClouds1();
        drawClouds2();
        drawClouds3();
        image = crc2.getImageData(0, 0, 320, 460);
    }

    //Spiel

    function play() {

        //Bäume

        for (let i: number = 0; i < 6; i++) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * crc2.canvas.width;
            tree.y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(0, 110);
            crc2.lineTo(320, 110);
            crc2.lineTo(320, 460);
            crc2.lineTo(0, 460);
            crc2.lineTo(0, 110);
            crc2.closePath();
            if (crc2.isPointInPath(tree.x, tree.y)) {
                all.push(tree);
            }

            else {
                i--;
            }
        }

        //Schneeflocken

        for (let i: number = 0; i < 20; i++) {
            let snowflake: Snowflakes = new Snowflakes();
            snowflake.x = Math.random() * crc2.canvas.width;
            snowflake.y = Math.random() * crc2.canvas.height;
            snowflake.dx = Math.random() * 4 - 2;
            snowflake.dy = Math.random() * 4 - 2;
            snowflake.color = "#00ff00";

            all.push(snowflake);
        }
        for (let i: number = 0; i < 20; i++) {
            newChild();
        }
        document.getElementById("button").style.display = "none";
        update();



    }

    //Schneeball

    function createSB(_event: MouseEvent) {
        let sb: ThrownSnowball = new ThrownSnowball();
        sb.x = _event.clientX;
        sb.y = _event.clientY;
        sb.r = 45;
        thrownSnowballs.push(sb);
    }

    function newChild(): void {
        let kids: Children = new Children();
        kids.x = Math.random() * crc2.canvas.width;
        kids.y = 110;
        kids.dx = Math.random() * 4 - 2;
        kids.dy = Math.random() * 4;
        kids.state = "moveDown";
        children.push(kids);
    }


    //Hang

    export function drawHill(): void {

        crc2.beginPath();
        crc2.moveTo(0, 102);
        crc2.lineTo(crc2.canvas.width, 102);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.lineWidth = 2;
        crc2.closePath();

        crc2.strokeStyle = "#ffffff";
        crc2.fillStyle = "#ffffff";
        crc2.stroke();
        crc2.fill();
    }

    //Himmel

    export function drawSky(): void {
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

    function drawSun(): void {

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

    function drawClouds(): void {
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

    function drawClouds1(): void {
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

    function drawClouds2(): void {
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

    function drawClouds3(): void {
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

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(image, 0, 0);
        setTimeout(end, 60000);

        for (let i: number = 0; i < all.length; i++) {
            all[i].move();
            all[i].draw();
        }

        for (let i: number = 0; i < children.length; i++) {
            if (children[i].x > crc2.canvas.width || children[i].x < 0 || children[i].y > crc2.canvas.height) {
                children.splice(i, 1);
                newChild();
            }
            else {
                children[i].move();
                children[i].draw();
            }
        }
        for (let i: number = 0; i < thrownSnowballs.length; i++) {
            let SB: ThrownSnowball = thrownSnowballs[i];
            if (SB.r > 0) {
                SB.move();
                SB.draw();
            }
            if (SB.r == 0) {
                SB.move();
                console.log(SB.r);
                for (let i2: number = 0; i2 < children.length; i2++) {
                    console.log("x:" + children[i2].x + "y:" + children[i2].y + " i:" + i2);
                    if (SB.hit(children[i2].x, children[i2].y) == true && children[i2].state == "moveDown") {
                        children[i2].state = "dead";
                        score += children[i2].getSpeed() * 2;;
                        console.log("hit");
                    }
                    else {
                        console.log("else");
                    }
                }
            }

        }

    }
    function end(): void {
        document.getElementById("canvas").style.display = "none";
        let node: HTMLBodyElement = <HTMLBodyElement>document.getElementsByTagName("body")[0];
        let childNodeHTML: string;
        childNodeHTML = "<div id=ende><h2>Ende</h2>";
        //childNodeHTML += "<h3>Deine Punktzahl:"+score</h3></br>";
        childNodeHTML += "Wenn du dein Ergebnis speichern moechtest, schreib einfach deinen Namen in die Box und druecke auf 'Senden'.</br>";
        childNodeHTML += "Name:<input type='text' id='textbox'></input></br>";
        childNodeHTML += "<button type='submit' id='submit'>Senden</button></br></br>";
        childNodeHTML += "Nochmal spielen";
        childNodeHTML += "<button id='restart'>Neustart</button></div>";
        node.innerHTML = childNodeHTML;
        document.getElementById("restart").addEventListener("click", refresh);
        return;
    }
    function refresh(): void {
        window.location.reload();
    }
}



