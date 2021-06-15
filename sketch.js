const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane;
var hammer;
var rubber;
var stone;
var iron;

function setup() {
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);

    rubber = new Rubber(900, 450, 70);

    stone = new Stone(600, 450, 100, 50);

    iron = new Iron(300, 450, 100, 100);
}

function draw() {
    background("lightBlue");
    Engine.update(engine);

    plane.display();

    hammer.display();

    rubber.display();

    stone.display();

    iron.display();

    if(isTouching(hammer, stone)) {
        fill("grey");
        textSize(30);
        text("Stone:", 1050, 50);
        fill("black");
        textSize(20);
        text("Density: 12", 1050, 75);
    }

    if(isTouching(hammer, iron)) {
        fill("grey");
        textSize(30);
        text("Iron:", 1050, 50);
        fill("black");
        textSize(20);
        text("Density: 30", 1050, 75);
    }

    if(isTouching2(hammer, rubber)) {
        fill("grey");
        textSize(30);
        text("Rubber:", 1050, 50);
        fill("black");
        textSize(20);
        text("Density: 1", 1050, 75);
    }
}

function isTouching(object1, object2) {
    if(object1.body.position.x - object2.body.position.x < object1.width / 2 + object2.width / 2 &&
    object2.body.position.x - object1.body.position.x < object1.width / 2 + object2.width / 2 &&
    object1.body.position.y - object2.body.position.y < object2.height / 2 + object1.height / 2 &&
    object2.body.position.y - object1.body.position.y < object2.height / 2 + object1.height / 2) {
        return true;
    } else {
        return false;
    }
}

function isTouching2(object1, object2) {
    if(object1.body.position.x - object2.body.position.x < object1.width / 2 + object2.r / 2 &&
    object2.body.position.x - object1.body.position.x < object1.width / 2 + object2.r / 2 &&
    object1.body.position.y - object2.body.position.y < object2.r / 2 + object1.height / 2 &&
    object2.body.position.y - object1.body.position.y < object2.r / 2 + object1.height / 2) {
        return true;
    } else {
        return false;
    }
}