//Create variables here
var dog,happyDog,dogy;
var dataBase;
var foodS,foodStock;
function preload()
{
  //load images here
  happyDog=loadImage("images/dog1.png");
  dogy=loadImage("images/dog.png");

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogy);
  dog.scale = 0.20;

  foodStock = database.ref('Food');
foodStock.on("value",readstock);


  
}


function draw() {  
background(46,139,87);

if(keyWentDown){

writeStock(foods);
dog.addImage(happyDog);

}



  drawSprites();
}

function readstock(data){

foodS=data.val();

}

function writeStock(x){
  
if(x=0){
  x=0;
}
else{

x = x - 1;

}


dataBase.ref('/').update({


Food:x


})




}
