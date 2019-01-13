var Aufgabe10;
(function (Aufgabe10) {
    class Snowflakes {
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
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.strokeStyle = "#51d4e6";
            Aufgabe10.crc2.lineWidth = .2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 10, this.y);
            Aufgabe10.crc2.lineTo(this.x - 10, this.y);
            Aufgabe10.crc2.lineTo(this.x + 5, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y - 5);
            Aufgabe10.crc2.lineTo(this.x, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x + 5, this.y - 5);
            Aufgabe10.crc2.lineTo(this.x - 10, this.y);
            Aufgabe10.crc2.lineTo(this.x + 10, this.y);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y - 5);
            Aufgabe10.crc2.lineTo(this.x + 5, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x + 5, this.y - 5);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y + 5);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Snowflakes = Snowflakes;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Schneeflocken.js.map