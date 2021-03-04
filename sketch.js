const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var boy, boyImg;

var thunder1, thunder2, thunder3, thunder4, thunder1Img, thunder2Img, thunder3Img, thunder4Img;

var rain;

function preload(){

    boyImg = loadAnimation("walking_8.png", "walking_7.png", "walking_6.png", "walking_5.png", "walking_4.png", "walking_3.png", "walking_2.png", "walking_1.png");
    
    thunder1Img = loadImage("1.png");

    thunder2Img = loadImage("2.png");

    thunder3Img = loadImage("3.png");

    thunder4Img = loadImage("4.png");

}

function setup(){

    createCanvas(400, 700);

    engine = Engine.create();
    world = engine.world;

    boy = createSprite(200, 520);
    boy.addAnimation("boyImg", boyImg);
    boy.scale = 0.4;
   
    thunder1 = createSprite(50, 100);
    thunder1.addImage("thunder1Img", thunder1Img);
    thunder1.scale = 0.3;

    thunder2 = createSprite(150, 100);
    thunder2.addImage("thunder2Img", thunder2Img);
    thunder2.scale = 0.3;

    thunder3 = createSprite(265, 100);
    thunder3.addImage("thunder3Img", thunder3Img);
    thunder3.scale= 0.3;

    thunder4 = createSprite(350, 100);
    thunder4.addImage("thunder4Img", thunder4Img);
    thunder4.scale = 0.3;

    rain = new Rain(300, 200, 10, 10);

}

function draw(){

    background(0);

    Engine.update(engine);

    rain.display();

    drawSprites();
    
}   
