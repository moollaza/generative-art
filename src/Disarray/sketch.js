// Vars
let size, squareSize;

let colors = {};

const palettes = {
  a: { bg: "03071e", from: "ffba08", to: "9d0208" },
  b: { bg: "10002b", from: "e0aaff", to: "240046" },
  c: { bg: "ffca3a", from: "1982c4", to: "ff595e" },
  d: { bg: "8d0801", from: "f4d58d", to: "001427" },
  e: { bg: "455e89", from: "5c4d7d", to: "a01a58" },
};

const palette = palettes.a;

// Consts
const cols = 20;
const rotateMultiplier = 25;
const randomDisplacement = 15;
const offset = 2;

function setup() {
  size = windowWidth * 0.8;
  squareSize = floor(size / cols);

  createCanvas(size, size);

  colors.bg = color(`#${palette.bg}`);
  colors.from = color(`#${palette.from}`);
  colors.to = color(`#${palette.to}`);

  background(colors.bg);
  strokeWeight(2);
  strokeCap(SQUARE);

  angleMode(DEGREES);

  rectMode(CENTER);
  noFill();

  // Must be last line
  noLoop();
}

function draw() {
  for (let i = squareSize; i <= size - squareSize; i += squareSize) {
    console.group(i);
    for (let j = squareSize; j <= size - squareSize; j += squareSize) {
      const amt = map(j, squareSize, size, 0, 1);
      print(j / size, amt);

      const clr = lerpColor(colors.from, colors.to, amt);
      stroke(clr);
      drawSquare(i, j);
    }
    console.groupEnd();
  }
}

function drawSquare(x, y) {
  plusOrMinus = random() < 0.5 ? -1 : 1;
  const rotateAmt = (y / size) * plusOrMinus * random() * rotateMultiplier;

  plusOrMinus = random() < 0.5 ? -1 : 1;
  const translateAmt = (y / size) * plusOrMinus * random() * randomDisplacement;

  push();
  translate(x + translateAmt, y);
  rotate(rotateAmt);
  translate(-x, -y);
  square(x, y, squareSize);
  pop();
}
