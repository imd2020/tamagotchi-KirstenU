// IMPORTS aus anderen Dateien
import Button from "./ButtonmitBild.js";
import Backbackground from "./Hintergrund2.js";
import Rebe from "./Rebe.js";
import Vine from "./Vine.js";
import VinePieces from "./Vinepieces.js";
import Leave from "./Leaves.js";

//Hintergrund
let backbackground = new Backbackground();
//Rebstücke
let hauptrebe = new Rebe(501, 100);
let vineground = new Vine();
let vineheartleft = new VinePieces();
let vineheartright = new VinePieces();
let leave = new Leave();
//Buttons
let leaveOnButton = new Button(90, 220);
let takeOffButton = new Button(220, 220);
//Sonstiges
let state = "start";

//Start-/ Endscreens und Tutorial
class StartandEnd {
  constructor() {
    this.picturestart = loadImage("pictures/StartScreen.png");
    this.pictureendbad = loadImage("pictures/Background-Final.png");
    this.pictureendgood = loadImage("pictures/Background-Final_vino.png");
    this.picturetutorial = loadImage("pictures/Tutorialscreen.png");
    this.pictureweniger = loadImage("pictures/Weniger-Blaetter.png");
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
  displayless() {
    image(this.pictureweniger, 420, 115, 180, 380);
  }
}
let end = new StartandEnd();

function complete() {
  //Rebe ist komplett gewachsen
  //Diagramm und Buttons ausgeblendet
  //Entscheidungsfrage nach Ertragsarbeit (Blätter ab oder dran)
  backbackground.displayback();
  hauptrebe.display();
  vineground.display();
  vineheartleft.displayleft();
  vineheartright.displayright();
  fill(150, 150, 150, 230);
  rect(35, 150, 350, 140, 15);
  fill(30);
  textFont("LiebeErika");
  textSize(35);
  text("Sollen ein paar der Blätter entfernt werden?", 50, 190);
  leaveOnButton.displaydran();
  takeOffButton.displayab();

  if (
    mouseIsPressed &&
    mouseX > 90 &&
    mouseX < 210 &&
    mouseY > 220 &&
    mouseY < 270
  ) {
    console.log("finalbad");
    setTimeout(function () {
      console.log("Hello World!");
    }, 2000);
  }
  if (
    mouseIsPressed &&
    mouseX > 220 &&
    mouseX < 340 &&
    mouseY > 220 &&
    mouseY < 270
  ) {
    console.log("finalgood");
    end.displayless();
    setTimeout(function () {
      console.log("Hello Earth!");
    }, 1000);
  } else {
    leave.display();
  }
}

function draw() {
  complete();
}
