var bg,snow,sI,s2
function preload(){
bg=loadImage("snow3.jpg")
sI=loadAnimation("snowFall1.png","snowfall2.png")
}

function setup() {
  createCanvas(900,800);
  snow=createSprite(100,100,50,50)
  snow.addAnimation("s",sI)
  snow.scale=0.1
  s2=createSprite(500,150,50,50)
  s2.addAnimation("S2",sI)
  s2.scale=0.1
}

function draw() {
  background(bg);  
  drawSprites();
}