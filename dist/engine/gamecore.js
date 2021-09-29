export class Game {
    constructor() {
        // input: InputManager;
        // renderer: CanvasRenderer;
        this.lastTime = window.performance.now();
    }
    loop() {
        const time = window.performance.now();
        const delta = time - this.lastTime;
        // this.scenes.each.update(time, delta);
        // this.renderer.render();
        this.lastTime = time;
        requestAnimationFrame(this.loop);
    }
}
