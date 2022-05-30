let app = new PIXI.Application({
    width: 300,
    height: 300,
    antialias: true,
    transparent: !true,
    resolution: window.devicePixelRatio,
    autoResize: true
})
document.body.appendChild(app.view) // 화면에 추가
console.log(app.view);

let circle = new PIXI.Graphics();
circle.beginFill(0x00ffff);
circle.drawCircle(0,0,50);
circle.endFill();
circle.x = 50;
circle.y = 50;
app.stage.addChild(circle); // 화면에 추가

circle.interactive = true;
circle.click = function() {
    console.log("clicked!");
    function ani(dt) {
        if (circle.y >= 100){
            PIXI.Ticker.shared.remove(ani)
        } else {
            circle.y += 2 * dt;
            circle.x += 1 * dt;
        }
        console.log(circle.y);
    }
    PIXI.Ticker.shared.add(ani)
}