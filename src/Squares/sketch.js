// Vars
let size = window.innerWidth * 0.75;

let cols = 11;
let finalSize = 10;
let startSteps;
let offset = 5;
let tileStep = (size - offset * 2) / cols;
let startSize = tileStep;
let directions = [-1, 0, 1];

let colors = ["ee6055", "60d394", "aaf683", "ffd97d", "ff9b85"];

function setup() {
  createCanvas(size, size);

  strokeWeight(2);
  background("#" + "1f2041");

  noFill();

  // Must be last line
  noLoop();
}

function draw() {
  for (var x = offset; x < size - offset; x += tileStep) {
    for (var y = offset; y < size - offset; y += tileStep) {
      startSteps = 2 + int(random(1, 2));
      var xDirection = random(directions);
      var yDirection = random(directions);

      drawSquare(
        x,
        y,
        startSize,
        startSize,
        xDirection,
        yDirection,
        startSteps - 1
      );
    }
  }
}

function drawSquare(x, y, width, height, xMovement, yMovement, steps) {
  let c = color("#" + random(colors));
  stroke(c);
  c.setAlpha(15);
  fill(c);

  rect(x, y, width, height);
  // circle(x + width / 2, y + width / 2, width);

  if (steps >= 0) {
    var newSize = startSize * (steps / startSteps) + finalSize;
    var newX = x + (width - newSize) / 2;
    var newY = y + (height - newSize) / 2;
    newX = newX - ((x - newX) / (steps + 2)) * xMovement;
    newY = newY - ((y - newY) / (steps + 2)) * yMovement;
    drawSquare(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
  }
}
