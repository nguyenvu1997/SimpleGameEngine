import { SceneManager } from "./scenemanager.js";

export class Game {
    scenes: SceneManager;
    // input: InputManager;
    // renderer: CanvasRenderer;
    lastTime: number = window.performance.now();

    loop(): void {
        const time = window.performance.now();
        const delta = time - this.lastTime;
        // this.scenes.each.update(time, delta);
        // this.renderer.render();
        this.lastTime = time;
        requestAnimationFrame(this.loop)
    }

}