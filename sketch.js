function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(256, 256, 0);
  noStroke();
  fill(0, 255, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200, 200, 200);
}
