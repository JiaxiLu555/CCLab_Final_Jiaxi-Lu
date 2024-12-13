let hand1, hand2, body
let eyeOpen = false
let r, g, b
function preload() {
 hand1 = loadImage('../Images/P4/left.jpg')
 hand2 = loadImage('../Images/P4/right.jpg')
 body = loadImage('../Images/P4/body.png')
}
function setup()
{
   let canvas = createCanvas(400, 600);
   canvas.parent("sketch-container");
 body.resize(200, 250)
 hand1.resize(150, 200)
 hand2.resize(150, 200)


 background(204);
 r = random(50, 200)
 g = random(50, 200)
 b = random(50, 200)
 }


function draw() {
 background(255)
 imageMode(CENTER)
 image(body, 200, 300)
 image(hand1, 67, 387)
 image(hand2, 353, 386)
 if (mouseY < 130) {
   head(194, mouseY, 90, eyeOpen)
 } else {
   head(194, 130, 90, eyeOpen)
 }
 leg(color(r + 50, g, b), color(r + 10, g + 10, b + 10), color(r + 40, g, b + 30), color(r + 10, g - 20, b - 10))
}
function leg(c1, c2, c3, c4) {
 fill(c1)
 beginShape()
 vertex(257, 424)
 vertex(269, 440)
 vertex(213, 447)


 vertex(149, 436)
 vertex(152, 423)
 endShape()
 fill(c2)




 beginShape()
 vertex(210, 446)
 vertex(178, 501)
 vertex(140, 522)
 vertex(172, 530)
 vertex(191, 546)
 vertex(187, 555)
 vertex(170, 554)
 vertex(110, 531)
 vertex(105, 520)
 vertex(142, 462)
 vertex(149, 435)
 endShape()
 beginShape()
 vertex(420 - 210, 446)
 vertex(420 - 178, 501)
 vertex(420 - 140, 522)
 vertex(420 - 172, 530)
 vertex(420 - 191, 546)
 vertex(420 - 187, 555)
 vertex(420 - 170, 554)
 vertex(420 - 110, 531)
 vertex(420 - 105, 520)
 vertex(420 - 142, 462)
 vertex(415 - 149, 435)
 endShape()
 fill(c3)


 ellipse(213, 440, 60, 44)
 ellipse(213, 440, 38, 26)
 fill(c4)


 beginShape()
 vertex(191, 540)
 vertex(201, 565)
 vertex(184, 566)
 vertex(150, 564)
 vertex(145, 560)
 vertex(169, 553)
 endShape()
 beginShape()
 vertex(242, 552)
 vertex(262, 558)
 vertex(252, 565)
 vertex(218, 565)
 vertex(219, 550)
 vertex(227, 542)
 endShape()


}
function head(x, y, s, open) {
 fill(255)
 quad(151, 175, x - s / 2, y, x + s / 2, y, 244, 174)
 strokeWeight(2)
 triangle(x - s * 0.34, y - s * 0.25, x - s * 0.48, y - s * 0.12, x - s * 0.48, y - s * 0.44)
 triangle(x + s * 0.34, y - s * 0.25, x + s * 0.48, y - s * 0.12, x + s * 0.48, y - s * 0.44)


 arc(x, y, s, s, PI, TWO_PI)
 triangle(x - s * 0.3, y, x + s * 0.3, y, x, y + s * 0.35)
 ellipse(x - s / 4, y, s * 0.5)
 ellipse(x + s / 4, y, s * 0.5)
 if (open) {
   fill(0)


   arc(x + s / 4, y, s * 0.25, s * 0.25, 0, PI)
   arc(x - s / 4, y, s * 0.25, s * 0.25, 0, PI)


 } else {
   noFill();
   arc(x + s / 4, y, s * 0.25, s * 0.25, 0, PI)
   arc(x - s / 4, y, s * 0.25, s * 0.25, 0, PI)


 }
}
function mousePressed() {
 eyeOpen = !eyeOpen
 r = random(50, 200)
 g = random(50, 200)
 b = random(50, 200)
}



