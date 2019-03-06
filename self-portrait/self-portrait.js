let eyebrowY = 235;
let mouthH = 49;


function setup() {
  createCanvas(520, 520);
}

function draw() {
  background(255);

  //Hair
  noStroke()
  fill(32, 19, 19);
  arc(260, 260, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);//

  //Face 
  noStroke()
  fill(230, 164, 83);
  ellipse(260, 255, 200, 260);

  //Ears
  arc(370, 265, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN)

  //Bang
  noStroke()
  fill(32, 19, 19);
  arc(300, 150, 150, 100, 0, PI + QUARTER_PI, CHORD);
  arc(180, 120, 140, 148, 0, 0.75 * Math.PI);


  //Eyebrows
  stroke(11, 10, 19);
  strokeWeight(5);
  noFill();
  arc(210, eyebrowY, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 235, 45, 15, PI, TWO_PI, OPEN);

  //Eyes
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(210, 260, 28, 25);
  ellipse(310, 260, 28, 25);

  //Eyeballs
  noStroke()
  fill(255)
  ellipse(207, 252, 8, 8);
  ellipse(306, 252, 8, 8);

  //Nose
  fill(247, 221, 155, )
  triangle(260, 270, 270, 300, 250, 300);

  //Mouth
fill(240, 40, 33);
  arc(260, 325, mouthH, 35, 0, PI);

  //Hoodie
  rectMode(CENTER)
  //fill(255, 153, 202)//
  rect(260, 470, 205, 150, 20);//shirt
  

  //Neck
  fill(230, 164, 83)
  rect(260, 380, 50, 55, 20);











}

function mousePressed(){
eyebrowY = 225;
mouthH = 59;
}

function mouseReleased() {
  eyebrowY = 235;
  mouthH = 49;
}
