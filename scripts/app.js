// //@ts-check
// /** @type {HTMLCanvasElement} */
// //@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
class Shape {
	constructor(startX, startY) {
		this.x = startX;
		this.y = startY;
		this.width = 100;
		this.height = 100;
		this.color = "plum";
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
let s1 = new Shape(0, 0);
s1.draw();
canvas.addEventListener("click", () => {
	s1.x += 7;
	s1.y += 7;
	s1.draw();
});
