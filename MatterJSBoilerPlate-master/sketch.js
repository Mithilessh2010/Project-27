
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var hook1,hook2,hook3,hook4,hook5;
var rope1, rope2, rope3, rope4, rope5;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(300, 100, 50);
	bobObject2 = new Bob(350, 100, 50);
	bobObject3 = new Bob(400, 100, 50);
	bobObject4 = new Bob(450, 100, 50);
	bobObject5 = new Bob(550, 100, 50);

	roof = new Roof(400, 100, 1200, 50);

	// creating hooks
	hook1 = new Hook(300,100,50,50)
	hook2 = new Hook(350,100,50,50)
	hook3 = new Hook(400,100,50,50)
	hook4 = new Hook(450,100,50,50)
	hook5 = new Hook(500,100,50,50)


	// creating the ropes
	rope1 = new Chain(bobObject1.body, hook1.body);
	rope2 = new Chain(bobObject2.body, hook2.body);
	rope3 = new Chain(bobObject3.body, hook3.body);
	rope4 = new Chain(bobObject4.body, hook4.body);
	rope5 = new Chain(bobObject5.body, hook5.body);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("lightgray");
	Engine.update(engine);

	// displaying
	roof.display();

	rope1.display();
	bobObject1.display();

	rope2.display();
	bobObject2.display();

	rope3.display();
	bobObject3.display();

	rope4.display();
	bobObject4.display();

	rope5.display();
	bobObject5.display();

	hook1.display();
	hook2.display();
	hook3.display();
	hook4.display();
	hook5.display();
}



