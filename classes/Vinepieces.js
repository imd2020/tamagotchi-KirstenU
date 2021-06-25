//Rebenherz
export default class VinePieces {
  constructor() {
    this.pictureleft = loadImage("pictures/Herz-links.png");
    this.pictureright = loadImage("pictures/Herz-rechts.png");
  }
  displayleft() {
    image(this.pictureleft, 440, 250, 75, 150);
  }
  displayright() {
    image(this.pictureright, 510, 230, 85, 160);
  }
}
