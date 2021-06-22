export default class Sun {
  constructor() {}
  display() {
    push();
    noStroke();
    fill(250, 200, 0);
    ellipse(150, 150, 150);
    //+60 +50
    stroke(250, 200, 0);
    strokeWeight(5);
    line(240, 150, 290, 150);
    line(220, 210, 260, 240);
    line(160, 240, 160, 280);
    line(90, 220, 70, 250);
    line(60, 185, 25, 210);
    line(270, 80, 230, 100);
    pop();
  }
}
