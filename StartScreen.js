export default class StartandEnd {
  constructor() {
    this.picturestart = loadImage("/StartScreen.png");
    this.pictureendbad = loadImage("/Background-final.png");
    this.pictureendgood = loadImage("/Background-final_vino.png");
    this.picturetutorial = loadImage("/Tutorialscreen.png");
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
