import { GameObject } from "./gameobjects.js";
export class GameText extends GameObject {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    constructor(sx, sy, sw, sh, x, y, width, height) {
        super(x, y, width, height);
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
    }
}
