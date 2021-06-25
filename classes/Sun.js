//Sonne mit Animation
export default class Sun {
  constructor() {}
  display() {
    push();
    noStroke();
    fill(250, 200, 0);
    translate(this.x, this.y);
    rotate(this.rotation);
    ellipse(0, 0, 150);
    stroke(250, 200, 0);
    strokeWeight(5);
    line(120, -70, 80, -50);
    line(90, 0, 140, 0);
    line(70, 60, 110, 90);
    line(10, 90, 10, 130);
    line(-50, 70, -70, 100);
    line(-80, 35, -115, 60);
    pop();
    //Sonne Easet ein auf den Punkt 200/200 und dreht sich anschließend auf dem gleichen Punkt
    gsap.to(this, {
      duration: 1,
      ease: "EaseIn",
      x: 200,
      y: 200,
      onComplete: () => {
        gsap.to(this, {
          duration: 2,
          ease: "EaseIn",
          rotation: 6.5,
          x: 200,
        });
      },
    });
  }
}
