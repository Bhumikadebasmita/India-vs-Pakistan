var indianPlane;
var bullet;
var pakistan;
var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;

function setup() {
  createCanvas(1000,1000);
  indianPlane=new Indian();
  bullet=new Bullet();
  pakistan=new Pakistan();
}

function draw() {
  background('skyblue'); 
  
  
  if (keyDown("left"))  
  { 
    indianPlane.moveLeft();
  }
  if (keyDown("right")) 
  { 
    indianPlane.moveRight();
  }
  if (keyDown("up"))
  {
    indianPlane.moveUp();
  }
  if (keyDown("down"))
  {
    indianPlane.moveDown();
  }

  drawSprites();
}