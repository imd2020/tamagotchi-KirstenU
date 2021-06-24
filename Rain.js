export default class Rain {
  constructor() {}
  display() {
    push();
    fill(250, 200, 0);
    translate(this.x, this.y);
    fill(0, 0, 250);
    noStroke();
    ellipse(0, 0, 200, 120);
    ellipse(-50, -30, 100, 100);
    ellipse(0, -30, 100, 100);
    ellipse(0, 20, 130, 100);
    ellipse(-50, 20, 130, 100);

    rect(0, 80 + this.fall * 2.5, 5, 40 * this.smaller, 10);
    rect(-20, 110 + this.fall * 2, 5, 40 * this.smaller, 10);
    rect(-60, 90 + this.fall * 1.4, 5, 40 * this.smaller, 10);
    rect(40, 110 + this.fall * 1.7, 5, 40 * this.smaller, 10);
    rect(20, 140 + this.fall * 1.2, 5, 40 * this.smaller, 10);
    rect(70, 60 + this.fall * 1.8, 5, 40 * this.smaller, 10);
    pop();
    gsap.to(this, {
      duration: 1,
      ease: "EaseIn",
      x: 350,
      y: 150,
      smaller: 1,
      onComplete: () => {
        gsap.to(this, {
          duration: 0.5,
          ease: "linear",
          fall: 200,
          smaller: 0.5,
        });
      },
    });
  }
}
