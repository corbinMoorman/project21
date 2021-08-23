var ball


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

var ground_options={
	isStatic: true
  };
	engine = Engine.create();
	world = engine.world;

    ball = Bodies.circle(150,100,10,ball_options);
	World.add(world,ball);
    
	ground = Bodies.rectangle(200,550,1600,20,ground_options);
  World.add(world,ground);
   
wall1 = Bodies.rectangle(650,500,40,200,ground_options);
World.add(world,wall1);


wall2 = Bodies.rectangle(800,500,40,200,ground_options);
World.add(world,wall2);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  
  background(0);
  rect(ground.position.x,ground.position.y,1600,20);
  ellipse(ball.position.x,ball.position.y,20);
  rect(wall1.position.x,wall1.position.y,20,125);
  rect(wall2.position.x,wall2.position.y,20,125);
  drawSprites();
 
}


function keyPressed(){
 if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:4,y:2})
 }
}
