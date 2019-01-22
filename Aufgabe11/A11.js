var Aufgabe11;
(function (Aufgabe11) {
    class Overclass {
        move() { }
        draw() { }
    }
    Aufgabe11.Overclass = Overclass;
    class Move extends Overclass {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    Aufgabe11.Move = Move;
    class Tree extends Overclass {
        draw() {
            Aufgabe11.crc2.beginPath;
            Aufgabe11.crc2.strokeStyle = "#4b903f";
            Aufgabe11.crc2.fillStyle = "#4b903f";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x + 10, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x + 2, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x + 8, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x, this.y - 30);
            Aufgabe11.crc2.lineTo(this.x - 8, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x - 2, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x - 10, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x, this.y - 10);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Tree = Tree;
    class Snowflakes extends Move {
        move() {
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 460) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.strokeStyle = "#51d4e6";
            Aufgabe11.crc2.lineWidth = .2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x + 10, this.y);
            Aufgabe11.crc2.lineTo(this.x - 10, this.y);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y - 5);
            Aufgabe11.crc2.lineTo(this.x, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y - 5);
            Aufgabe11.crc2.lineTo(this.x - 10, this.y);
            Aufgabe11.crc2.lineTo(this.x + 10, this.y);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y - 5);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y - 5);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y + 5);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Snowflakes = Snowflakes;
    class Children extends Move {
        draw() {
            if (this.state == "moveDown") {
                this.drawChildren();
            }
            if (this.state == "moveUp") {
                this.drawChildren1();
            }
            else { }
        }
        drawChildren() {
            Aufgabe11.crc2.strokeStyle = "#e90000";
            Aufgabe11.crc2.fillStyle = "#e90000";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.arc(this.x, this.y - 5, 5, 45, 360);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x - 10, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
        drawChildren1() {
            Aufgabe11.crc2.strokeStyle = "#e90000";
            Aufgabe11.crc2.fillStyle = "#e90000";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.arc(this.x, this.y - 5, 5, 45, 360);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x - 10, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
        move() {
            if (this.state == "moveDown") {
                if (this.y > Aufgabe11.crc2.canvas.height) {
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
                if (this.x > Aufgabe11.crc2.canvas.width) {
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
    Aufgabe11.Children = Children;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=A11.js.map