var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
snakeInitialize();
gameDraw();
snakeDraw();


function gameInitialize(){
    var canvas = document.getElementById ("game-screen");
    context = canvas.getContext ("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    
}

function gameLoop() {
    gameDraw();    
    
}

function gameDraw() {
    context.fillStyle = "rgb (167 ,0 ,176)";
    context.fillRect (0, 0, screenWidth, screenHeight);
    
}

function snakeInitialize() {
    snake =[];  
    snakeLength = 7;
    snakeSize = 10;
    
for (var index=  snakeLength -1; index < snakeLength; index++){
    snake.push( {
        x: index,
        y: 0
    
    } );
}
}

function snakeDraw() {
    for (var index=  0; index < snake.Length; index++){
        context.fillStyle = "white";
        context.fillRect (snake[index] .x * snakeSize, snake[index] .y * snakeSize, snakeSize, snakeSize);
        
    }
}

function snakeUpdate() {
    
}