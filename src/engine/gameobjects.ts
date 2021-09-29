import { Scene } from "./scene.js"
import { Game } from "./gamecore.js"

export class GameObject {
    x: number
    y: number
    width: number
    height: number

    scene: Scene
    game: Game

    constructor(x: number, y:number, width:number, height:number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
}