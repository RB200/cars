var car, wall
var speed, weight
function setup() {
  createCanvas(1600,400);
  car = createSprite(100,200,50,50)
  wall = createSprite(1500,200,60, height/2)
  wall.shapeColor = (80,80,80)
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX = speed;
  console.log(weight)
  console.log(speed)
}

function draw() {
  
  background(0);  
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX=null;
  
var deformation= 0.5 * weight * speed * speed/22500;
if(deformation>180){
  car.shapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0)
}
if(deformation<100){
  car.shapeColor=color(0,255,0)
}
  }
  drawSprites();
}
