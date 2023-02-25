import { Game } from "./Game.js";
import { Coordinate, AbstractGame, ctx, canvas, range } from "./init.js";

export class Enemy extends AbstractGame<Coordinate[]>{
   coor: Coordinate[] = [] // coor enemy
   draw(): void {
      const {coor, game} = this
      coor.forEach(i=>{
         // draw wall
         ctx!.fillStyle = 'red'
         ctx!.fillRect(i.x, 0, game.canvas.size, canvas.height)
   
         // draw route
         ctx!.fillStyle = "white"
         ctx!.fillRect(i.x - 10, i.y, game.canvas.size + 50 , game.canvas.size + 50)
         this.hit(i)
      })     
   }

   update(): void {
      this.add()
      this.coor = this.coor.map(i=> ({x: i.x - 10, y:i.y})).filter(i=>i.x > -this.game.canvas.size)
      console.log(this.coor);
      
   }

   hit(coor: Coordinate){
      const {game}  = this
      const pSize = game.canvas.size / 2 
      const hitX = 
         game.coor.x + pSize >= coor.x &&
         coor.x + pSize >= game.coor.x
      const yHit =
         game.coor.y >= coor.y &&
         coor.y + 50 + pSize >= game.coor.y 

      if (hitX && !yHit) {
         game.upDown = 50
      }
   }
   
   add(){
      const {coor, game} = this
      const listNewCoorX = range(50, 200, 50)
      const newX = listNewCoorX[Math.floor(Math.random() * listNewCoorX.length)]
      
      const listNewCoorY = range(50, game.canvas.y * 0.5)
      const newY = listNewCoorY[Math.floor(Math.random() * listNewCoorY.length)]
      const lastCoor = coor.slice(-1)[0]
      const newLastCoor = lastCoor ? lastCoor.x * 0.8 : 0

      if(coor.length < 10) this.coor.push({
         x: game.canvas.x + newLastCoor + newX, 
         y: newY
      })
   }
}

export function enemyStart(g: Game){
   const ctx = new Enemy(g)
   ctx.update()
   ctx.draw()
}