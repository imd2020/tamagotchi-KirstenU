export default class VinePieces {
  constructor() {
    this.pictureleft = loadImage("/Herz-links.png");
    this.pictureright = loadImage("/Herz-rechts.png");
  }
  displayleft() {
    image(this.pictureleft, 440, 250, 75, 150);
  }
  displayright() {
    image(this.pictureright, 512, 230, 85, 160);
  }
}
