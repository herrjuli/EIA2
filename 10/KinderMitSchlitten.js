var Aufgabe10;
(function (Aufgabe10) {
    class ChildWith {
        draw() {
            Aufgabe10.crc2.strokeStyle = "#e90000";
            Aufgabe10.crc2.fillStyle = "#e90000";
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y - 30);
            Aufgabe10.crc2.lineTo(this.x, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x + 20, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y + 30);
            Aufgabe10.crc2.lineTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x - 20, this.y);
            Aufgabe10.crc2.moveTo(this.x + 10, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x - 8, this.y - 16);
            Aufgabe10.crc2.moveTo(this.x - 5, this.y + 16);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x + 5, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y + 3);
            Aufgabe10.crc2.lineTo(this.x + 10, this.y);
            Aufgabe10.crc2.lineTo(this.x - 10, this.y);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y + 7);
            Aufgabe10.crc2.lineTo(this.x + 5, this.y - 7);
            Aufgabe10.crc2.lineTo(this.x, this.y - 3);
            Aufgabe10.crc2.arc(this.x - 2, this.y - 4, 5, 0, 360);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
        move() {
            this.dy -= 1;
            this.y = 460;
            this.dx = Math.random() * 4 - 2;
            this.x += 0;
            this.y += this.dy;
            if (this.y < 110) {
                this.y = 460;
            }
        }
    }
    Aufgabe10.ChildWith = ChildWith;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=KinderMitSchlitten.js.map