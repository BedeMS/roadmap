export default function () {
  let canvas = document.querySelector("canvas");
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var c = canvas.getContext("2d");

  class Line {
    limitX;
    limitY;
    limitNegX;
    limitNegY;
    axis = ["y", "x"];
    currentAxis;

    constructor(x, y, dx, dy, radius, randomColor) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.randomColor = randomColor;
      this.createLimit();
      this.setAxis();
    }

    // after initializing we draw based on
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = this.randomColor;
      c.fillStyle = this.randomColor;
      c.stroke();
      c.fill();
    }

    update() {
      if (
        this.x + this.radius >
          (this.limitX > canvas.width ? canvas.width : this.limitX) ||
        this.x - this.radius < (this.limitNegX < 0 ? 0 : this.limitNegX)
      ) {
        this.setAxis();
        this.dx = -this.dx;
        this.createLimit();
      }
      if (
        this.y + this.radius >
          (this.limitY > canvas.height ? canvas.height : this.limitY) ||
        this.y - this.radius < (this.limitNegY < 0 ? 0 : this.limitNegY)
      ) {
        this.setAxis();
        this.dy = -this.dy;
        this.createLimit();
      }

      if (this.currentAxis === "x") {
        this.x += this.dx;
      } else if (this.currentAxis === "y") {
        this.y += this.dy;
      }

      this.draw();
    }

    setAxis() {
      this.currentAxis = this.axis[Math.floor(Math.random() * 2)];
    }

    createLimit() {
      this.limitX = setRandom(100) + this.x;
      this.limitY = setRandom(100) + this.y;
      this.limitNegX = this.x - setRandom(300);
      this.limitNegY = this.y - setRandom(300);
    }
  }

  function setRandom(num) {
    return Math.random() * num;
  }

  function randomColor() {
    return `rgb(${Math.floor(setRandom(255))}, ${Math.floor(
      setRandom(255)
    )}, ${Math.floor(setRandom(255))})`;
  }

  let linesArray = [];

  //this create all the lines we want
  for (let i = 0; i < 50; i++) {
    let radius = 0.5;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    // this velocity & direction
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    let color = randomColor();

    linesArray.push(new Line(x, y, dx, dy, radius, color));
  }

  function animate(bool) {
    if (!bool) {
      c = null;
      return;
    }
    requestAnimationFrame(animate);
    linesArray.forEach((el) => {
      el.update();
    });
  }

  return { animate };
}
