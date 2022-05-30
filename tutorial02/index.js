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
circle.beginFill(0xff996f);
circle.drawPolygon([
    10, 20,
    30, 25,
    35, 50,
    10, 50,
]);
circle.endFill();
circle.x = 50;
circle.y = 50;

circle.beginFill(0xff0077);
circle.drawCircle(10, 20, 10);
circle.endFill();

circle.beginFill(0xffffff);
circle.drawCircle(0, 0, 5);
circle.endFill();
app.stage.addChild(circle); // 화면에 추가

circle.x = 150;
circle.y = 150;
console.log(circle.x);
console.log(circle.y);

circle.pivot.x = 15;
circle.pivot.y = 15;

let angle = 0;
PIXI.Ticker.shared.add(function(dt) {
    //console.log(angle);
    circle.rotation = (Math.PI / 100) * angle;
    angle += 1*dt;
})