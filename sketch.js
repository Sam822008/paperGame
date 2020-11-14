
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(600,height,1200,20);
    paper = new Paper(700,320,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  paper.display();
  ground.display();
 
}



