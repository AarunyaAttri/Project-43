var hr;
var mn;
var sc;
var hr_angle,mn_angle,sc_angle;
var backgroundImg;

function preload() {
    getBackgroundImg();
}

function setup() {
  createCanvas(400,450);
  //createSprite(0, 0, 50, 50);
}

function draw(){
  if(backgroundImg){  
  background(backgroundImg);  
  }   
  hr=hour();
  mn=minute();
  sc=second();

  angleMode(DEGREES);

  
  hr_angle=map(hr%12,0,12,0,360);
  
  mn_angle=map(mn,0,60,0,360);
  sc_angle=map(sc,0,60,0,360);

  translate(200,200);
  
  rotate(-90);

  //second
  push();
  noFill();
  strokeWeight(9);
  stroke("red");
  arc(0, 0, 300, 300,0,sc_angle );
  rotate(sc_angle);
  line(0,0,100,0);
  pop();

  //minute
  push();
  noFill();
  strokeWeight(9);
  stroke(1, 252, 10);
  arc(0,0,280,280,0,mn_angle);
  rotate(mn_angle);
  line(0,0,75,0);
  pop();

  //hour
  push();
  noFill();
  strokeWeight(9);
  stroke(1,2,246);
  arc(0,0,260,260,0,hr_angle);
  rotate(hr_angle);
  line(0,0,75,0);
  pop();

  drawSprites();
//  console.log(hr)
  console.log(sc_angle);
 // console.log(sc)
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg2.png";
    }
    else{
        bg = "bg1.jpg";
    }

    backgroundImg = loadImage(bg);
}
