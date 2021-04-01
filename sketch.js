const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mainGround,ground1,ground2;
var polygon;
var string;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;

var box17,box18,box19,box20,box21,box22,box23;
var box24,box25;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    mainGround = new Ground(600,590,1200,20);
    ground1 = new Ground(410,400,250,10);
    ground2 = new Ground(790,200,170,10);

    polygon = new Polygon(100,400,50,50);

    string = new String(polygon.body,{x:100,y:400});

    box1 = new Box1(320,380);
    box2 = new Box1(350,380);
    box3 = new Box1(380,380);
    box4 = new Box1(410,380);
    box5 = new Box1(440,380);
    box6 = new Box1(470,380);
    box7 = new Box1(500,380);

    box8 = new Box2(350,340);
    box9 = new Box2(380,340);
    box10 = new Box2(410,340);
    box11 = new Box2(440,340);
    box12 = new Box2(470,340);

    box13 = new Box1(380,300);
    box14 = new Box1(410,300);
    box15 = new Box1(440,300);

    box16 = new Box2(410,260);

    box17 = new Box2(730,175);
    box18 = new Box2(760,175);
    box19 = new Box2(790,175);
    box20 = new Box2(820,175);
    box21 = new Box2(850,175);

    box22 = new Box1(760,135);
    box23 = new Box1(790,135);
    box24 = new Box1(820,135);

    box25 = new Box2(790,95);


}

function draw(){
    background("black");
    Engine.update(engine);
    
    
 
    drawSprites();

    mainGround.display();
    ground1.display();
    ground2.display();

    polygon.display();

    string.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();

    box25.display();

   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}

function keyPressed(){
    if(keyCode === 32){
        string.restart(polygon.body);
    }

}