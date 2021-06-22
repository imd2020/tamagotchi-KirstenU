export default class Rain {
  constructor() {}
  display() {
    push();
    fill(0, 0, 250);
    noStroke();
    ellipse(400, 150, 200, 120);
    ellipse(350, 120, 100, 100);
    ellipse(400, 120, 100, 100);
    ellipse(400, 170, 130, 100);
    ellipse(350, 170, 130, 100);

    rect(400, 230, 5, 40, 10);
    rect(380, 260, 5, 40, 10);
    rect(340, 240, 5, 40, 10);
    rect(440, 260, 5, 40, 10);
    rect(420, 290, 5, 40, 10);
    rect(470, 210, 5, 40, 10);
    pop();
  }
}
