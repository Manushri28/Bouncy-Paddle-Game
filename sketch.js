var ball, ball_play, paddle, paddle_bounce;
var topEdge, leftEdge, bottomEdge;

function preload() {
  ball_play = loadAnimation("ball.png")
  paddle_bounce = loadImage("paddle.png")
}


function setup() {

  createCanvas(400, 400);

  ball = createSprite(50, 200)
  ball.addAnimation("ball", ball_play)

  paddle = createSprite(370, 200)
  paddle.addAnimation("paddle.png", paddle_bounce)

  callback();
  
}

function draw() {

  background(205, 153, 0);

  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  

  ball.bounceOff(paddle);

  if (keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 20
  }

  if (keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20
  }

  drawSprites();

}

function callback() {

    ball.velocityX = random(-9, +9);
    ball.velocityY = random(-9, +9);

  }