let angleOffset = 0; // Variable to control the rotation


function setup()
{
 let canvas = createCanvas(600, 600);
 noStroke();
 canvas.parent("sketch-container");
}


function draw() {
 background(240); // Set the background to light gray
 let numRings = 5; // Number of rings in each pattern
 let maxRadius = 100; // Maximum radius of each pattern
 let patternSpacing = 200; // Spacing between patterns


 // Loop through a grid to draw the pattern multiple times
 for (let xPos = 0; xPos < width; xPos += patternSpacing) {
   for (let yPos = 0; yPos < height; yPos += patternSpacing) {
    
     // Loop through the rings to draw larger shapes
     for (let i = 0; i < numRings; i++) {
       let radius = map(i, 0, numRings, 50, maxRadius);
       let numShapes = int(map(i, 0, numRings, 8, 40)); // Number of shapes per ring


       push();
       translate(xPos + patternSpacing / 2, yPos + patternSpacing / 2); // Move to the position in the grid
       rotate(angleOffset + i * 0.02); // Slow rotation for each ring
// Draw the shapes around the ring, forming a larger combined shape
for (let j = 0; j < numShapes; j++) {
    let angle = map(j, 0, numShapes, 0, TWO_PI);
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;


    // Set the color based on the position in the ring
    if (i % 2 == 0) {
      fill(0, 150, 255, 150); // Light blue with some transparency
    } else {
      fill(255, 100, 150, 150); // Light pink with some transparency
    }


    // Draw larger ellipses for the combined shape effect
    ellipse(x, y, 60, 60); // Larger size for each ellipse
  }


  pop();
}
}
}


// Increment angle offset more slowly for a slower rotation effect
angleOffset += 0.003;
}
