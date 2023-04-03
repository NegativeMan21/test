let clip = document.querySelector(".vid")
clip.addEventListener("mouseover", function (e) {
    clip.play();
})
clip.addEventListener("mouseout", function (e) {
    clip.pause();
})
// let tankClip = document.querySelector(".tank-vid")
// tankClip.addEventListener("mouseover", function (e) {
//     tankClip.play();
// })
// tankClip.addEventListener("mouseout", function (e) {
//     tankClip.pause();
// })

let disClip = document.querySelector(".dis-vid")
disClip.addEventListener("mouseover", function (e) {
    disClip.play();
})
disClip.addEventListener("mouseout", function (e) {
    disClip.pause();
})
///////////////////////video/////////////////////////////////////////////////////
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth - 17;
canvas.height = window.innerHeight;
ctx.fillStyle - "black";

class Circle {
    constructor(effect) {
        this.effect = effect;
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
        this.radius = Math.random() * 80 + 30;
        this.speedX = (Math.random() - 0.5) * 5;
        this.speedY = (Math.random() - 0.5) * 5;
        this.flag = 0;
    }
    update() {
        if (this.x < this.radius || this.x > this.effect.width - this.radius)
            this.speedX *= -1;
        if (this.y < this.radius || this.y > this.effect.height - this.radius)
            this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    reset() {
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
    }
}
class Effect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.circleArray = [];
    }
    init(numberOfCircles) {
        for (let i = 0; i < numberOfCircles; i++) {
            this.circleArray.push(new Circle(this));
        }
    }
    update() {
        this.circleArray.forEach(circle => circle.update());
    }
    draw(context) {
        this.circleArray.forEach(circle => circle.draw(context));
    }
    reset(newWidth, newHeight) {
        this.wdith = newWidth;
        this.height = newHeight;
        this.circleArray.forEach(circle => circle.reset());
    }
}
const effect = new Effect(canvas.width, canvas.height);
effect.init(30);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.update();
    effect.draw(ctx);
    requestAnimationFrame(animate)
}

animate();
window.addEventListener("resize", function () {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "black";
    effect.reset(canvas.width, canvas.height);
});
////////////////////////////////////////////////////////////////////////////////////////
let vec = [];
const num = 2000;
function setup() {
    var canvas2 = createCanvas(document.documentElement.clientWidth, window.innerHeight + 200);
    for (let i = 0; i < num; i++) {
        vec.push(createVector(random(width), random(height)));
    }
    stroke(85, 230, 184);
    canvas2.parent("intro")
}

const noiseScale = 0.005;

function draw() {
    background(0, 10);
    for (let i = 0; i < num; i++) {
        let v = vec[i];
        point(v.x, v.y);
        let n = noise(v.x * noiseScale, v.y * noiseScale);
        let a = TAU * n;
        v.x += cos(a);
        v.y += sin(a);
        if (!onScreen(v)) {
            v.x = random(width);
            v.y = random(height);
        }

    }
}
function mouseReleased() {
    noiseSeed(millis());
}
function onScreen(vector) {
    return vector.x >= 0 && vector.x <= width && vector.y >= 0
        && vector.y <= height;
}
////////////////////////perlinNoise//////////////////////////////////////////////
var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset
        || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px";
    }
    else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})
/////////////////////////////scroll///////////////////////////////

const canvas3 = document.getElementById('mycanvas3');
const ctx2 = canvas3.getContext('2d');
canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;

class Root {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 7 + 5;
        this.size = Math.random() * 1 + 2;
        this.vs = Math.random() * 0.2 + 0.05;
        this.angleX = Math.random() * 6.2;
        this.vax = Math.random() * 0.6 - 0.3;
        this.angleY = Math.random() * 6.2;
        this.vay = Math.random() * 0.6 - 0.3;
        // this.lightness = 10;
    }
    update() {
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size += this.vs;
        this.angleX += this.vax;
        this.angleY += this.vay;
        // if (this.lightness < 70) this.lightness += 0.5;
        if (this.size < this.maxSize) {
            ctx2.beginPath();
            ctx2.arc(this.x, this.y, this.size, 0,
                Math.PI * 2);
            ctx2.fillStyle = 'hsl(50,80%, 90%)';
            ctx2.fill();
            ctx2.stroke();
            requestAnimationFrame(this.update.bind(this));
        }
    }
}
window.addEventListener('mousemove', function (e) {
    if (drawing) {
        for (let i = 0; i < 3; i++) {
            const root = new Root(e.x, e.y);
            root.update();
        }
    }
});
window.addEventListener('mousedown', function () {
    drawing = true;
});
window.addEventListener('mouseup', function () {
    drawing = false;
});
/////////////////////////////canvas3 mouse-movement///////////////////////////////
