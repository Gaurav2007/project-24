
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var ball1, log1,log2,log3;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ball1 =  crumpedBall(x,y,this.x,this.y,options);

	log1 = createSprite(470,350,10,100);
	log2 = createSprite(530,395,120,10);
	log3 = createSprite(590,350,10,100);

	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  
//ball1.display();

  drawSprites();
 
}