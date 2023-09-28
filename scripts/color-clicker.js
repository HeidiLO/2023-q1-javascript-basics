//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore we know ctx is not null
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const scoreCanvas = document.getElementById("score-canvas");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore we know ctx is not null
const scoreCtx = scoreCanvas.getContext("2d");
scoreCanvas.width = 800;
scoreCanvas.height = 50;
class ClickShape {
	/**
	 * @param {CanvasRenderingContext2D} [ctx]
	 */
	constructor(ctx) {
		/**@type {CanvasRenderingContext2D} */
		//@ts-ignore
		this.ctx = ctx;
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
	draw() {}
	checkForClicked(x, y) {
		if (this.isClicked) {
			return;
		}
		//@ts-ignore
		this.isClicked = ctx.isPointInPath(this.path, x, y);
		6;
	}
}
class SquareClickShape extends ClickShape {
	/**
	 * @param {CanvasRenderingContext2D} [ctx]
	 */
	constructor(ctx) {
		super(ctx);
	}
	draw() {
		this.ctx.fillStyle = this.isClicked ? "silver" : this.color;
		this.path = new Path2D();
		this.path.rect(this.X, this.Y, this.width, this.width);
		this.ctx.fill(this.path);
	}
}
class CircleClickShape extends ClickShape {
	/**
	 * @param {CanvasRenderingContext2D} [ctx]
	 */
	constructor(ctx) {
		super(ctx);
	}
	draw() {
		this.ctx.fillStyle = this.isClicked ? "silver" : this.color;
		this.path = new Path2D();
		this.path.arc(this.X, this.Y, this.width / 2, 0, Math.PI * 2);
		this.ctx.fill(this.path);
	}
}
class Game {
	constructor() {
		this.score = 0;
		this.isGameOver = false;
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
		this.targetShape = this.getRandomTargetShape();
		/**@type {Array<ClickShape>} */
		this.shapes = [];
		this.spawnInterval = 1000;
		this.lastSpawnTime = 0;
	}
	getRandomTargetShape() {
		let s = new ClickShape(scoreCtx);
		s.color = this.getRandomColor();
		s.width = scoreCanvas.height * 0.8;
		s.X = scoreCanvas.width / 2 - s.width / 2;
		s.Y = 5;
		return s;
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
		let s = new ClickShape(ctx);
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
		scoreCtx.font = "40px fantasy";
		scoreCtx.fillStyle = "gold";
		scoreCtx.fillText(`Score: ${this.score}`, 0, 45);
		this.targetShape.draw();
	}
	checkForClicked(x, y) {
		this.shapes.forEach((s) => {
			s.checkForClicked(x, y);
		});
		let clickedShapes = this.shapes.filter((s) => s.isClicked);
		if (clickedShapes.length === 0) {
			return;
		}
		if (
			clickedShapes[clickedShapes.length - 1].color ===
			this.targetShape.color
		) {
			this.score++;
			this.targetShape = this.getRandomTargetShape();
		} else {
			this.isGameOver = true;
		}
	}
}
let game = new Game();
console.log(game);
let currentTime = 0;
let gameLoop = function (timestamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	scoreCtx.clearRect(0, 0, scoreCanvas.width, scoreCanvas.height);
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
