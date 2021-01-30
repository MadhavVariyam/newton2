
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(200,500,25)
	bobObject2 = new bob(210,500,25)
	bobObject3 = new bob(230,500,25)
	bobObject4 = new bob(320,500,25)
	bobObject5 = new bob(370,500,25)
	Roof1 = new roof(270,200,400,25)
	Rope1 = new rope(bobObject1.body,Roof1.body);
	Rope2 = new rope(bobObject2.body,Roof1.body);
	Rope3 = new rope(bobObject3.body,Roof1.body);
	Rope4 = new rope(bobObject4.body,Roof1.body);
	Rope5 = new rope(bobObject5.body,Roof1.body);
	Engine.run(engine);	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Roof1.display();
  Rope1.display();
  drawSprites();
 
}


