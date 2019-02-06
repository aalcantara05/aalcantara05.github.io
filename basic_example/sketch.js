var r1 = 0;
var r2 = 0;

function setup() {
    stroke(0);
    noFill();
    rectMode(CENTER);
    var cnv = createCanvas(800, 400);
    //var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block'); //KEEP
    cnv.parent('content');//KEEP
//    cnv.position(-width/2,0);
    
}

function draw() {//changes fill color
  background(302);//changes background color
  
  push();
  translate(width*0.2, height*0.6);//changes 3point position
  rotate(frameCount / 100.0);//rotation speed
  star(2, 2, 3, 160, 5);//changes points,size,stroke
  pop();
  
  push(30);
  translate(width*0.5, height*0.5);//changes position
  rotate(frameCount / 25.0);//changes rotation speed
  star(0, 0, 40, 200, 20);//size,points,length
  pop();//?
  
  push();
  translate(width*0.8, height*0.3);//star location
  rotate(frameCount / -50.0);//speed rotation
  star(3, 3, 30, 80, 6);//changes star shape,points
  pop(5000);//speed
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

