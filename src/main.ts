import {Game} from './Game.js';
const game = new Game()

document.addEventListener('keydown', (e)=>{
   game.updateMove(e)
})

setInterval(()=>game.start(), 100)
