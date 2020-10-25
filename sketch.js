
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, treeIMG, boy, boyIMG, mango, boy, stone;
function preload()
{
boyIMG=loadImage("boy.png");
treeIMG=loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	boy = createSprite(200, 600);
	boy.scale = 0.09;
	tree = createSprite(900, 400);
	tree.scale = 0.4
	//Create the Bodies Here.
	boy.addImage(boyIMG);
	tree.addImage(treeIMG);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 mango1 = new Mango(850, 375, 30);
	 mango2 = new Mango(1000, 350, 30);
	 mango3 = new Mango(900, 250, 30);
	 mango4 = new Mango(950, 200, 30);
	 mango5 = new Mango(800, 300, 30);
	 mango6 = new Mango(750, 350, 30);
	 stone = new Stone(180, 150, 30);
	 constraint = new Chain(stone.body, {x: 130, y: 515});

	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
stone.display();
constraint.display();
detectcollision(mango1, stone);
detectcollision(mango2, stone);
detectcollision(mango3, stone);
detectcollision(mango4, stone);
detectcollision(mango5, stone);
detectcollision(mango6, stone);
 rect(this.ground.position.x, this.ground.position.y, width, 10);
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})

}

function mouseReleased() {
 constraint.fly();   
}

function detectcollision(object1, object2){
object1BodyPosition = object1.body.position;
object2BodyPosition = object2.body.position;

var distance=dist(object1.body.position.x, object1.body.position.y, object2.body.position.x, object2.body.position.y);
if(distance<=object1.r + object2.r){
Matter.Body.setStatic(object1.body, false);
}
}



