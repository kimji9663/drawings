function World(width, height) {

    this.width = width || 300;
    this.height = height || 300;

    this.balls = [];

    // Ball 클래스 생성
    function Ball(x, y, rad) {
        this.x = x || 0;
        this.y = y || 0;
        this.rad = rad || 25;

        //좌표 랜덤
        this.velX = Math.random()*5 - Math.random()*5;
        this.velY = Math.random()*5 - Math.random()*5;

        //컬러 랜덤
        this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    // Ball 생성
    while(this.balls.length < 5) {
        this.balls.push(new Ball(
            Math.random()*this.width, //x
            Math.random()*this.height,//y
            Math.random()*30+10 //rad 반지름 (최소값 10, 최대값 40)
        ));
    };

    //console.log(this.balls);

    this.update = function() {
        for(var b in this.balls){
            var ball = this.balls[b];

            if(ball.x < 0 || ball.x > width){
                ball.velX = -ball.velX;
            }
            if(ball.y < 0 || ball.y > height) {
                ball.velY = -ball.velY;
            }

            ball.x += ball.velX;
            ball.y += ball.velY;
        }
    };
}

var world = new World(600, 600),
    canvas = document.body.appendChild(document.createElement('canvas')),
    ctx = canvas.getContext("2d");

canvas.width = world.width;
canvas.height = world.height;

function draw() {
    ctx.fillStyle = "#000";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(var b in world.balls) {
        var ball = world.balls[b];

        ctx.fillStyle = ball.color;
        ctx.beginPath();

        ctx.arc(
            ball.x,
            ball.y,
            ball.rad,
            0,
            2*Math.PI
        );

        ctx.fill();
    }
}

function animate() {
    
    world.update();

    draw();

    requestAnimationFrame(animate);
}

animate();