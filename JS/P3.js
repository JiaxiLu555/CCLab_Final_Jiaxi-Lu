let moonSize = 120;
let starX1 = 0;
let starX2 = 0;
let starX3 = 0;
let starY1 = 0;
let starY2 = 0;
let starY3 = 0;
let starSpeed = 2;
function setup()
{
 let canvas = createCanvas(600, 600);
 background(0);
 starX1 = random(width);
 starX2 = random(width);
 starX3 = random(width);
 canvas.parent("sketch-container");
}


function draw() {
 background(0, 15);
 noStroke();


 fill(255);
 ellipse(300, 300, moonSize, moonSize);
 let t = second();
 let maskX = map(t, 0, 60, 300 - moonSize, 300 + moonSize);
 fill(0);
 ellipse(maskX, 300, moonSize, moonSize);
 let rectWidth = map(t, 0, 60, 0, width);
 fill(255);
 rect(0, 450, rectWidth, 20);
 fill(252, 207, 115);
 ellipse(starX1, starY1, 10);
 ellipse(starX2, starY2, 10);
 ellipse(starX3, starY3, 10);
 if (starX1 > width) {
   starX1 = random(width);
   starY1 = 0;
 } else {
   starX1 += starSpeed;
   starY1 += starSpeed / 2;
 }
 if (starX2 > width) {
   starX2 = random(width);
   starY2 = 0;
 } else {
   starX2 += starSpeed;
   starY2 += starSpeed / 2;
 }


 if (starX3 > width) {
   starX3 = random(width);
   starY3 = 0;
 } else {
   starX3 += starSpeed;
   starY3 += starSpeed / 2;
}
}
