//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore we know ctx is not null
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
class ClickShape {
	constructor() {
		this.X = 0;
		this.Y = 0;
		this.width = 100;
		this.xDirection = 0;
		this.yDirection = 1;
		this.speed = 5;
		this.isVisible = true;
		this.isClicked = false;
		this.color = "silver";
		/**@type {Path2D | undefined} */
		this.path;
	}
	movingDirection() {
		if (this.xDirection === 0 && this.yDirection === 1) {
			return "down";
		}
		if (this.xDirection === 0 && this.yDirection === -1) {
			return "up";
		}
		if (this.xDirection === 1 && this.yDirection === 0) {
			return "right";
		}
		return "left";
	}
	update() {
		if (!this.isVisible) {
			return;
		}
		switch (this.movingDirection()) {
			case "down":
				this.isVisible = this.Y < canvas.height;
				break;
			case "up":
				this.isVisible = this.Y + this.width > 0;
				break;
			case "right":
				this.isVisible = this.X < canvas.width;
				break;
			case "left":
				this.isVisible = this.X + this.width > canvas.width;
				break;
		}
		this.X += this.xDirection * this.speed;
		this.Y += this.yDirection * this.speed;
	}
	draw() {
		ctx.fillStyle = this.isClicked ? "silver" : this.color;
		this.path = new Path2D();
		this.path.rect(this.X, this.Y, this.width, this.width);
		ctx.fill(this.path);
	}
	checkForClicked(x, y) {
		if (this.isClicked) {
			return;
		}
		//@ts-ignore
		this.isClicked = ctx.isPointInPath(this.path, x, y);
		6;
	}
}
class Game {
	constructor() {
		this.score = 0;
		this.colors = [
			"red",
			"orange",
			"yellow",
			"green",
			"blue",
			"indigo",
			"violet",
			"brown",
			"plum",
			"pink",
		];
		this.targetColor = this.getRandomColor();
		/**@type {Array<ClickShape>} */
		this.shapes = [];
		this.spawnInterval = 500;
		this.lastSpawnTime = 0;
	}
	getRandomColor() {
		let randomIndex = Math.floor(Math.random() * this.colors.length);
		return this.colors[randomIndex];
	}
	spawnShape(elapsedTime) {
		this.lastSpawnTime += elapsedTime;
		if (this.lastSpawnTime <= this.spawnInterval) {
			return;
		}
		this.lastSpawnTime = 0;
		let s = new ClickShape();
		s.color = this.getRandomColor();
		s.Y = 0 - s.width;
		let randX = Math.floor(Math.random() * (canvas.width / s.width));
		s.X = randX * s.width;
		this.shapes.push(s);
	}
	update(elapsedTime) {
		this.spawnShape(elapsedTime);
		this.shapes.forEach((s) => {
			s.update();
		});
		this.shapes = this.shapes.filter((s) => s.isVisible);
	}
	draw() {
		this.shapes.forEach((s) => {
			s.draw();
		});
	}
	checkForClicked(x, y) {
		this.shapes.forEach((s) => {
			s.checkForClicked(x, y);
		});
	}
}
let game = new Game();
console.log(game);
let currentTime = 0;
let gameLoop = function (timestamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timestamp - currentTime;
	currentTime = timestamp;
	game.update(elapsedTime);
	game.draw();
	window.requestAnimationFrame(gameLoop);
};
window.requestAnimationFrame(gameLoop);
canvas.addEventListener("click", (ev) => {
	console.log("mouse event", ev.offsetX, ev.offsetY);
	game.checkForClicked(ev.offsetX, ev.offsetY);
});
