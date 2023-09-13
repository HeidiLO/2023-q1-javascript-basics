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
		this.width = 10;
		this.height = 10;
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
	}
	getRandomColor() {
		let randomIndex = Math.floor(Math.random() * this.colors.length);
		return this.colors[randomIndex];
	}
}
let game = new Game();
console.log(game);
