let bg;
let mouthSize, eyeSize, earSize;
function setup()
{
 let canvas = createCanvas(400, 400);
 bg = color(random(255), random(255), random(255));
 mouthSize =1
 eyeSize =1
 earSize = 1
 canvas.parent("sketch-container");
}
function mousePressed() {
 bg = color(random(255), random(255), random(255));
}
function keyPressed() {
 mouthSize = random(0.85, 2);
 eyeSize = random(0.5, 2);
 earSize = random(0.5, 2.5);
}
function draw() {
 background(bg);


 let faceSize = mouseX * 0.5 + mouseY * 0.5 + width / 2;
 //month
 fill(255);
 ellipse(
   width / 2,
   height / 2 + faceSize * 0.1,
   faceSize * 0.2 * mouthSize,
   faceSize * 0.17 * mouthSize
 );
 //nose
 fill(0);
 quad(
   faceSize * 0.07 + width / 2,
   -faceSize * 0.04 + height / 2,
   -faceSize * 0.07 + width / 2,
   -faceSize * 0.04 + height / 2,
   -faceSize * 0.03 + width / 2,
   faceSize * 0.03 + height / 2,
   faceSize * 0.03 + width / 2,
   faceSize * 0.03 + height / 2
 );


 //left eye
 fill(0);
 ellipse(
   -faceSize * 0.17 + width / 2,
   -faceSize * 0.17 + height / 2,
   faceSize * 0.1 * eyeSize
 );
 //right eye


 ellipse(
   faceSize * 0.17 + width / 2,
   -faceSize * 0.17 + height / 2,
   faceSize * 0.1 * eyeSize
);
fill(255);
//left ear
ellipse(
  -faceSize * 0.27 + width / 2,
  -faceSize * 0.37 + height / 2,
  faceSize * 0.12 * earSize,
  faceSize * 0.1 * earSize
);
//right ear
ellipse(
  faceSize * 0.27 + width / 2,
  -faceSize * 0.37 + height / 2,
  faceSize * 0.12 * earSize,
  faceSize * 0.1 * earSize
);
}

