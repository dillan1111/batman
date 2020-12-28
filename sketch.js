const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world


var drops = [];
var maxDrops = 100;

var umbrella, umbrellaBoy;
var thunder;
var thunderCreatedFrame;
var thunder1, thunder2, thunder3, thunder4


function preload(){
    umbrellaBoy = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png",
        "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png",
        "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png", )
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
 
}

function setup(){
    //canvas = createCanvas(displayWidth/2 , displayHeight);
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,500)
    
    
    umbrella = createSprite(200,415, 10, 10);
    umbrella.addAnimation("umbrella", umbrellaBoy);
    umbrella.scale = 0.25;
    
    umbrellaFake = new Umbrella(200,400);
    
    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
    
    
}
function draw(){
    Engine.update(engine);
    background('black');

    var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount; 
        thunder = createSprite(random(200,300), random(30,50), 10, 10);
        thunder.scale = random(0.3, 0.7);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
    }
    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

    umbrellaFake.display();
    
    
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }


    drawSprites();
}   
