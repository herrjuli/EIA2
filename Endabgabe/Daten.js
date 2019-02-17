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
            return Math.abs(this.dx + this.dy);
        }
        draw() {
            if (this.state == "moveDown") {
                this.drawChildren();
            }
            if (this.state == "dead") {
                this.drawChildren1();
            }
            if (this.state == "up") {
                this.drawChildren2();
            }
            else { }
        }
        drawChildren() {
            Endabgabe.crc2.strokeStyle = "#lightblue";
            Endabgabe.crc2.fillStyle = "lightblue";
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
            Endabgabe.crc2.strokeStyle = "lightblue";
            Endabgabe.crc2.fillStyle = "brown";
            Endabgabe.crc2.lineWidth = 1;
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
        drawChildren2() {
            Endabgabe.crc2.strokeStyle = "#lightblue";
            Endabgabe.crc2.fillStyle = "lightblue";
            Endabgabe.crc2.lineWidth = 1;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 5, this.y - 10);
            Endabgabe.crc2.arc(this.x + 5, this.y - 10 - 5, 5, 45, 360);
            Endabgabe.crc2.moveTo(this.x + 5, this.y - 10);
            Endabgabe.crc2.lineTo(this.x + 5, this.y);
            Endabgabe.crc2.lineTo(this.x + 5, this.y + 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y + 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y);
            Endabgabe.crc2.lineTo(this.x + 5, this.y);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
        move() {
            if (this.x > Endabgabe.crc2.canvas.width + 5 || this.x < -5) {
                this.state = "up";
            }
            if (this.y > Endabgabe.crc2.canvas.height + 5) {
                this.state = "up";
            }
            if (this.y <= 102) {
                this.state = "moveDown";
            }
            if (this.state == "moveDown" || this.state == "dead") {
                this.x -= this.dx;
                this.y += this.dy;
            }
            if (this.state == "up") {
                this.x += this.dx;
                this.y -= this.dy;
            }
        }
    }
    Endabgabe.Children = Children;
    class ThrownSnowball extends Overclass {
        draw() {
            if (this.r > 0) {
                Endabgabe.crc2.beginPath;
                Endabgabe.crc2.lineWidth = 1;
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
        hitChildDown(_x, _y) {
            Endabgabe.crc2.lineWidth = 50;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(_x, _y);
            Endabgabe.crc2.arc(_x, _y - 5, 20, 45, 360);
            Endabgabe.crc2.lineWidth = 0;
            if (Endabgabe.crc2.isPointInPath(this.x, this.y) == true) {
                return true;
            }
            else {
                return false;
            }
        }
        hitChildUp(_x, _y) {
            Endabgabe.crc2.lineWidth = 50;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(_x - 5, _y - 10);
            Endabgabe.crc2.arc(_x + 5, _y - 10 - 5, 5, 45, 360);
            Endabgabe.crc2.moveTo(_x - 20, _y + 5);
            Endabgabe.crc2.lineTo(_x + 5, _y);
            Endabgabe.crc2.lineTo(_x + 5, _y + 10);
            Endabgabe.crc2.lineTo(_x - 5, _y + 10);
            Endabgabe.crc2.lineTo(_x - 5, _y);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.lineWidth = 0;
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