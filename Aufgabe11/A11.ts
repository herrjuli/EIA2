namespace Aufgabe11 {
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
        draw(): void {
            if (this.state == "moveDown") {
                this.drawChildren();
            }
            if (this.state == "moveUp") {
                this.drawChildren1();
            }
            else { }
        }
        drawChildren(): void {
            crc2.strokeStyle = "#e90000";
            crc2.fillStyle = "#e90000";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y - 5, 5, 45, 360);
            crc2.lineTo(this.x + 5, this.y);
            crc2.lineTo(this.x, this.y + 10);
            crc2.lineTo(this.x - 10, this.y);
            crc2.lineTo(this.x, this.y - 10);
            crc2.lineTo(this.x - 5, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        drawChildren1(): void {
            crc2.strokeStyle = "#e90000";
            crc2.fillStyle = "#e90000";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y - 5, 5, 45, 360);
            crc2.lineTo(this.x + 5, this.y);
            crc2.lineTo(this.x, this.y + 10);
            crc2.lineTo(this.x - 10, this.y);
            crc2.lineTo(this.x, this.y - 10);
            crc2.lineTo(this.x - 5, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        move(): void {
            if (this.state == "moveDown") {

                if (this.y > crc2.canvas.height) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "moveUp";
                }
                else if (this.x < 0) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "moveUp";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }

            if (this.state == "moveUp") {
                if (this.x > crc2.canvas.width) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.state = "moveDown";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }

            else { }
        }
    }
}