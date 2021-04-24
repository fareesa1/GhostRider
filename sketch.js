var Player,bg
var PlayerImage, bgImage;
var skeletonGroup, treeGroup

function preload (){
  PlayerImage = loadAnimation(
  "Run/14.png","Run/15.png","Run/16.png","Run/17.png","Run/18.png","Run/19.png")
bgImage = loadImage("BG/BG.png")
treeImage = loadImage("DeadBush.png")
SkeletonImage = loadImage("Skeleton.png")
  }

function setup() {
  createCanvas(800,390);
  Player = createSprite(60,300)
  Player.addAnimation("player_run",PlayerImage)
 ground =  createSprite(400, 380, 800, 20);
 ground.visible = true
 skeletonGroup = createGroup();
 treeGroup = createGroup();
}

function draw() {
 spawnTree()
 spawnSkeleton()
 if(keyDown("space")&&Player.y>300){
Player.velocityY = -12
 }
 Player.collide(ground)
  Player.velocityY += 0.8
  background(bgImage);
 if(Player.isTouching(treeGroup)){
  Player.velocityY = 0
  ground.velocityX = 0
  skeletonGroup.setVelocityXEach(0);
 treeGroup.setVelocityXEach(0);
 }
 if(Player.isTouching(skeletonGroup)){
  Player.velocityY = 0
  ground.velocityX = 0
  skeletonGroup.setVelocityXEach(0);
 treeGroup.setVelocityXEach(0);
 }
  drawSprites();
} 

// obscles

function spawnTree(){
   if(frameCount%170==0){
tree = createSprite(800,350,30,80)
 tree.addImage(treeImage)
 tree.scale = 0.5
 tree.velocityX = -5
 treeGroup.add(tree)
   }
}

function spawnSkeleton(){
  if(frameCount%100==0){
    Skeleton = createSprite(800,357,30,80)
    Skeleton.addImage(SkeletonImage)
    Skeleton.scale = 0.5
    Skeleton.velocityX = -5
    skeletonGroup.add(Skeleton)
  }
}
