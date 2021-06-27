var ball;
function setup() {
  createCanvas(800,700);
  ball = createSprite(400,350,50,50);
}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
    ball.x = ball.x -5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.x = ball.x +5;
  }
drawSprites();
}




