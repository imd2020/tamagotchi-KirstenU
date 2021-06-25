//erstes Teilstück der Rebe
export default class Vine {
  constructor() {
    this.picture = loadImage("pictures/Rebe-Boden.png");
  }
  display() {
    image(this.picture, 480, 350, 75, 150);
  }
}
