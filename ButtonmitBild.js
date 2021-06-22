import Sun from "./Sun.js";
let shining = new Sun();

import Rain from "./Rain.js";
let raining = new Rain();

export default class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.Rainbutton = loadImage("/Regen-Button.png");
    this.Sunbutton = loadImage("/Sonne-Button.png");
    this.startbutton = loadImage("/StartButton.png");
    this.tutorialbutton = loadImage("/Tutorialbutton.png");
    this.abrupfen = loadImage("/Blaetter-abrupfen.png");
    this.dranlassen = loadImage("/Blaetter-dranlassen.png");
  }
  displaystart() {
    image(this.startbutton, this.x, this.y, 120, 50);
  }
  displaytutorial() {
    image(this.tutorialbutton, this.x, this.y, 120, 50);
  }
  displayregen() {
    image(this.Rainbutton, this.x, this.y, 120, 50);
  }
  displaysonne() {
    image(this.Sunbutton, this.x, this.y, 120, 50);
  }
  displayab() {
    image(this.abrupfen, this.x, this.y, 120, 50);
  }
  displaydran() {
    image(this.dranlassen, this.x, this.y, 120, 50);
  }
  hitTest() {
    if (
      mouseIsPressed &&
      mouseX >= this.x &&
      mouseX <= this.x + 120 &&
      mouseY >= this.y &&
      mouseY <= this.y + 50
    ) {
    }
  }
  hitTestSun() {
    //Hier wird Sonne gezeichnet
    if (
      mouseX >= this.x &&
      mouseX <= this.x + 120 &&
      mouseY >= this.y &&
      mouseY <= this.y + 50
    ) {
      shining.display();
    }
  }
  hitTestRain() {
    //Hier wird Regen gezeichnet

    if (
      mouseX >= this.x &&
      mouseX <= this.x + 120 &&
      mouseY >= this.y &&
      mouseY <= this.y + 50
    ) {
      raining.display();
    }
  }
}
