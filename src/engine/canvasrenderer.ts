import { Game } from "./gamecore.js";
import { Scene } from "./scene.js";

export class CanvasRenderer {
    game: Game;
    ctx: CanvasRenderingContext2D;

    constructor(){
        console.log("Canvas Renderer");
    }

    render(scene: Scene) {
        scene.objectList.forEach(obj => {
        });
    }

    renderImage(object) {
        const {imageUrl, sx, sy, sw, sh, x, y, w, h} = object;
        let image = new Image();
        image.src = imageUrl;
        this.ctx.beginPath();
        this.ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
        this.ctx.closePath();
    }

    renderText(object){
        const {text, x, y, align, color, size} = object;
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.font = size + "px sans-serif";
        this.ctx.textAlign = align as CanvasTextAlign;
        this.ctx.fillText(text, x, y);
        this.ctx.closePath();
    }
}