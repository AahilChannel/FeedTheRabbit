var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, apple;
var leafImg, appleImg;
var appleG, leafG;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
//groups
appleG = createGroup();
leafG = createGroup();
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbitM();
  createLeaf();
  createApple();
  drawSprites();
}

function rabbitM() {
  rabbit.x = mouseX;
  if(rabbit.x >= 350) {
    rabbit.x = 350;
  }
  if(rabbit.x <= 50){
    rabbit.x = 50;
  }
}

function createApple() {
  if(frameCount%Math.round(random(80,95))==0){
    apple = createSprite(Math.round(random(25,375)),-25);
    apple.addImage(appleImg);
    apple.scale = 0.075;
    apple.velocityY = 5;
    apple.lifetime = 90;
    appleG.add(apple);
    if(apple.isTouching(rabbit)){
      appleG.destroyEach();
    }
  }
}

function createLeaf() {
  if(frameCount%Math.round(random(50,75))==0){
    leaf = createSprite(Math.round(random(25,375)),-25);
    leaf.addImage(leafImg);
    leaf.scale = 0.075;
    leaf.velocityY = 2.5;
    leaf.lifetime = 180;
    leafG.add(leaf);
    if(leaf.isTouching(rabbit)){
      leafG.destroyEach();
    }
  }
}