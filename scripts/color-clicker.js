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
		this.width = 25;
		this.height = 25;
		this.xDirection = 0;
		this.yDirection = 1;
		this.speed = 10;
		this.isVisible = true;
		this.isClicked = true;
		this.color = "silver";
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
		ctx.fillStyle = this.color;
		ctx.fillRect(this.X, this.Y, this.width, this.height);
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
			"black",
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
		let randX = Math.floor(
			Math.random() * (canvas.width / s.width - s.width)
		);
		s.X = randX * s.width;
		this.shapes.push(s);
	}
	update(elapsedTime) {
		this.spawnShape(elapsedTime);
		this.shapes.forEach((s) => {
			s.update();
		});
	}
	draw() {
		this.shapes.forEach((s) => {
			s.draw();
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
