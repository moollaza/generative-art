let size;
let squareSize;

const randomDisplacement = 5;
const rotateMultiplier = 1;
const offset = 2;

let from, to;

function setup() {
  size = windowWidth * 0.75;
  squareSize = floor(size / 20);

  createCanvas(size, size);

  bClr = color("#151515");
  fClr = color("orange");
  tClr = color(72, 61, 139);

  background(bClr);
  strokeWeight(2);
  strokeCap(SQUARE);

  rectMode(CENTER);
  noFill();

  // Must be last line
  noLoop();
}

function draw() {
  for (let i = squareSize; i <= size - squareSize; i += squareSize) {
    for (let j = squareSize; j <= size - squareSize; j += squareSize) {
      //let f = lerpColor(color(bClr), fClr, (i-squareSize)/size);
      //let t = lerpColor(tClr, color(bClr), (i-squareSize)/size);
      let clr = lerpColor(fClr, tClr, (j - squareSize) / size);
      //clr.setAlpha(255*(j/size));
      stroke(clr);
      drawSquare(i, j);
    }
  }
}

function drawSquare(x, y) {
  angleMode(DEGREES);
  plusOrMinus = random() < 0.5 ? -1 : 1;
  const rotateAmt =
    (y / size) * 5 * plusOrMinus * random() * randomDisplacement;

  //const translateAmt = y / size * plusOrMinus * random(0) * randomDisplacement;

  push();
  translate(x, y);
  rotate(rotateAmt);
  translate(-x, -y);
  square(x, y, squareSize);
  pop();
}
