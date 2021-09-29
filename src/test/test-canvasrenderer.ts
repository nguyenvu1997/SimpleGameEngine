const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d');



function renderText(object){
    const {text, x, y, align, color, size} = object;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.font = size + "px sans-serif";
    ctx.textAlign = align as CanvasTextAlign;
    ctx.fillText(text, x, y);
    ctx.closePath();
}

let obj = {
    text: "Score",
    x: 25,
    y: 25,
    align: "left",
    color: "black",
    size: "20",
}

renderText(obj)

console.log("Hello World")