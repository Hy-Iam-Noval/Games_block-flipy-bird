import { Game } from "./Game.js"

export type Coordinate = {
   x : number
   y : number
}


export abstract class AbstractGame<T> {
   abstract coor:T
   constructor(protected readonly game:Game){}
   abstract update():void
   abstract draw():void
}

export const canvas = document.getElementById("canvas") as HTMLCanvasElement
export const ctx = canvas.getContext('2d')

export function range(start:number, end: number, skip: number = 1) {
   const list = [start]
   for (const i of Array(end).keys()) {
      const val = i * skip
      if(val<=start) continue
      if(val >= end) {
         list.push(end)
         break
      }
      list.push(val)
   }
   return list
}