let boxs = [];
let boxSize
let maxRow = 4
let maxCol = 6
let grid = []
let emojis = []
let swapping = -1
let reverseSwap = false
let swapOver = 0
let keyRow, keyCol
let choosed = 0
let swapBox = []
let scene = "Beginning"
let hue = 0
function preload() {
 for (let i = 0; i < 10; i++) {
   emojis.push(loadImage("/Images/P7/"+ i + ".png"))
 }
}
function setup() {
 let canvas = createCanvas(600, 400);
 canvas.parent("sketch-container");


 boxSize = 100
 for (let j = 0; j < maxCol; j++) {
   grid[j] = []
   for (let i = 0; i < maxRow; i++) {
     grid[j][i] = -1
     boxs.push(new Box(j, i));
   }
 }
 let i = int(random(boxs.length))
 boxs[i].type = 9
 imageMode(CENTER)
 keyRow = maxRow - 1
 keyCol = int(random(maxCol))
 while (checkWin()) {
   keyRow = maxRow - 1
   keyCol = int(random(maxCol))
 }


}
function checkWin() {
    for (let i = 0; i < boxs.length; i++) {
      if (boxs[i].type == 9) {
        if (boxs[i].col == keyCol && boxs[i].row == keyRow) {
          return true
        }
      }
    }
    return false
   }
   function mousePressed() {
    switch (scene) {
      case "Beginning":
        scene = "Middle"
        break;
      case "Middle":
        let allStatic = true
        for (let i = 0; i < boxs.length; i++) {
          if (boxs[i].animation || boxs[i].alpha < 254.0) {
            allStatic = false
          }
        }
        if (allStatic && swapping == -1) {
   
   
          for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].hover && boxs[i].choosed != true) {
              if (choosed == 0) {
                boxs[i].choosed = true
                choosed += 1
                swapBox.push(boxs[i])
              } else {
                let roff = abs(swapBox[0].row - boxs[i].row)
                let coff = abs(swapBox[0].col - boxs[i].col)
                if (roff <= 1 && coff <= 1 && roff + coff <= 1) {
                  boxs[i].choosed = true
                  choosed += 1
                  swapBox.push(boxs[i])
                }
              }
   
   
            }
          }
          if (choosed == 2) {
            choosed = 0
            swapBox[0].initX = swapBox[0].x
            swapBox[0].initY = swapBox[0].y
            swapBox[1].initX = swapBox[1].x
            swapBox[1].initY = swapBox[1].y
            swapBox[0].swapX = swapBox[1].x
            swapBox[0].swapY = swapBox[1].y
            swapBox[1].swapX = swapBox[0].x
            swapBox[1].swapY = swapBox[0].y
            swapBox[0].swapping = 0
            swapBox[1].swapping = 0
            swapping = 0
          }
        }
        break;
      case "End":
        break;
    }
   
   
   }
   function swap() {
    if (swapping >= 0 && swapping < 100) {
      if (reverseSwap) {
        swapping -= 5
      } else {
        swapping += 5
      }
      swapBox[0].choosed = false
      swapBox[1].choosed = false
   
   
      swapBox[0].x = lerp(swapBox[0].initX, swapBox[0].swapX, swapping / 100)
      swapBox[0].y = lerp(swapBox[0].initY, swapBox[0].swapY, swapping / 100)
      swapBox[1].x = lerp(swapBox[1].initX, swapBox[1].swapX, swapping / 100)
      swapBox[1].y = lerp(swapBox[1].initY, swapBox[1].swapY, swapping / 100)
      // console.log(this.swapping,this.animation)
      if (swapping == 100 && !reverseSwap) {
        swapBox[0].x = swapBox[0].swapX
        swapBox[0].y = swapBox[0].swapY
        swapBox[1].x = swapBox[1].swapX
        swapBox[1].y = swapBox[1].swapY
        for (let i = 0; i < boxs.length; i++) {
            boxs[i].getColRow();
        }
        if (!boxMatch(false)) {
          reverseSwap = true
          swapping = 95
   
   
        } else {
          swapping = -1
          swapBox = []
   
   
        }
      }
      if (swapping == 0 && reverseSwap) {
        swapBox[0].x = swapBox[0].initX
        swapBox[0].y = swapBox[0].initY
        swapBox[1].x = swapBox[1].initX
        swapBox[1].y = swapBox[1].initY
        for (let i = 0; i < boxs.length; i++) {
          boxs[i].getColRow();
        }
        swapping = -1
        swapBox = []
        reverseSwap = false
   
   
      }
   
   
    }
   }
   function draw() {
    switch (scene) {
      case "Beginning":
        background(0)
        textAlign(CENTER, CENTER)
        fill(255)
        textSize(22)
        text("To win the game, you need to move 😍 to find the key.You can only move when three or more patterns are matched together. Note: Sometimes stories don't always have a good ending.", width / 2 - width * 0.3, 0, width * 0.6, height)
        image(emojis[9], width / 2 + random(-2, 2), boxSize / 2 + random(-2, 2))
        break;
      case "Middle":
        game()
        break;
        case "End":
          colorMode(HSB)
          background(hue, 50, 80)
          hue += 1
          textAlign(CENTER, CENTER)
          fill(255)
          textSize(22)
          text("You're amazing! This game is really difficult, but you managed to do it.", width / 2 - width * 0.3, 0, width * 0.6, height)
          image(emojis[9], width / 2, boxSize / 2 + 20 + sin(frameCount * 0.2) * 10)
     
     
          break;
      }
     
     
     }
     function game() {
      for (let j = 0; j < maxCol; j++) {
        for (let i = 0; i < maxRow; i++) {
          grid[j][i] = -1
     
     
        }
      }
      let allStatic = true
      if (swapping != -1) {
        allStatic = false
      }
      background(22);
      for (let i = 0; i < boxs.length; i++) {
        boxs[i].getColRow();
        boxs[i].mouseIn();
    }
    console.log(swapping)
    swap()
    push()
    translate(keyCol * boxSize + boxSize / 2, keyRow * boxSize + boxSize / 2)
    rotate(frameCount * 0.1)
    image(emojis[8], 0, 0, 140, 140)
    pop()
    for (let i = 0; i < boxs.length; i++) {
      if (swapping == -1) {
        boxs[i].update();
      }
      boxs[i].display();
      if (boxs[i].animation || boxs[i].alpha < 254.0) {
        allStatic = false
      }
    }
   
   
    if (allStatic) {
      if (!boxMatch(true)) {
        createBox()
   
   
      }
   
   
    }
    if (checkWin() && allStatic) {
      scene = "End"
    }
   }
   
   
   class Box {
    constructor(col, row) {
      this.x = col * boxSize;
      this.y = row * boxSize;
   
   
      this.currentCol = col
      this.currentRow = row
      this.type = int(random(4));
      this.animation = false
      this.lastRow = row
      this.lastCol = col
      this.row = row
      this.col = col
      this.x = map(this.col, 0, maxCol - 1, boxSize / 2, width - boxSize / 2)
      this.y = map(this.row, 0, maxRow - 1, height + boxSize / 2 - boxSize * maxRow, height - boxSize / 2)
      this.s = false
      this.alpha = 0
      if (this.row == 0 && this.col == 0) {
        this.s = true
      }


      this.choosed = false
      this.swapX = 0
      this.swapY = 0
      this.initX = 0
      this.initY = 0
      this.swapping = -1
    }
   
   
    display() {
      this.alpha = lerp(this.alpha, 255, 0.1)
      tint(255, this.alpha);
      image(emojis[this.type], this.x, this.y)
      if (this.hover) {
        fill(0, 150)
        noStroke()
        rect(this.x - boxSize / 2, this.y - boxSize / 2, boxSize);
      }
      if (this.choosed) {
        fill(255, 50)
        noStroke()
        rect(this.x - boxSize / 2, this.y - boxSize / 2, boxSize);
      }
      fill(0)
      if (this.animation) {
        fill(0, 110, 0)
      }
   
   
    }
    getColRow() {
      this.col = int((this.x - boxSize / 2) / boxSize)
      this.row = int((this.y - boxSize / 2) / boxSize)
      if ((this.col != this.lastCol || this.row != this.lastRow)) {
        this.animation = false
      }
      this.lastCol = this.col
      this.lastRow = this.row
      grid[this.col][this.row] = this.type
    }
    update() {
      if (this.animation) {
        this.y += 10
      } else {
        if (this.row < maxRow - 1) {
          if (grid[this.col][this.row + 1] == -1 || this.y < 0) {
            this.animation = true
          }
        }
      }
    }
    mouseIn() {
      if (abs(mouseX - this.x) < boxSize / 2 && abs(mouseY - this.y) < boxSize / 2) {
        this.hover = true
      } else {
        this.hover = false
      }
    }
   }
   
   
   function boxMatch(remove) {
    let removeCols = [];
    let removeRows = [];
    let match = false
    for (let col = 0; col < maxCol; col++) {
      for (let row = 0; row <= maxRow - 3; row++) {
        let type = grid[col][row];
        if (type != -1 && grid[col][row + 1] == type && grid[col][row + 2] == type) {
          removeCols.push(col)
          removeRows.push(row)
          removeCols.push(col)
          removeRows.push(row + 1)
          removeCols.push(col)
          removeRows.push(row + 2)
          match = true
        }
      }
    }
    for (let row = 0; row < maxRow; row++) {
      for (let col = 0; col <= maxCol - 3; col++) {
        let type = grid[col][row];
        if (type != -1 && grid[col + 1][row] == type && grid[col + 2][row] == type) {
          removeCols.push(col)
          removeRows.push(row)
          removeCols.push(col + 1)
          removeRows.push(row)
          removeCols.push(col + 2)
          removeRows.push(row)
          match = true
        }
      }
    }
   
   
    if (remove) {
      for (let i = 0; i < removeCols.length; i++) {
        let c = removeCols[i]
        let r = removeRows[i]
        grid[c][r] = -1;
        for (let j = boxs.length - 1; j >= 0; j--) {
          if (boxs[j].row == r && boxs[j].col == c) {
            boxs.splice(j, 1)
          }
        }
      }
    }
    return match
   }
   function createBox() {
    for (let col = 0; col < maxCol; col++) {
   
   
      for (let row = 0; row < maxRow; row++) {
        if (grid[col][row] === -1) {
   
   
          boxs.push(new Box(col, 0));
          break
        }
      }
    }
   }
            
     
              