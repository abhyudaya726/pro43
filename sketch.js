


var h;
var m;
var s;

var secAngle;


function setup() {
  createCanvas(800,600);
}

function draw() {
  background(255,255,255);

  h = hour();
  m = minute();
  s = second();

  text(h+":"+m+':'+s,400,500);
    
  secAngle = map(s,0,60,0,360);
  minAngle = map(m,0,60,0,360);
  hAngle = map(h,0,12,0,360);

  translate(400,200);
  rotate(275);
  hands();
}

function hands(){
  //secondsHand

  push();
  rotate(secAngle);
  angleMode(DEGREES);
  translate(0,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  //minutesHand

  push();
  rotate(minAngle);
  angleMode(DEGREES);
  translate(0,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  //hoursHand

  push();
  rotate(hAngle);
  angleMode(DEGREES);
  translate(0,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();
}