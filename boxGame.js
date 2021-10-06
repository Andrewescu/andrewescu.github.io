let cvs = document.getElementById("gameScreen"); // cvs.width and cvs.height to access cvs properties
let ctx = cvs.getContext('2d');
let start = 0;
let function2 = 0;
const GRAVITY = 0.05;

class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.verticalSpeed = 0;
      this.horizontalSpeed = 0;
      this.color = "orange";
      this.width = 15;
      this.height = 15;
    }
  
    // Methods  
    drawBox() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    
    // refreshes screen with overwriting white screen
    refreshScreen(){
        ctx.fillStyle = "WHITE"
        ctx.fillRect(0,0, cvs.width, cvs.height)
        }

    moveBox() {
        this.x += this.horizontalSpeed;
        this.y += this.verticalSpeed;
    }

    gravity() {
        this.verticalSpeed += GRAVITY;
    }    

    Bounce() {
        if (this.y > cvs.height - this.height){
            this.y = cvs.height - this.height;
            this.verticalSpeed *= (-.8);   
        }

        if (this.y < 0) {
            this.y = 0;
            this.verticalSpeed *= (-.2);   
        }

        if (this.x < 0) {
            this.x = 0;
            this.horizontalSpeed *= (-.3);
        }

        if (this.x > cvs.width - this.width){
            this.x = cvs.width - this.width;
            this.horizontalSpeed *=(-.3);
        }
    }

    horizontalFriction() {
        if (this.horizontalSpeed < 0){
            this.horizontalSpeed += .009;
        }
        else if (this.horizontalSpeed > 0){
            this.horizontalSpeed -= .009;
        }
    }


    // end of class
  }


window.addEventListener('keydown', (event) => {
    console.log(event.code);
    if (function2 == 0){
        if (event.code === "ArrowUp"  || event.code === "KeyW" || event.code === "Space"){
            event.preventDefault();
            theBox.verticalSpeed -= 2;
        }
    
        else if (event.code === "KeyD" || event.code === "ArrowRight"){
            event.preventDefault();
            theBox.horizontalSpeed += 2;
        }
    
        else if (event.code === "KeyA" || event.code === "ArrowLeft"){
            event.preventDefault();
            theBox.horizontalSpeed -= 2;
        }
    
        else if (event.code === "KeyS" || event.code === "ArrowDown"){
            event.preventDefault();
            theBox.verticalSpeed += 1;
        }
    }
    

});


function animate() {
    theBox.refreshScreen();
    if (start == 1){
        theBox.drawBox();
    }
    theBox.gravity();
    theBox.moveBox();
    theBox.Bounce();
    theBox.horizontalFriction();
    window.requestAnimationFrame(animate);
}

function myFunction() {
    start = 1;
    theBox.x = 55;
    theBox.y = 100;
    theBox.horizontalSpeed = 0;
    theBox.verticalSpeed = 0;
    document.getElementById("gameButton").style.display = "none";

  }

  function myFunction2() {

    function2 = 1;


    if (document.getElementById("gameButton").innerHTML == "Free Fall") {
        start = 1;
        theBox.x = 125;
        theBox.y = 100;
        theBox.horizontalSpeed = 0;
        theBox.verticalSpeed = 0;
        document.getElementById("gameButton").innerHTML = "Reset";
    }
    else if (document.getElementById("gameButton").innerHTML == "Reset"){
        start = 0;
        theBox.x = 125;
        theBox.y = 125;
        theBox.horizontalSpeed = 0;
        theBox.verticalSpeed = 0;
        document.getElementById("gameButton").innerHTML = "Free Fall"
    }
    // if (document.getElementById("gameButton").innerHTML == "Free Fall") {
    //     document.getElementById("gameButton").innerHTML = "Reset";
    // }
    // else if (document.getElementById("gameButton").innerHTML == "Reset") {
    //     document.getElementById("gameButton").innerHTML = "Free Fall";
    // }
    
  }


var theBox = new Box(50,50);
// theBox.drawBox();

window.requestAnimationFrame(animate);



