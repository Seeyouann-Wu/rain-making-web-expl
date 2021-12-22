let steps = [],
  radius = 10,
  rate = 0.005,
  freq = 0.02,
  spread = 5,
  refresh = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  background(255);
  
  for (let t = 0; t < TWO_PI; t += TWO_PI / 144) {
    steps.push(
      createVector(width / 2 + cos(t) * 100, height / 2 + sin(t) * 100, 0.7)
    );
  }
}

function draw() {
  steps.push(createVector(mouseX, mouseY, 1));
  
  for (let i = 0; i < steps.length; i++) {
    noStroke();
    fill(60 * noise(frameCount * freq), 255 - steps[i].z * 245, 255);
    circle(steps[i].x, steps[i].y, steps[i].z * radius);
    
    steps[i].x += (noise(steps[i].y * freq) * 2 - 1) * spread;
    steps[i].y += (noise(steps[i].x * freq + 10) * 2 - 1) * spread;
    
    if (steps[i].z > 0) {
      steps[i].z -= rate;
    } else steps.splice(i, 1);
  }

  if (refresh > 0) {
    stroke(255);
    if (width < height) {
      line(
        0,
        (frameCount * refresh) % height,
        width,
        (frameCount * refresh) % height
      );
    } else {
      line(
        (frameCount * refresh) % width,
        0,
        (frameCount * refresh) % width,
        height
      );
    }
  }
}

function mouseClicked() {
  clear();
  background(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
  steps = [];
  for (let t = 0; t < TWO_PI; t += TWO_PI / 144) {
    steps.push(
      createVector(width / 2 + cos(t) * 100, height / 2 + sin(t) * 100, 0.7)
    );
  }
}
