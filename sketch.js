var box;
function setup() {
  createCanvas(windowWidth,windowHeight);
  box=createSprite(500,500,50,50)
}

function draw() 
{
  background(30);
drawSprites();

if (keyIsDown(RIGHT_ARROW)){
  box.x=box.x+5
}
if (keyIsDown(LEFT_ARROW)){
  box.x=box.x-5
}
if (keyIsDown(UP_ARROW)){
  box.y=box.y-5
}
if (keyIsDown(DOWN_ARROW)){
  box.y=box.y+5
}
}


