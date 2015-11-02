window.addEventListener("load", function () {
    init();
});
function init() {
    var stage = new createjs.Stage("canvas");
    
    var shape = new createjs.Shape();
    stage.addChild(shape);
    
    createjs.Ticker.setFPS(60);
    
    createjs.Ticker.addEventListener("tick", function () {
        //clear rects
        shape.graphics.clear();
        
        //draw 1000 rects
        for (var i = 0; i < 1000; i++) {
            shape.graphics.beginFill("#ff0000");
            shape.graphics.drawRect(Math.random() * 500, Math.random() * 500, 10, 10);
            shape.graphics.endFill();
        }
        
        stage.update();
    });
    
    //change style.display
    var status = document.getElementById("status");
    var display = "block";
    window.addEventListener("click", function () {
        display = display == "block" ? "none" : "block";
        
        stage.canvas.style.display = display;
        status.innerText = "canvas.style.display : " + display;
    });
}