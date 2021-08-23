function createCounters() {
  redCounter = createSprite(width / 2, height / 2, 45, 45);
  redCounter.addImage("redCounterImg", redCounterImg);
  redCounter.scale = 0.05;

  striker = createSprite(width/2, 465, 25, 25);
  striker.addImage("strikerImg", strikerImg);
  striker.scale = 0.2;

  for (var i = 0; i < 9; i = i + 1) {
    black.push(createSprite(225, 225));
    black[i].addImage("blackCounterImg", blackCounterImg);
    black[i].scale = 0.05;
  }

  for (var j = 0; j < 9; j = j + 1) {
    white.push(createSprite(225, 225));
    white[j].addImage("whiteCounterImg", whiteCounterImg);
    white[j].scale = 0.05;
  }
}

function placeCounters() {
  black[0].x = width / 2 - 20;
  black[0].y = height / 2;

  black[1].x = width / 2 + 10;
  black[1].y = height / 2 + 20;

  black[2].x = width / 2 + 10;
  black[2].y = height / 2 - 20;

  black[3].x = width / 2 - 30;
  black[3].y = height / 2 - 20;

  black[4].x = width / 2 + 30;
  black[4].y = height / 2 - 20;

  black[5].x = width / 2 - 30;
  black[5].y = height / 2 + 20;

  black[6].x = width / 2 + 30;
  black[6].y = height / 2 + 20;

  black[7].x = width / 2;
  black[7].y = height / 2 + 40;

  black[8].x = width / 2;
  black[8].y = height / 2 - 40;

  white[0].x = width / 2 + 20;
  white[0].y = height / 2;

  white[1].x = width / 2 - 10;
  white[1].y = height / 2 - 20;

  white[2].x = width / 2 - 10;
  white[2].y = height / 2 + 20;

  white[3].x = width / 2 - 40;
  white[3].y = height / 2;

  white[4].x = width / 2 + 40;
  white[4].y = height / 2;

  white[5].x = width / 2 - 20;
  white[5].y = height / 2 - 40;

  white[6].x = width / 2 + 20;
  white[6].y = height / 2 - 40;

  white[7].x = width / 2 - 20;
  white[7].y = height / 2 + 40;

  white[8].x = width / 2 + 20;
  white[8].y = height / 2 + 40;
}

function createBorders(){
  border1 = createSprite(width / 2,440, 280, 15);
  border2 = createSprite(width / 2,490, 280, 15);
  border3 = createSprite(150,465, 15, 30);
  border4 = createSprite(450,465, 15, 30);
  striker.collide(border1)
  striker.collide(border2)
  striker.collide(border3)
  striker.collide(border4)

  border1.visible=false
  border2.visible=false
  border3.visible=false
  border4.visible=false


 
}

function strikerCollision(){
  striker.bounce(redCounter)
  
  for(var i=0; i<9;i++){
    striker.bounce(black[i])
    striker.bounce(white[i])
    for (var k=0;k<9;k++){
      black[k].bounce(black[i])
      white[k].bounce(white[i])

      black[k].bounce(white[i])
  
    }

    redCounter.bounce(black[i]);
    redCounter.bounce(white[i]);
  }

  

  
}

function border (){
  wall1=createSprite(width/2,0,width,20)
  wall2=createSprite(width/2,height,width,20)
  wall3=createSprite(0,height/2,20,height)
  wall4=createSprite(width,height/2,20,height)

  
}

function collisonWalls(){
  striker.bounceOff(wall1);
  striker.bounceOff(wall2);
  striker.bounceOff(wall3);
  striker.bounceOff(wall4);
  
  if(redCounter.isTouching(wall1)||redCounter.isTouching(wall2)|| redCounter.isTouching(wall3)|| redCounter.isTouching(wall4)){
    redCounter.bounciness=0.3
  }

  for(var i=0;i<9;i++){
    if(white[i].isTouching(wall1) || white[i].isTouching(wall2) || white[i].isTouching(wall3)|| white[i].isTouching(wall4)){
      white[i].bounciness=0.3
    }

    if(black[i].isTouching(wall1) || black[i].isTouching(wall2) || black[i].isTouching(wall3)|| black[i].isTouching(wall4)){
      black[i].bounciness=0.3
    }

    
  

  black[i].bounceOff(wall1);
  black[i].bounceOff(wall2);
  black[i].bounceOff(wall3);
  black[i].bounceOff(wall4);

  white[i].bounceOff(wall1);
  white[i].bounceOff(wall2);
  white[i].bounceOff(wall3);
  white[i].bounceOff(wall4);

 

}
redCounter.bounceOff(wall1);
redCounter.bounceOff(wall2);
redCounter.bounceOff(wall3);
redCounter.bounceOff(wall4);


}

function createPockets (){
  pocket1=createSprite(57,57,50,50)
  pocket1.visible=false
  pocket2=createSprite(600-57,57,50,50)
  pocket2.visible=false
  pocket3=createSprite(57,600-57,50,50)
  pocket3.visible=false
  pocket4=createSprite(600-57,600-57,50,50)
  pocket4.visible=false
 
  
}

function score(){

  for(var i=0; i<9;i++){
    if(pocket1.isTouching(black[i])){
      black[i].destroy()
      point1=point1+1
    }
    if(pocket1.isTouching(white[i])){
      white[i].destroy()
      point1=point1+1
    }
    if(pocket2.isTouching(black[i])){
      black[i].destroy()
      point1=point1+1
    }

    if(pocket2.isTouching(white[i])){
      white[i].destroy()
      point1=point1+1
    }
    if(pocket3.isTouching(black[i])){
      black[i].destroy()
      point1=point1+1
    }
    if(pocket3.isTouching(white[i])){
      white[i].destroy()
      point1=point1+1
    }
    if(pocket4.isTouching(black[i])){
      black[i].destroy()
      point1=point1+1
    }

    if(pocket4.isTouching(white[i])){
      white[i].destroy()
      point1=point1+1
    }
    
  
}
  
}