const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 350;
const GAME_BOUNDS = { minX: 20, maxX: 400, minY: 20, maxY: 300 };
const OBSTACLES = [
    { x: 225, y: 20, x2: 275, y2: 20 },
    { x: 20, y: 150, x2: 20, y2: 200 },
    { x: 480, y: 150, x2: 480, y2: 200 }
];

let controlButtons = null;
let infoDiv = null;

const rendering = {
    canvas: document.querySelector("#the-canvas"),
    start: function () {
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.setupControls();
        this.interval = setInterval(action, 20);
    },
    setupControls: function () {
        if (controlButtons) return; 
        
        controlButtons = {
            up: document.querySelector('#up'),
            left: document.querySelector('#left'),
            right: document.querySelector('#right'),
            down: document.querySelector('#down')
        };
        
        const buttons = [
            { btn: controlButtons.up, handler: moveup },
            { btn: controlButtons.left, handler: moveleft },
            { btn: controlButtons.right, handler: moveright },
            { btn: controlButtons.down, handler: movedown }
        ];
        
        buttons.forEach(({ btn, handler }) => {
            btn.addEventListener("mousedown", handler);
            btn.addEventListener("touchstart", handler);
            btn.addEventListener("mouseup", clear);
        });
        
        infoDiv = document.querySelector('#info');
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function draw(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;

    this.stage = () => {
        const ctx = rendering.context;
        ctx.fillStyle = "white";
        ctx.strokeStyle = 'black';

        OBSTACLES.forEach(obs => {
            ctx.beginPath();
            ctx.moveTo(obs.x, obs.y);
            ctx.lineTo(obs.x2, obs.y2);
            ctx.stroke();
            ctx.closePath();
        });

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    };

    this.moveEvent = () => {
        const nextX = this.x + this.speedX;
        const nextY = this.y + this.speedY;

        if (nextX < GAME_BOUNDS.minX || nextX > GAME_BOUNDS.maxX) {
            this.speedX = 0;
        }
        if (nextY < GAME_BOUNDS.minY || nextY > GAME_BOUNDS.maxY) {
            this.speedY = 0;
        }

        this.x += this.speedX;
        this.y += this.speedY;
        
        if (infoDiv) {
            infoDiv.innerHTML = `x = ${this.x}  y = ${this.y}`;
        }
    };
}

let parameters;

function action() {
    rendering.clear();
    parameters.moveEvent();
    parameters.stage();
}

function moveup() {
    parameters.speedY -= 1;
}

function movedown() {
    parameters.speedY += 1;
}

function moveleft() {
    parameters.speedX -= 1;
}

function moveright() {
    parameters.speedX += 1;
}

function clear() {
    parameters.speedX = 0;
    parameters.speedY = 0;
}

function startTheGame() {
    parameters = new draw(80, 50, 26, 120);
    rendering.start();
}
