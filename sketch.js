var wall1,wall2,wall3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 660);

	wall1 = createSprite(1000,598,20,100);
	wall1.shapeColor = "red";

	wall2 = createSprite(1075,650,170,20);
	wall2.shapeColor = "red";

	wall3 = createSprite(1150,598,20,100);
	wall3.shapeColor = "red";
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = Bodies.rectangle(100,100,20,20);
	World.add(world,paperObject);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(paperObject.position.x,paperObject.position.y,50,50);

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}