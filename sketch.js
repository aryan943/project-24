
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var dump1,dump2,dump3;

function preload(){}	
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1 = new Paper(100,100);
    ground1 = new Ground(400,600,800,50);
    dump1 = new Dumpster(500,525,10,100);
    dump2 = new Dumpster(550,575,100,10);
    dump3 = new Dumpster(600,525,10,100);
	Engine.run(engine);
  
}


function draw() {

  background(0);
   
  Engine.update(engine);

  keyPressed();
  paper1.display();
  ground1.display();
  dump1.display();
  dump2.display();
  dump3.display();
}
 function keyPressed(){
   if(keyDown(UP_ARROW)){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:42,y:-42});
   }
 }


