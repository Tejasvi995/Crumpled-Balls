var engine, world;
var paper;
var left, bottom, right;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,648,14);
	ground = new Ground(width/2, 650, width, 15);
	left = new Dustbin(810,578,20,100);
	bottom = new Dustbin(910,630,200,20);
	right = new Dustbin(1010,578,20,100);
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  paper.display();
  left.display();
  bottom.display();
  right.display();
  ground.display();
 
  keyPressed();
  drawSprites();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:12, y:-13 })
	}
 }

