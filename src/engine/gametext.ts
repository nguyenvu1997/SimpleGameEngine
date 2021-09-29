import { GameObject } from "./gameobjects.js";

export class GameText extends GameObject{
    imgUrl: string;
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    // x: number;
    // y: number;
    // width: number;
    // height: number;

    constructor(sx:number, sy:number, sw:number, sh:number, x:number, y:number, width:number, height:number){
        super(x, y, width, height);
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
    }
}