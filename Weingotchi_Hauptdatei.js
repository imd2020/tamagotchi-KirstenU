// IMPORTS aus anderen Dateien
import Button from "./ButtonmitBild.js";
import Background from "./Hintergrund.js";
import Backbackground from "./Hintergrund2.js";
import Rebe from "./Rebe.js";
import Vine from "./Vine.js";
import VinePieces from "./Vinepieces.js";
import Leave from "./Leaves.js";
import StartandEnd from "./StartScreen.js";

let variable1 = 0;
let variable2 = 0;
let background = new Background();
let backbackground = new Backbackground();
let hauptrebe = new Rebe(501, 100);
let sunButton = new Button(50, 400);
let rainButton = new Button(200, 400);
let vineground = new Vine();
let vineheartleft = new VinePieces();
let vineheartright = new VinePieces();
let leave = new Leave();
let state = "start";
let startbackground = new StartandEnd();
let endbackground = new StartandEnd();
let startButton = new Button(380, 500);
let tutorialButton = new Button(530, 500);
let secondstartButton = new Button(600, 410);
let leaveOnButton = new Button(90, 220);
let takeOffButton = new Button(220, 220);

function diagram() {
  push();
  noStroke();
  fill(0, 0, 200);
  textFont("LiebeErika");
  textSize(35);
  text("Wasser", 25, 30);

  fill(225, 185, 0);
  text("Licht", 25, 60);
  pop();
}

function mousePressed() {
  if (
    mouseIsPressed &&
    mouseX > 50 &&
    mouseX < 170 &&
    mouseY > 400 &&
    mouseY < 450
  ) {
    push();
    //addingsun
    noStroke();
    fill(245, 205, 0);
    rect(88, 38, variable1, 25);
    variable1 = variable1 + 1;
    pop();
  } else {
    push();
    //reducingsun
    noStroke();
    fill(245, 205, 0);
    rect(88, 38, variable1, 25);
    if (variable1 > 0) {
      variable1 = variable1 - 0.5;
      pop();
    }
  }
  if (
    mouseIsPressed &&
    mouseX > 200 &&
    mouseX < 320 &&
    mouseY > 400 &&
    mouseY < 450
  ) {
    push();
    //addingrain
    noStroke();
    fill(0, 0, 200);
    rect(88, 8, variable2, 25);
    variable2 = variable2 + 2;
    pop();
  } else {
    push();
    //reducingRain
    noStroke();
    fill(0, 0, 200);
    rect(88, 8, variable2, 25);
    if (variable2 > 0) {
      variable2 = variable2 - 0.5;
    }
    pop();
  }
}
window.mousePressed = mousePressed;

function startscreen() {
  startbackground.displaystart();
  startButton.displaystart();
  tutorialButton.displaytutorial();

  if (
    mouseIsPressed &&
    mouseX > 380 &&
    mouseX < 500 &&
    mouseY > 410 &&
    mouseY < 460
  ) {
    startButton.hitTest();
    state = "game";
  }
  if (
    mouseIsPressed &&
    mouseX > 530 &&
    mouseX < 650 &&
    mouseY > 410 &&
    mouseY < 460
  ) {
    tutorialButton.hitTest();
    state = "tutorial";
  }
}

function tutorialscreen() {
  startbackground.displaytutorial();
  secondstartButton.displaystart();

  if (
    mouseIsPressed &&
    mouseX > 600 &&
    mouseX < 720 &&
    mouseY > 410 &&
    mouseY < 460
  ) {
    startButton.hitTest();
    state = "game";
  }
}

function gamescreenstart() {
  backbackground.displayback();
  mousePressed();
  background.display();
  diagram();
  sunButton.displaysonne();
  rainButton.displayregen();
  hauptrebe.display();
  if (variable1 > 70 && variable2 > 70 && state === "game") {
    variable1 = 0;
    variable2 = 0;
    state = "grow1";
  }
  //mousePressed();
  if (mouseIsPressed && mouseX > 50 && mouseX < 170) {
    sunButton.hitTestSun();
  }
  if (mouseIsPressed && mouseX > 200 && mouseX < 320) {
    rainButton.hitTestRain();
  }
}

function vinePieceatground() {
  backbackground.displayback();
  mousePressed();
  background.display();
  diagram();
  sunButton.displaysonne();
  rainButton.displayregen();
  hauptrebe.display();
  vineground.display();

  if (variable1 > 70 && variable2 > 70 && state === "grow1") {
    variable1 = 0;
    variable2 = 0;
    state = "grow2";
  }
  //mousePressed();
  if (mouseIsPressed && mouseX > 50 && mouseX < 170) {
    sunButton.hitTestSun();
  }
  if (mouseIsPressed && mouseX > 200 && mouseX < 320) {
    rainButton.hitTestRain();
  }
}

function leaves() {
  backbackground.displayback();
  mousePressed();
  background.display();
  diagram();
  sunButton.displaysonne();
  rainButton.displayregen();
  hauptrebe.display();
  vineground.display();
  vineheartleft.displayleft();
  vineheartright.displayright();

  if (variable1 > 70 && variable2 > 70 && state === "grow2") {
    variable1 = 0;
    variable2 = 0;
    state = "grow3";
  }
  //mousePressed();
  if (mouseIsPressed && mouseX > 50 && mouseX < 170) {
    sunButton.hitTestSun();
  }
  if (mouseIsPressed && mouseX > 200 && mouseX < 320) {
    rainButton.hitTestRain();
  }
}

function complete() {
  backbackground.displayback();
  hauptrebe.display();
  vineground.display();
  vineheartleft.displayleft();
  vineheartright.displayright();
  leave.display();
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
    state = "finalbad";
  }
  if (
    mouseIsPressed &&
    mouseX > 220 &&
    mouseX < 340 &&
    mouseY > 220 &&
    mouseY < 270
  ) {
    state = "finalgood";
  }
}

function finalScreenbad() {
  endbackground.displayendbad();
}
function finalScreengood() {
  endbackground.displayendgood();
}

function draw() {
  //STATES
  if (state === "start") {
    startscreen();
  } else if (state === "game") {
    gamescreenstart();
  } else if (state === "grow1") {
    vinePieceatground();
  } else if (state === "grow2") {
    leaves();
  } else if (state === "grow3") {
    complete();
  } else if (state === "tutorial") {
    tutorialscreen();
  } else if (state === "finalbad") {
    finalScreenbad();
  } else if (state === "finalgood") {
    finalScreengood();
  }
}
window.draw = draw;
