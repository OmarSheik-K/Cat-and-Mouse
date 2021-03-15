var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;
var gardenImg;

function preload() {
    //load the images here
    cat1 = loadImage("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3 = loadImage("images/cat4.png");
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3 = loadImage("images/mouse4.png");
    gardenImg = loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat = createSprite(870, 600, 10, 10);
    cat.addAnimation("catWalk", cat2);
    cat.addImage(cat1);
    cat.scale = 0.2;
    mouse = createSprite(200, 600, 10, 10);
    mouse.addAnimation("mouseTease", mouse2);
    mouse.addImage(mouse1);
    mouse.scale = 0.15;
}

function draw() {
    background(gardenImg);
    //Write condition here to evalute if cat and mouse collide
    if(cat.x-mouse.x <= (mouse.width/2 - cat.width/2)) {
        cat.velocityX=0;
        cat.addImage("catLastImage", cat3);
        cat.x =300;
        cat.changeImage("catLastImage");
        mouse.addImage("mouseLastImage", mouse3);
        mouse.scale=0.15;
        mouse.changeImage("mouseLastImage");
    }
   
    drawSprites();
}


function keyPressed(LEFT_ARROW){
  //For moving and changing animation write code here
  cat.velocityX = -10;
  cat.changeAnimation("catWalk");

  mouse.changeAnimation("mouseTease");
  mouse.frameDelay = 25;
}
