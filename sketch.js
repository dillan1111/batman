const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops;
var drops = [];

function preload(){

    
}

function setup(){
    canvas = createCanvas(displayWidth/2 , displayHeight);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(displayWidth/4, displayHeight-10);
    

   
    var maxDrops = 100;
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
}

function draw(){
    background('black');
    Engine.update(engine);

    umbrella.display();
    drops.display();
    drops.update();

    drawSprites();
}   
