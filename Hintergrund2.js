//noramler Hintergrund, kommt aber hinter den ersten Hintergrund
export default class Backbackground {
  constructor() {
    this.picture2 = loadImage("pictures/Background.png");
  }
  displayback() {
    image(this.picture2, 0, 0, 800, 500);
  }
}
