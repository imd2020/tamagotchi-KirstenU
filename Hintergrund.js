//Hintergrund Schablone oben drauf mit Lochmuster für Diagramm
export default class Background {
  constructor() {
    this.picture = loadImage("pictures/Background_mitLoch.png");
  }
  display() {
    image(this.picture, 0, 0, 800, 500);
  }
}
