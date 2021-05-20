// Vars
let size, squareSize, row, col;

let colors = {};

const palettes = {
  a: { bg: "03071e", from: "ffba08", to: "9d0208" },
  b: { bg: "10002b", from: "e0aaff", to: "240046" },
  c: { bg: "ffca3a", from: "1982c4", to: "ff595e" },
  d: { bg: "8d0801", from: "f4d58d", to: "001427" },
  e: { bg: "455e89", from: "5c4d7d", to: "a01a58" },
};

const palette = palettes.a;

const cols = 20;
const rows = 20;
const rotateMultiplier = 25;
const randomDisplacement = 15;

function setup() {
  size = windowWidth * 0.8;
  squareSize = floor(size / rows);

  createCanvas(squareSize * (cols + 2), size);

  background(255);
  strokeWeight(1);
  strokeCap(SQUARE);

  rectMode(CENTER);
  noFill();

  // Must be last line
  noLoop();
}

function draw() {}

function drawSquare(x, y) {}
