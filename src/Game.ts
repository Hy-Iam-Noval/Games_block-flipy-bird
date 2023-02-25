import { Enemy, enemyStart } from "./Enemy.js"
import { Player, playerStart } from "./Player.js"
import { Coordinate, canvas, ctx } from "./init.js"

export class Game {
   upDown = 0
   coor: Coordinate = {
      x: 50, 
      y: 50
   }
   canvas = {
      x: canvas.width,
      y: canvas.height,
      size: canvas.width * 0.1
   }
   e: Enemy

   constructor(){
      this.e = new Enemy(this)
   }

   updateMove(moving: KeyboardEvent){
      if (moving.code === "Space" && this.upDown !== 50) {
         this.upDown = -20
      }
   }

   update(){
      const {coor, upDown, canvas} = this
      coor.y += upDown
      // set movemont to 10 so player will be down
      // if player dead movement will be 50
      if(!(upDown === 0 || upDown === 50)) this.upDown = 10
      if(coor.y + canvas.size / 2 >= canvas.y) {
         this.coor.y = canvas.y - canvas.size / 2
      }
   }

   draw(){
      ctx!.fillStyle = "white"
      ctx!.fillRect(0, 0, canvas.width, canvas.height)
      this.e.update()
      this.e.draw()
      playerStart(this)
   }

   start(){
      this.update()
      this.draw()
   }
}