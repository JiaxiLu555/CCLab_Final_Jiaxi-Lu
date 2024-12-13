function setup()
{
   let cnavas = createCanvas(400, 400);
   cnavas.parent("sketch-container");
  
}
  function draw() {
  
  
  
   //square
   noStroke
   fill(242, 131, 114)
   square(54, 65, 300);
  
  
   //semi-circular
   noStroke;
   fill(252, 196, 187)
   circle(230, 230, 200);
  
   //small circle
   noStroke
   fill(212, 6, 37)
   circle(200,200,20)
  
   //purple rect
   noStroke();
   fill(85, 43, 171)
   rect(54,240,300,25)
  
   //purple rect
   noStroke();
   fill(158, 105, 219)
   rect(54,260,300,25)
//dark blue rect
noStroke();
fill(26, 42, 107)
rect(54,280,300,25)

//blue rect
noStroke
fill(11, 144, 227)
rect(54,300,300,25)

//light blue
noStroke
fill(78, 171, 230)
rect(54,320,300,25)

//very light blue
noStroke
fill(167, 218, 250)
rect(54,340,300,25)

}
