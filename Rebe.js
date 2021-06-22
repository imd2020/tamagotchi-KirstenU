export default class Rebe {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.picture = loadImage("/Rebstock2.png");
  }

  display() {
    push();
    //Rebe
    /*noStroke();
    fill(100, 50, 50);
    rect(this.x, this.y, 25, 400, 10);
    fill(85, 45, 45);
    rect(this.x, this.y + 5, 8, 390, 5);
    rect(this.x + 17, this.y + 5, 8, 390, 5);*/
    image(this.picture, 500, 100, 30, 400);
    pop();
  }
}
