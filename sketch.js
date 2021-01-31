
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstaclesGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400)
monkey=createSprite(80,310,100,100);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  obstaclesGroup=new Group();
  bananaGroup=new Group();
  
  score=0;
}


function draw() {
  background("white");
  
   text("Score: "+ score, 500,75);
  
  
    if (ground.x < 150){
      ground.x = ground.width/2;
    }
  
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
    }
    
  monkey.velocityY = monkey.velocityY + 0.8 
  
  monkey.collide(ground);
  
  if(obstaclesGroup.isTouching(monkey))
  {
    monkey.destroy();
    obstaclesGroup.destroy();
    bananaGroup.destroy();
  
    
  }
  
  if(bananaGroup.isTouching(monkey))
  {
    score=score+3;
  }
    

  spawnObstacles();
  spawnBanana();
  
  drawSprites();
}

  function spawnObstacles()
{
    
 if(frameCount%300===0)
{
    obstacle=createSprite(600,310);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX= -3;
    obstacle.lifetime=600;
     obstacle.scale=0.2
    obstaclesGroup.add(obstacle);
  
    
  
     
   }

}


function spawnBanana()
{

  if(frameCount%80===0)
  {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
      banana.lifetime = 200;
    bananaGroup.add(banana);
    
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
     
  }

}



