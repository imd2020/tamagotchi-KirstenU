export default class StartandEnd {
  constructor() {
    this.picturestart = loadImage("pictures/StartScreen.png");
    this.pictureendbad = loadImage("pictures/Background-Final.png");
    this.pictureendgood = loadImage("pictures/Background-Final_vino.png");
    this.picturetutorial = loadImage("pictures/Tutorialscreen.png");
  }
  displaystart() {
    image(this.picturestart, 0, 0, 800, 500);
  }
  displayendbad() {
    image(this.pictureendbad, 0, 0, 800, 500);
  }
  displayendgood() {
    image(this.pictureendgood, 0, 0, 800, 500);
  }
  displaytutorial() {
    image(this.picturetutorial, 0, 0, 800, 500);
  }
}
