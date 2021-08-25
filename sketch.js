var pathImg, path
var person, running


function preload(){
  //pre-load images
 pathImg = loadImage("path.png");
 running = loadAnimation("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  // moving path
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  //person
  person=createSprite(200,300);
  person.addAnimation("Runner-1.png", running);
  person.scale = 0.05
  



}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2
  }

  person.x = mouseX
  if(person.x > 350){
    person.x = 350;
  }
  if(person.x < 50){
    person.x = 50;
  }


  drawSprites();

}
