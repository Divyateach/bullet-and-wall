var bullet,wall,bulletRightEdge,wallLeftEdge,lbullet,lwall;


var thickness,speed, weight; 


function setup() {
  createCanvas(1600, 400);

	thickness=random(22,83);
	speed=random(223,321)
	weight=random(30,52)


	bullet=createSprite(50, 200, 100,30);   

	bullet.velocityX = speed;

	bullet.shapeColor="white";


  
  	wall=createSprite(1200,200,thickness, height/2)
  	wall.shapeColor="grey"
}


function draw() {
  background(200);

    if(hascollided(bullet,wall)){
		bullet.velocityX=0;
		var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

		if(damage>10){
			wall.shapeColor="red";
		}
		if(damage<10){
			wall.shapeColor="green";
		}
	}
  
  drawSprites();
 
}
function hascollided(Lbullet,Lwall){
	bulletRightEdge=Lbullet.x+Lbullet.width;
	wallLeftEdge=Lwall.x;
	if(bulletRightEdge>=wallLeftEdge){
		return true;
	}
		return false;
}