namespace Endabgabe {
    export class Overclass {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
    }
    export class Move extends Overclass {
        dx: number;
        dy: number;
        move(): void {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    export class Tree extends Overclass {
        x: number;
        y: number;
        color: string;

        draw(): void {
            crc2.beginPath;
            crc2.strokeStyle = "#4b903f";
            crc2.fillStyle = "#4b903f";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 10);
            crc2.lineTo(this.x + 10, this.y - 10);
            crc2.lineTo(this.x + 2, this.y - 20);
            crc2.lineTo(this.x + 8, this.y - 20);
            crc2.lineTo(this.x, this.y - 30);
            crc2.lineTo(this.x - 8, this.y - 20);
            crc2.lineTo(this.x - 2, this.y - 20);
            crc2.lineTo(this.x - 10, this.y - 10);
            crc2.lineTo(this.x, this.y - 10);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }
    }
    export class Snowflakes extends Move {
        move(): void {
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 460) {
                this.y = 0;
            }

            this.draw();
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "#51d4e6";
            crc2.lineWidth = .2;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 10, this.y);
            crc2.lineTo(this.x - 10, this.y);
            crc2.lineTo(this.x + 5, this.y + 5);
            crc2.lineTo(this.x - 5, this.y - 5);
            crc2.lineTo(this.x, this.y + 10);
            crc2.lineTo(this.x, this.y - 10);
            crc2.lineTo(this.x - 5, this.y + 5);
            crc2.lineTo(this.x + 5, this.y - 5);
            crc2.lineTo(this.x - 10, this.y);
            crc2.lineTo(this.x + 10, this.y);
            crc2.lineTo(this.x - 5, this.y - 5);
            crc2.lineTo(this.x + 5, this.y + 5);
            crc2.lineTo(this.x, this.y - 10);
            crc2.lineTo(this.x, this.y + 10);
            crc2.lineTo(this.x + 5, this.y - 5);
            crc2.lineTo(this.x - 5, this.y + 5);
            crc2.closePath();
            crc2.stroke();
        }
    }

    export class Children extends Move {
        state: string;
        getSpeed(): number {
            return this.dx + this.dy;
        }

        draw(): void {
            if (this.state == "moveDown") {
                this.drawChildren();
            }

            if (this.state == "dead") {
                this.drawChildren1();
            }

            else { }
        }

        drawChildren(): void {
            crc2.strokeStyle = "#e90000";
            crc2.fillStyle = "black";
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y - 5, 5, 45, 360);
            crc2.lineTo(this.x + 5, this.y);
            crc2.lineTo(this.x + 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        drawChildren1(): void {
            crc2.strokeStyle = "brown";
            crc2.fillStyle = "brown";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 5, this.y);
            crc2.lineTo(this.x + 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        move(): void {


            this.x -= this.dx;
            this.y += this.dy;
        }
    }

    export class ThrownSnowball extends Overclass {
        x: number;
        y: number;
        r: number;
        color: string;

        draw(): void {
            if (this.r > 0) {

                crc2.beginPath;

                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, this.y, this.r, 45, 360);
                crc2.closePath();
                crc2.strokeStyle = "lightblue";
                crc2.fillStyle = "lightblue";
                crc2.fill();
                crc2.stroke();
            }
        }

        move(): void {
            this.r -= 2;
        }

        hit(_x: number, _y: number): boolean {
            crc2.lineWidth = 50;
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y - 5, 20, 45, 360);
            if (crc2.isPointInPath(this.x, this.y) == true) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}