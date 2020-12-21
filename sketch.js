
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground;

var dumbsterIMG;

function preload()
{
  dumbsterIMG = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

dumbster = createSprite(700,560)
dumbster.addImage(dumbsterIMG)
dumbster.scale=0.5

	engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(80,450,20)
  ground = new Ground(400,650,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  drawSprites();
  paper1.display();
  ground.display();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
  
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  }
}


