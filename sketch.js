const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1, ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

var ballopt = {
    restitution: 1.5
}

ball1= Bodies.circle(200,100,30,ballopt);
World.add(world,ball1);

ball2= Bodies.circle(100,100,30,ballopt);
World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    rectMode(CENTER);
    strokeWeight(6);
    stroke("blue");
    fill ("black");
    rect(ground.position.x,ground.position.y,400,20);
    
    ellipseMode(RADIUS);
    fill ("blue");
    ellipse(ball1.position.x,ball1.position.y,20,20);
    fill ("red");
    ellipse(ball2.position.x,ball2.position.y,20,20);

    drawSprites();
}