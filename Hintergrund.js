export default class Background {
  constructor() {
    this.picture = loadImage("pictures/Background_mitLoch.png");
  }
  display() {
    image(this.picture, 0, 0, 800, 500);
  }
}
