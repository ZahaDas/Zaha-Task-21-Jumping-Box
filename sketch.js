var music;
var surface1, surface2, surface3, surface4; 
var box; 
var topEdge, bottomEdge, leftEdge,  rightEdge;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

     surface1=createSprite (100,590,150,10);
    surface1.shapeColor = "yellow";

    surface2 = createSprite(300,590,150,10);
    surface2.shapeColor = "red";

    surface3 = createSprite(500,590,150,10);
    surface3.shapeColor = "green";

    surface4 = createSprite(700,590,150,10);
    surface4.shapeColor = "blue";

    box = createSprite(random(20,750),300,40,40);
    box.shapeColor = "white";
    box.velocityX = 4.5;
    box.velocityY = -4.5;

    topEdge = createSprite (400,1,800,1);
    topEdge.shapeColor = "black"; 

    bottomEdge = createSprite (400,600,800,1);
    bottomEdge.shapeColor = "black";

    leftEdge = createSprite (1,300,1,600);
    leftEdge.shapeColor = "black";

    rightEdge = createSprite (800,300,1,600);
    rightEdge.shapeColor = "black";

 
}

function draw() {
    background(0,0,0);
 
    box.bounceOff (topEdge);
    box.bounceOff (leftEdge);
    //box.bounceOff (bottomEdge);
    box.bounceOff (rightEdge);

    if (surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "yellow";
        music.play();
    }

    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "red";
        music.stop();
    }

    if (surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if (surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "blue"; 
    }
 

     drawSprites ();
}
