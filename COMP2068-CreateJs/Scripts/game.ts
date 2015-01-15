var canvas;
var stage: createjs.Stage;
var helloText: createjs.Text;

function init() {

    canas = document.getElementById("canvas");
    stage = new cretaejs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}

funciton gameLoop() {
    helloText.x++;
    helloText.y++;

    stage.update();
}

function main() {
    var helloText = new createjs.Text("Hello World", "40px consoles", "#000000");
    stage.addchild(helloText);
}