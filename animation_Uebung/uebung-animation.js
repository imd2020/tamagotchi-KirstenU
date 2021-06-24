import gsap from "./gsap-public/minified/gsap.min.js";

const imdCircle = {
  x: 100,
};

function draw() {
  //clear();
  ellipse(imdCircle.x, imdCircle.y, 50, 50);
}

function myAnimation() {
  gsap.to(imdCircle, {
    duration: 2,
    ease: "linear",
    x: 400,
    y: random(0, 300),
    onComplete: () => {
      gsap.to(imdCircle, {
        duration: 2,
        ease: "linear",
        x: 100,
        onComplete: () => {
          myAnimation();
        },
      });
    },
  });
}

myAnimation();
