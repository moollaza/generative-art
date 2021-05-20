// Vars
let size, squareSize, row, col, textFontFace;

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
// const word = "EVERYTHING.IS.FINE";
// const word = "ZAAHIR.MOOLLA";
const word = "  DISARRAY  ";
// const word = "  ZAAHIR  ";
const wordArr = word.split("");

const cols = wordArr.length - 1;
const rows = 20;
const rotateMultiplier = 25;
const randomDisplacement = 15;

// Loading font
function preload() {
  textFontFace = loadFont(
    "https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/fonts/hack-bold.woff"
  );
}

function setup() {
  size = windowWidth * 0.8;
  squareSize = floor(size / rows);

  print(squareSize);

  // width = word length + extra column for padding
  createCanvas(squareSize * (cols + 2), size);

  colors.bg = color(`#${palette.bg}`);
  colors.from = color(`#${palette.from}`);
  colors.to = color(`#${palette.to}`);

  background(colors.bg);
  strokeWeight(2);
  strokeCap(SQUARE);

  angleMode(DEGREES);

  rectMode(CENTER);
  noFill();

  textFont(textFontFace);
  textSize(squareSize);
  // textStyle(BOLD);
  textAlign(CENTER, CENTER);

  // Must be last line
  noLoop();
}

function draw() {
  col = 0;

  for (let i = squareSize; col <= cols; i += squareSize) {
    console.groupCollapsed(i);
    row = 0;
    for (let j = squareSize; j <= size - squareSize; j += squareSize) {
      const amt = map(j, squareSize, size, 0, 1);
      print(j / size, amt);

      const clr = lerpColor(colors.from, colors.to, amt);
      stroke(clr);
      drawSquare(i, j);
      row++;
    }
    console.groupEnd();
    col++;
  }
}

function drawSquare(x, y) {
  plusOrMinus = random() < 0.5 ? -1 : 1;
  const rotateAmt =
    map(y, squareSize, cols * squareSize, 0, 1) *
    plusOrMinus *
    random() *
    rotateMultiplier;

  plusOrMinus = random() < 0.5 ? -1 : 1;
  const translateAmt = (y / size) * plusOrMinus * random() * randomDisplacement;

  push();
  translate(x + translateAmt, y + translateAmt);
  rotate(rotateAmt);
  translate(-x, -y);

  // square(x, y, squareSize);

  text(wordArr[col], x, y);

  pop();
}
