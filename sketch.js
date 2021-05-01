const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,500,70,70);
    box2 = new Box(910,500,70,70);
    box3 = new Box(700,400,70,70)
    box4 = new Box(910,400,70,70)
    box5 = new Box(805,350,70,70)
    ground = new Ground(600,height,1200,20)

    pig1 = new Pig(805,550)
    pig2 = new Pig(805,400)
    log1 = new Log(805,450,280,PI/2)
    log2 = new Log(805,380,280,PI/2)
    log3 = new Log(720,300,140,PI/7)
    log4 = new Log(900,300,140,-PI/7)
    bird1 = new Bird(100,300)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();

}