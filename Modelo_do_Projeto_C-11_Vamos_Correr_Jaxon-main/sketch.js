var Runner, RunnerImg;
var Path, PathImg;




function preload(){
  //imagens pré-carregadas
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  PathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  Path = createSprite(200,200,200,200);
  Path.addImage(PathImg);
  Path.velocityY = 4
  Runner = createSprite(207,320,10,50);
  Runner.addAnimation("Running", RunnerImg);
  Runner.scale = 0.08
  
  
}

function draw() {
  background("black");
  Runner.x = World.mouseX
  if(Path.y > height){
    Path.y = height/2.6
  }
  drawSprites();
}
