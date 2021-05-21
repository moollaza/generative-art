// Vars
let size = window.innerWidth * 0.75;

let finalSize = 4;
let startSteps;
let offset = 2;
let tileStep = (size - offset * 2) / 10;
let startSize = tileStep;
let directions = [-1, 0, 1];

let colors = [
  "10002b",
  "240046",
  "3c096c",
  "5a189a",
  "7b2cbf",
  "9d4edd",
  "c77dff",
  "e0aaff",
];

const palettes = {
  a: ["233d4d", "fe7f2d", "fcca46", "a1c181", "619b8a"],
};

colors = palettes.a;

function setup() {
  createCanvas(size, size);

  strokeWeight(2);
  background("#" + "001427");

  noFill();

  // Must be last line
  noLoop();
}

function draw() {
  for (var x = offset; x < size - offset; x += tileStep) {
    for (var y = offset; y < size - offset; y += tileStep) {
      startSteps = 2 + ceil(random() * 3);
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
  let rand = floor(random(0, colors.length));
  let clr = colors[rand];
  stroke(`#${clr}`);

  rect(x, y, width, height);

  if (steps >= 0) {
    var newSize = startSize * (steps / startSteps) + finalSize;
    var newX = x + (width - newSize) / 2;
    var newY = y + (height - newSize) / 2;
    newX = newX - ((x - newX) / (steps + 2)) * xMovement;
    newY = newY - ((y - newY) / (steps + 2)) * yMovement;
    drawSquare(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
  }
}
