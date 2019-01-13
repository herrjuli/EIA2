namespace Aufgabe10 {
    export class Snowflakes {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
        move(): void {
            this.dy=2;
            this.dx=Math.random()*4-2;
            this.x += this.dx;
            this.y += this.dy;
            if(this.y>460){
                this.y=0;
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
    }