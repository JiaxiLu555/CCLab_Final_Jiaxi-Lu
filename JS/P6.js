let visualData;
let bubbles = [];


function preload() {
 // Simulated data about visual languages (Facebook entry removed)
 visualData = [
   { platform: "Instagram", hours: 2.5, users: 300, visual: "Memes" },
   { platform: "Reddit", hours: 3.0, users: 400, visual: "GIFs" },
   { platform: "Twitter", hours: 1.8, users: 250, visual: "Emojis" },
   { platform: "TikTok", hours: 4.0, users: 500, visual: "Memes" }
 ];
}


function setup()
{
 let canvas = createCanvas(800, 400);
 textSize(14);
 canvas.parent("sketch-container");
  // Initialize bubbles with motion attributes
 for (let i = 0; i < visualData.length; i++) {
   let bubble = {
     data: visualData[i],
     x: random(100, width - 100),
     y: random(100, height - 100),
     xSpeed: random(1, 3),
     ySpeed: random(1, 3),
     size: map(visualData[i].users, 0, 500, 50, 150)
   };
   bubbles.push(bubble);
 }
}


function draw() {
 background(255);
  // Update and display bubbles
 updateBubbles();
 drawLabels();
}


// Update bubble positions and draw them
function updateBubbles() {
 for (let i = 0; i < bubbles.length; i++) {
   let bubble = bubbles[i];
  
   // Update position
   bubble.x += bubble.xSpeed;
   bubble.y += bubble.ySpeed;
  
   // Check for collisions with canvas edges
   if (bubble.x > width - bubble.size / 2 || bubble.x < bubble.size / 2) {
     bubble.xSpeed *= -1;
   }
   if (bubble.y > height - bubble.size / 2 || bubble.y < bubble.size / 2) {
     bubble.ySpeed *= -1;
   }
  
   // Draw bubble based on the visual type (color-coded)
   if (bubble.data.visual === 'Memes') {
     fill(150, 100, 200, 150); // Memes color
    } else if (bubble.data.visual === 'Emojis') {
        fill(100, 150, 250, 150); // Emojis color
      } else if (bubble.data.visual === 'GIFs') {
        fill(255, 100, 100, 150); // GIFs color
      }
     
      noStroke();
      ellipse(bubble.x, bubble.y, bubble.size, bubble.size);
     
      // Show tooltip when hovering over a bubble
      if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.size / 2) {
        fill(0);
        text(`Platform: ${bubble.data.platform}`, mouseX + 10, mouseY - 30);
        text(`Time: ${bubble.data.hours} hrs`, mouseX + 10, mouseY - 15);
        text(`Users: ${bubble.data.users}K`, mouseX + 10, mouseY);
        text(`Visual: ${bubble.data.visual}`, mouseX + 10, mouseY + 15);
      }
    }
   }
   
   
   // Function to draw legends for visual languages and platform labels
   function drawLabels() {
    fill(0);
    textAlign(CENTER);
     // Legends for visual languages
    fill(150, 100, 200, 150);
    rect(20, height - 120, 20, 20);
    fill(0);
    text('Memes', 70, height - 105);
     fill(100, 150, 250, 150);
    rect(20, height - 90, 20, 20);
    fill(0);
    text('Emojis', 70, height - 75);
     fill(255, 100, 100, 150);
    rect(20, height - 60, 20, 20);
    fill(0);
    text('GIFs', 70, height - 45);
   }
   
   