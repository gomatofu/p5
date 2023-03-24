
let canvas;
let recorder;
let button;

let t = 0;
function draw() {
  if (!t) {
    createCanvas(720, 720);
  }
  t += 0.005;
  colorMode(HSB);
  blendMode(BLEND);
  background(0, 0.1);
  blendMode(ADD);
  noFill();

  for (let y = 0; y < 720; y += 34) {
    for (let x = 0; x < 720; x += 34) {
      let N = noise(x / 200, y / 200, t) * 6 + t;
      let colorHue = (N * 720) % 360;
      let T = tan(N) ** 8;
      let S = min(13, 720 / T);
      stroke(colorHue, 90, 255, T);
      ellipse(x, y, S * 2);      
    }
  }
}

