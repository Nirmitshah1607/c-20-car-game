//Program to make algorithm for collision sprites
var wall, car;
function preload(){
    carImage=loadImage("car.png")



}
function setup()
{
    createCanvas(1000,600)

    wall=createSprite(800,100,100,650);
    car=createSprite(100,200,60,300)
    wall.shapeColor=car.shapeColor="yellow"
    car.addImage(carImage)
car.velocityX=12;
}
function draw()
{
    background(0);
     

     console.log("Width Gap " + (wall.x-car.x )+ " "+(wall.width/2+car.width/2))
     console.log("Height Gap "+ (wall.y-car.y )+ " " +(wall.height/2+car.height/2))
     
     //collision algorithm
    if(Math.abs(wall.x-car.x)<=(wall.width/2+car.width/2) )
    
    {
        car.velocityX=car.velocityX*-1
    }
   // && (Math.abs(wall.y-car.y)<=(wall.height/2+car.height/2))){
     //   wall.shapeColor=car.shapeColor="blue"//
    
    drawSprites();
}