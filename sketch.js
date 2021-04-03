var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  manImg3=loadAnimation("images/mainPlayer2.png");
  //creating continous opponeent players
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
//creating main2
  main2=createSprite(100,100,10,50);
 main2.addAnimation("main",mainRacerImg2);
  main2.scale=0.1;
  
  //creating man3
  man3=createSprite(100,100,20,20);
  man3.addAnimation("man",manImg3);
  man3.scale=0.1;
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  main2Img=false
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
 }
  if(gameState===END)
    main2=true
}