//Bild mit vielen Blättern für letzten Grow-State
export default class Leave {
  constructor() {
    this.picture = loadImage("pictures/Blatt-neu.png");
  }
  display() {
    image(this.picture, 420, 115, 180, 380);
  }
}
