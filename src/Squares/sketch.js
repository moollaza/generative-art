// Vars
let size = window.innerWidth * 0.75;

let finalSize = 4;
let startSteps;
let offset = 5;
let tileStep = (size - offset * 2) / 10;
let startSize = tileStep;
let directions = [-1, 0, 1];

let colors = [
  "ffadad",
  "ffd6a5",
  "fdffb6",
  "caffbf",
  "9bf6ff",
  "a0c4ff",
  "bdb2ff",
  "ffc6ff",
  "fffffc",
];

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
      startSteps = 2 + int(random(1, 4));
      var xDirection = directions[floor(random() * directions.length)];
      var yDirection = directions[floor(random() * directions.length)];

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
  stroke("#" + random(colors));

  if (random() <= 0.25) {
    // rect(x, y, width, height);
  } else {
    circle(x + width / 2, y + width / 2, width);
  }

  if (steps >= 0) {
    var newSize = startSize * (steps / startSteps) + finalSize;
    var newX = x + (width - newSize) / 2;
    var newY = y + (height - newSize) / 2;
    newX = newX - ((x - newX) / (steps + 2)) * xMovement;
    newY = newY - ((y - newY) / (steps + 2)) * yMovement;
    drawSquare(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
  }
}
