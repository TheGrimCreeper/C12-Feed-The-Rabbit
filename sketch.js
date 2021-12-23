var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg
var leafImg

var apple
var leaf


function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x = mouseX
  edges = createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round((random(1, 2)))

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      spawnApples();
    } else {
    spawnLeaves();
    }
  }


  drawSprites();
}

function spawnApples() {
  apple = createSprite((random(10, 400)), 10, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 10;
  apple.lifetime = 30;
  apple.scale = 0.1;
}


function spawnLeaves() {
  leaf = createSprite((random(10, 400)), 10, 10, 10)
  leaf.addImage(leafImg);
  leaf.velocityY = 10;
  leaf.lifetime = 30;
  leaf.scale = 0.1;


}