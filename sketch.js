const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var hero, ground, monster, fly, block1, block12, block3, block4, block5, block6, block7,
 block8, block9, block10, block11,block12, block13, block14;
var backgroundImg;



function preload() {
//preload the images here
backgroundImg = loadImage("images/sky.jpg");


}

function setup() {

  engine = Engine.create();
  world = engine.world;

 var canvas = createCanvas(1000, 500);
 // sprite = createSprite
  hero = new Hero(300, 100, 20);
  ground = new Ground(600, 490, 1200, 20);
  monster = new Monster(900, 400);
  fly = new Fly(hero.body, {x:200, y:50});
  block1 = new Block(550, 460);
  block2 = new Block(550, 420);
  block3 = new Block(550, 380);
  block4 = new Block(550, 340);
  block5 = new Block(550, 300);
  block6 = new Block(550, 260);
  block7 = new Block(590, 460);
  block8 = new Block(590, 420);
  block9 = new Block(590, 380);
  block10 = new Block(590, 340);
  block11 = new Block(590, 300);
  block12 = new Block(630, 460);
  block13 = new Block(630, 420);
  block14 = new Block(630, 380);
  block15 = new Block(630, 340);
  block16 = new Block(670, 460);
  block17 = new Block(670, 420);
  block18 = new Block(670, 380);
  // create sprites here

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  hero.display();
  fly.display();
  monster.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

