class Game {
  constructor() {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 650;
    this.height = 450;
    this.bear = new Bear(this, 200, 340, 80, 110);
    this.snow = new Snow(this, this.width, this.height);
  }

  init() {
    this.start();
  }

  start() {
    this.drawBear();

    setInterval(() => {
      this.clear();
      this.generateSnow();
      this.drawBear();
      this.moveBear();
    }, 100);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBear() {
    this.bear.drawComponent("../img/bear.jpg");
  }

  moveBear() {
    this.bear.move();
  }

  generateSnow() {
    this.snow.addFlake();

    this.snow.flakes.forEach((snowFlake) => {
      let gameContext = this.ctx;
      gameContext.fillStyle = "rgba(255, 255, 255, .75)";

      gameContext.beginPath();
      gameContext.arc(
        snowFlake.x,
        (snowFlake.y += snowFlake.speed * 0.5),
        snowFlake.speed * 0.5,
        0,
        Math.PI * 2,
        false
      );
      gameContext.fill();
    });
  }
}
