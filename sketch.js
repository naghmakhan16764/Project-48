var whiteCounterImg, blackCounterImg, redCounterImg, boradImg, strikerImg;
var border1,border2,border3,border4,striker
var wall1,wall2,wall3,wall4
var white = [],black = [],redCounter;
var pocket1,pocket2,pocket3,pocket4
var gameState=1
var point1=0
  


function preload() {
  boradImg = loadImage("images/CarromBoard.jpg");
  whiteCounterImg = loadImage("images/white.png");
  blackCounterImg = loadImage("images/black.png");
  redCounterImg = loadImage("images/red.png");
  strikerImg = loadImage("images/striker.png");
}

function setup() {
  createCanvas(600, 600);

  createCounters();
  placeCounters();
  createBorders();
  border();
  createPockets();
  
}

function draw() {

  console.log(mouseX,mouseY)
  score();

  if(keyIsDown(UP_ARROW)&& gameState===1){
    border1.destroy();
    border2.destroy();
    border3.destroy();
    border4.destroy();

    striker.velocityY=random(-8,-10);
    striker.velocityX=random(-3,+3)
    gameState=0

    
  }

  

  background(boradImg);
  /*if (mouseX >= 450) {
    striker.x = 430
  } else if (mouseX <= 150) {
    striker.x = 170
  }
  if (mouseY >= 490) {
    striker.y = 465
  } else if (mouseX <= 440) {
    striker.y = 465
  }*/
  drawSprites();
  if(gameState===0){
    textSize(20);
    text("press space to strike again ",width/2,100);
    if(keyIsDown(32)){
      striker.x=width/2
      striker.y=465
      striker.velocityX=0;
      striker.velocityY=0;
      gameState=1
    }
  }
  textSize(20)
  fill("blue");
  text("Score; "+point1,20,100);
  
  strikerCollision()
  collisonWalls()
}

function mouseDragged() {
  if (striker.x > 150 && striker.x < 450
    && striker.y > 440 && striker.y < 490) {
    striker.x = mouseX;
    striker.y = mouseY;
  }
  
}

function mouseReleased(){

    

}

