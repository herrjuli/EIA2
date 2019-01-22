namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let all: Overclass[] = [];
    let image: ImageData;

    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawHill();
        drawSky();
        drawSun();
        drawClouds();
        drawClouds1();
        drawClouds2();
        drawClouds3();
        image = crc2.getImageData(0, 0, 320, 460);
  
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
            let kids: Children = new Children();
            kids.x = Math.random() * crc2.canvas.width;
            kids.y = Math.random() * crc2.canvas.height;
            kids.dx = Math.random() * 4 - 2;
            kids.dy = Math.random() * 4 - 2;
            kids.state="moveDown";
 crc2.beginPath();
                crc2.moveTo(0, 110);
                crc2.lineTo(320, 110);
                crc2.lineTo(320, 460);
                crc2.lineTo(0, 460);
                crc2.lineTo(0, 110);
                crc2.closePath();
             if (crc2.isPointInPath(kids.x, kids.y)) {
                    all.push(kids);}
             else {
                    i--;
                }
         //   all.push(kids);
        }

        update();
    }


    //Hang

    export function drawHill(): void {
        crc2.beginPath();
        crc2.moveTo(0, 102);
        crc2.lineTo(320, 102);
        crc2.strokeStyle = "#080809";
        crc2.lineWidth = 2;
        crc2.closePath();
        crc2.stroke();
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

    for (let i: number = 0; i < all.length; i++) {
        all[i].move();
        all[i].draw();
    }
}
}
