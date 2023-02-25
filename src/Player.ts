import { Game } from './Game.js';
import {canvas, ctx} from './init.js';

export class Player {
   size: number

   constructor(private game: Game){
      this.size = game.canvas.size / 2
   }
   
   draw(): void {
      const {game, size} = this
      ctx!.fillStyle = "black"
      ctx!.fillRect(game.coor.x, game.coor.y, size, size)
   }

   hitTop(){
      const {coor} = this.game
      if (coor.y <= 0 || coor.y >= canvas.height) {
         this.game.upDown = 50
      }
   }
}

export function playerStart(g:Game){
   const ctx = new Player(g)
   ctx.hitTop()
   ctx.draw()
}