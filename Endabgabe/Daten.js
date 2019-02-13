var Endabgabe;
(function (Endabgabe) {
    class Overclass {
        move() { }
        draw() { }
    }
    Endabgabe.Overclass = Overclass;
    class Move extends Overclass {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    Endabgabe.Move = Move;
    class Tree extends Overclass {
        draw() {
            Endabgabe.crc2.beginPath;
            Endabgabe.crc2.strokeStyle = "#4b903f";
            Endabgabe.crc2.fillStyle = "#4b903f";
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x, this.y - 10);
            Endabgabe.crc2.lineTo(this.x + 10, this.y - 10);
            Endabgabe.crc2.lineTo(this.x + 2, this.y - 20);
            Endabgabe.crc2.lineTo(this.x + 8, this.y - 20);
            Endabgabe.crc2.lineTo(this.x, this.y - 30);
            Endabgabe.crc2.lineTo(this.x - 8, this.y - 20);
            Endabgabe.crc2.lineTo(this.x - 2, this.y - 20);
            Endabgabe.crc2.lineTo(this.x - 10, this.y - 10);
            Endabgabe.crc2.lineTo(this.x, this.y - 10);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.Tree = Tree;
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
            Endabgabe.crc2.fillStyle = this.color;
            Endabgabe.crc2.strokeStyle = "#51d4e6";
            Endabgabe.crc2.lineWidth = .2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.lineTo(this.x + 10, this.y);
            Endabgabe.crc2.lineTo(this.x - 10, this.y);
            Endabgabe.crc2.lineTo(this.x + 5, this.y + 5);
            Endabgabe.crc2.lineTo(this.x - 5, this.y - 5);
            Endabgabe.crc2.lineTo(this.x, this.y + 10);
            Endabgabe.crc2.lineTo(this.x, this.y - 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y + 5);
            Endabgabe.crc2.lineTo(this.x + 5, this.y - 5);
            Endabgabe.crc2.lineTo(this.x - 10, this.y);
            Endabgabe.crc2.lineTo(this.x + 10, this.y);
            Endabgabe.crc2.lineTo(this.x - 5, this.y - 5);
            Endabgabe.crc2.lineTo(this.x + 5, this.y + 5);
            Endabgabe.crc2.lineTo(this.x, this.y - 10);
            Endabgabe.crc2.lineTo(this.x, this.y + 10);
            Endabgabe.crc2.lineTo(this.x + 5, this.y - 5);
            Endabgabe.crc2.lineTo(this.x - 5, this.y + 5);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.Snowflakes = Snowflakes;
    class Children extends Move {
        getSpeed() {
            return this.dx + this.dy;
        }
        draw() {
            if (this.state == "moveDown") {
                this.drawChildren();
            }
            if (this.state == "dead") {
                this.drawChildren1();
            }
            else { }
        }
        drawChildren() {
            Endabgabe.crc2.strokeStyle = "#e90000";
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.lineWidth = 1;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.arc(this.x, this.y - 5, 5, 45, 360);
            Endabgabe.crc2.lineTo(this.x + 5, this.y);
            Endabgabe.crc2.lineTo(this.x + 5, this.y + 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y + 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
        drawChildren1() {
            Endabgabe.crc2.strokeStyle = "brown";
            Endabgabe.crc2.fillStyle = "brown";
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x, this.y);
            Endabgabe.crc2.lineTo(this.x + 5, this.y);
            Endabgabe.crc2.lineTo(this.x + 5, this.y + 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y + 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
        move() {
            this.x -= this.dx;
            this.y += this.dy;
        }
    }
    Endabgabe.Children = Children;
    class ThrownSnowball extends Overclass {
        draw() {
            if (this.r > 0) {
                Endabgabe.crc2.beginPath;
                Endabgabe.crc2.moveTo(this.x, this.y);
                Endabgabe.crc2.arc(this.x, this.y, this.r, 45, 360);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.strokeStyle = "lightblue";
                Endabgabe.crc2.fillStyle = "lightblue";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
            }
        }
        move() {
            this.r -= 2;
        }
        hit(_x, _y) {
            Endabgabe.crc2.lineWidth = 50;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(_x, _y);
            Endabgabe.crc2.arc(_x, _y - 5, 20, 45, 360);
            if (Endabgabe.crc2.isPointInPath(this.x, this.y) == true) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Endabgabe.ThrownSnowball = ThrownSnowball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Daten.js.map