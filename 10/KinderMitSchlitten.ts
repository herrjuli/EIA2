namespace Aufgabe10 {
    export class ChildWith {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color:string;
        
        
          draw(): void {
                  crc2.strokeStyle = "#e90000";
               crc2.fillStyle = "#e90000";
               crc2.beginPath();
               crc2.moveTo(this.x,this.y);
               crc2.lineTo(this.x,this.y-30);
               crc2.lineTo(this.x,this.y+10);
               crc2.lineTo(this.x+20,this.y);
               crc2.lineTo(this.x,this.y-10);
               crc2.lineTo(this.x,this.y+30);
               crc2.lineTo(this.x,this.y-10);
               crc2.lineTo(this.x-20,this.y);
             
               crc2.moveTo(this.x+10,this.y-10);
               crc2.lineTo(this.x-8,this.y-16);
                         
               crc2.moveTo(this.x-5,this.y+16);
               crc2.lineTo(this.x-5,this.y-10);
               crc2.lineTo(this.x-5,this.y+10);
               crc2.lineTo(this.x+5,this.y-10);
               crc2.lineTo(this.x,this.y-10);
               crc2.lineTo(this.x,this.y+3);
               crc2.lineTo(this.x+10,this.y);
               crc2.lineTo(this.x-10,this.y);
               crc2.lineTo(this.x-5,this.y+7);
               crc2.lineTo(this.x+5,this.y-7);
               crc2.lineTo(this.x,this.y-3);
               crc2.arc(this.x-2,this.y-4,5,0,360);
           
               crc2.fill();
               crc2.stroke();
           }
    
        
        
        
        move():void{
this.dy-=1;
    this.y=460;
           this.dx=Math.random()*4-2;
            this.x += 0;
            this.y += this.dy;
            if(this.y<110){
                this.y=460;
                                        }
    }} }  