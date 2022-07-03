ballX = 200;
ballY = 50;
ballDX = 1;
ballDY = 1;

gravity = 0.05;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
    //move the ball vertical
    ballY += ballDY;
    ballX += ballDX;
    ballDY += gravity
    
    //bounce
    if(ballY>390) {
      ballDY *= -1;
    }
      
    if(ballX>390){
      ballDX *= -1;
    }
    
    if(ballY<10){
      ballDY *= -1;
    }
    
    if(ballX<10){
      ballDX *= -1;
    }

    //ball
    circle(ballX, ballY, 20);
}
