//Import, um Sonne und Regen bei drücken auf Button zu zeichnen
import Sun from ".//Sun.js";
let shining = new Sun();

import Rain from "./Rain.js";
let raining = new Rain();

export default class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.Rainbutton = loadImage("pictures/Regen-Button.png");
    this.Sunbutton = loadImage("pictures/Sonne-Button.png");
    this.startbutton = loadImage("pictures/StartButton.png");
    this.tutorialbutton = loadImage("pictures/Tutorialbutton.png");
    this.abrupfen = loadImage("pictures/Blaetter-abrupfen.png");
    this.dranlassen = loadImage("pictures/Blaetter-dranlassen.png");
  }
  displaystart() {
    //Startbutton mit Animation, Startscreen
    image(this.startbutton, this.x, this.y, 120, 50);
    gsap.to(this, {
      delay: 2,
      duration: 1,
      ease: "EaseIn",
      y: 410,
    });
  }
  displaytutorial() {
    //Tutorialbutton mit Animation, Startscreen
    image(this.tutorialbutton, this.x, this.y, 120, 50);
    gsap.to(this, {
      delay: 2,
      duration: 1,
      ease: "EaseIn",
      y: 410,
    });
  }
  displayregen() {
    //Regenbutton GameScreen
    image(this.Rainbutton, this.x, this.y, 120, 50);
  }
  displaysonne() {
    //Sonnenbutton GameScreen
    image(this.Sunbutton, this.x, this.y, 120, 50);
  }
  displayab() {
    //Finale Entscheidung abrupfen Button
    image(this.abrupfen, this.x, this.y, 120, 50);
  }
  displaydran() {
    //Finale Entscheidung dranlassen Button
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
      return true;
    }
  }
  hitTestSun() {
    //Hier wird Sonne gezeichnet, aus Import
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
    //Hier wird Regen gezeichnet, aus Import
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
