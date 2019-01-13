namespace Aufgabe10 {
    export class ChildOn {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color:string;
        
        draw(): void {
               crc2.beginPath();
               crc2.moveTo(this.x,this.y);
               crc2.lineTo(this.x,this.y-30 );
               crc2.lineTo(this.x,this.y+10);
               crc2.lineTo(this.x+20,this.y);
               crc2.lineTo(this.x,this.y-10);
               crc2.lineTo(this.x,this.y+30);
               crc2.lineTo(this.x,this.y-10);
               crc2.lineTo(this.x-20,this.y);
             
             
               crc2.moveTo(this.x,this.y);
               crc2.lineTo(this.x+10,this.y-10);
               crc2.lineTo(this.x+10,this.y+10);
               crc2.lineTo(this.x-10,this.y-10);
               crc2.lineTo(this.x,this.y-10);
               crc2.lineTo(this.x,this.y+3);
               crc2.lineTo(this.x-3,this.y+2);
               crc2.lineTo(this.x+3,this.y+7);
               crc2.lineTo(this.x+3,this.y-7);
               crc2.lineTo(this.x-3,this.y-3);
               crc2.lineTo(this.x,this.y-2);
               crc2.arc(this.x, this.y-5,5,0,360);
               crc2.closePath();        
               crc2.fill();
               crc2.stroke();
           }

move():void{
this.dy+=2;
    this.y=110;
           this.dx=Math.random()*4-2;
            this.x += 0;
            this.y += this.dy;
            if(this.y>460){
                this.y=110;
                 }
    }} }  