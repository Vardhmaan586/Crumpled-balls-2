var ground;
var dustbin1;
var dustbin2;
var dustbin3;
var paper;
var engine;
var world;
var dustbinImage;
var dustbin

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,800);

  dustbinImage = loadImage("dustbinImage.png")

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,750,800,20);
  dustbin1 = new Dustbin(600,685,13,100);
  dustbin2 = new Dustbin(720,685,13,100);
  dustbin3 = new Dustbin(660,740,110,13);
 //var pos = dustbin3.position;
  //image(dustbinImage,dustbin3.x,dustbin3.y,dustbin3.width,dustbin3.height);
  paper = new Paper(50,420,50,50);
 
}

function draw() {
  background("white");
  
 
  //image("dustbinImage.png",20,30,100,100);

  

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  //dustbinImage.display();
  imageMode(CENTER);
   image(dustbinImage,660,685,150,150);

   if(ground.depth === 1){
     dustbin.depth+1;
   }

  Engine.update(engine);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:122,y:-195});
  }
}