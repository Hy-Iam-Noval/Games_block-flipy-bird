import { canvas, ctx } from './init.js';
export class Player {
    constructor(game) {
        this.game = game;
        this.size = game.canvas.size / 2;
    }
    draw() {
        const { game, size } = this;
        ctx.fillStyle = "black";
        ctx.fillRect(game.coor.x, game.coor.y, size, size);
    }
    hitTop() {
        const { coor } = this.game;
        if (coor.y <= 0 || coor.y >= canvas.height) {
            this.game.upDown = 50;
        }
    }
}
export function playerStart(g) {
    const ctx = new Player(g);
    ctx.hitTop();
    ctx.draw();
}
