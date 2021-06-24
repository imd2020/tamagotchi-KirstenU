export default class Rebe {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.picture = loadImage("pictures/Rebstock2.png");
  }

  display() {
    push();
    image(this.picture, this.x, this.y, 30, 400);
    pop();
  }
}
