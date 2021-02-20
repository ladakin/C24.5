
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper (100,600,50);
	ground = new Ground(600,height,1200,20)


	dustbin1= new Dustbin(600,680,200,20);
	dustbin2=new Dustbin(500,615,20,150);
    dustbin3=new Dustbin(700,615,20,150);

   
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
  paper.display();

  ground.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});
}
}


