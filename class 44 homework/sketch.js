function preload() {
  ballImg = loadImage("ball.png");
  leftPaddleImg = loadImage("leftpaddle.png");
  rightPaddleImg = loadImage("rightpaddle.png");
}

function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
  ball.addImage(ballImg);
  ball.scale = 0.07
  leftPaddle = createSprite(10,200,5,5);
  leftPaddle.addImage(leftPaddleImg);
  leftPaddle.scale = 0.1;
  rightPaddle = createSprite(790,200,5,5);
  rightPaddle.addImage(rightPaddleImg)
  rightPaddle.scale = 0.1
  

}

function draw() {
  background(255,255,255); 
  background("black"); 
  
  strokeWeight(15);
  stroke("blue")
  line(2,0,2,400);
  line(798,0,798,400);
  line(0,2,800,2);
  line(0,398,800,398);
  stroke("white");
  line(400,0,400,400);
  drawSprites();
}
