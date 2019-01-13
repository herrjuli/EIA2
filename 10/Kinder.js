var Aufgabe10;
(function (Aufgabe10) {
    class ChildOn {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y - 30);
            Aufgabe10.crc2.lineTo(this.x, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x + 20, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y + 30);
            Aufgabe10.crc2.lineTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x - 20, this.y);
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 10, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x + 10, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x - 10, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y + 3);
            Aufgabe10.crc2.lineTo(this.x - 3, this.y + 2);
            Aufgabe10.crc2.lineTo(this.x + 3, this.y + 7);
            Aufgabe10.crc2.lineTo(this.x + 3, this.y - 7);
            Aufgabe10.crc2.lineTo(this.x - 3, this.y - 3);
            Aufgabe10.crc2.lineTo(this.x, this.y - 2);
            Aufgabe10.crc2.arc(this.x, this.y - 5, 5, 0, 360);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
        /*   move(): void {
                  if (this.y > 400) {
                    this.y = 0;
                    this.x = 0;
                }
    
                this.x += - 4;
                this.y += 2;
                this.draw();
               
    */
        move() {
            this.dy += 2;
            this.y = 110;
            this.dx = Math.random() * 4 - 2;
            this.x += 0;
            this.y += this.dy;
            if (this.y > 460) {
                this.y = 110;
            }
        }
    }
    Aufgabe10.ChildOn = ChildOn;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Kinder.js.map