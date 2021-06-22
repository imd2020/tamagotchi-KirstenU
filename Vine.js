export default class Vine {
  constructor() {
    this.picture = loadImage("/Rebe-Boden.png");
  }
  display() {
    image(this.picture, 480, 350, 75, 150);
  }
}
