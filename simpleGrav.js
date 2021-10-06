const GRAVITY = 9.8;

class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.velocity = 0;
      this.color = "orange";
      this.width = 15;
      this.height = 15;
    }
 
    drawBox() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    gravityForce() {
        this.velocity += GRAVITY;
    }

    movement() {
        this.y += this.velocity;
    }

}

let box = new Box;

setInterval(function()
{ 
    box.drawBox(); 
    box.gravityForce();
    box.movement(); 
}, 3000);