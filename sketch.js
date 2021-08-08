var boy,boyAni;
var road,roadImg;
var left_wall;
var right_wall;
// var score;
// var lives;
// var drink,drinkImg;
// var coin,coinImg;
// var bomb,bombImg;

function preload(){
    roadImg = loadImage("path.png");

    boyAni = loadAnimation("Runner-1.png","Runner-2.png");

//     drinkImg = loadImage("energyDrink.png");

//     coinImg = loadImage("coin.png");

//     bombImg = loadImage("bomb.png");
}

function setup(){
    createCanvas(400,900);

    road = createSprite(200,450,400,900);
    road.addImage("track",roadImg);

    boy = createSprite(200,600);
    boy.addAnimation("runner",boyAni);
    boy.scale = 0.07;

    // drink = createSprite(randomNumber(20,380),-70);
    // drink.addImage("energy",drinkImg);
    // drink.scale = 0.02;

    // coin = createSprite(randomNumber(20,380),-20);
    // coin.addImage("gold",coinImg);
    // coin.scale = 0.01;

    // bomb = createSprite(randomNumber(20,380),-50);
    // bomb.addImage("dynamite",bombImg);
    // bomb.scale = 0.03;

    // score = 0;
    
    // lives = 5;

    left_wall = createSprite(10,450,120,900);
    right_wall = createSprite(390,450,120,900);
}

function draw(){
    background(0);
    textSize(20);

    // text("Score: " + score,50,30);
    // text("Lives Left" + lives,40,40);

    road.velocityY = 5;
    // drink.velocityY = 7;
    // coin.velocityY = 6;

    if(road.y == 500)
     {
         road.y = 450;
     }

    // if(drink.y == 1000)
    //  {
    //      drink.y = -1000;
    //  } 

    // if(coin.y == 970)
    //  {
    //     coin.y = -30;
    //  } 

    // if(drink.collide(boy))
    //  {
    //      drink.y = -1000;
    //      lives = lives + 1;
    //  } 

    // if(coin.collide(boy))
    //  {
    //     coin.y = -30;
    //  }

    // if(bomb.y == 930)
    //  {
    //      bomb.y = -100;
    //  } 

    // if(bomb.collide(boy))
    //  {
    //      bomb,y = -100;
    //      lives = lives - 1;
    //  }
     
    // if(lives == 0)
    //  {
    //      text("You died",200,450);
    //  } 

    boy.x = mouseX;
    boy.collide(left_wall);
    boy.collide(right_wall);

    left_wall.visible = false;
    right_wall.visible = false;

    drawSprites();
}

// Note:- the obstacles and collectibles are not allowing to give the result and in the console tab of the inspect option, it is showing that some 
// commands like random numbers are not defined in the libraries.