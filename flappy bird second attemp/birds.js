const eagleSprite = new Image();
eagleSprite.src = 'ufo.png';
class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.originalWidth = 875;
        this.originalHeight = 680;
        this.width = this.originalWidth/20;
        this.height = this.originalHeight/20;
        this.weight = 1;
    }
    update(){
        let curve = Math.sin(angle)*5;
        if(this.y > canvas.height - (this.height *3) + curve){
            this.y = canvas.height - (this.height *3 + curve);
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy 
        }
        if(this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if(spacePressed && this.y > this.height * 3) this.flap();
    }

    draw(){
        ctx.fillStyle = 'red';
       
        ctx.drawImage(eagleSprite, 0, 0, this.originalWidth, this.originalHeight, this.x -27, this.y -19, this.width * 2.5, this.height * 2.5);
    }
    flap(){
        this.vy -= 2;
    }
}
const bird = new Bird();