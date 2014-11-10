var snake;
var snakeLength;
var snakeSize;
var snakeDirection;

var food;

var context;
var screenWidth;
var screenHeight;
var gameState;
var gameOver;

//Executing game code

gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000 / 20);




//game functions


function gameInitialize() {

    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;

    document.addEventListener("keydown", keyboardHandler);

    gameOverMenu = document.getElementById("gameOver");

    setState("PLAY");

}

function gameLoop() {
    gameDraw();
    snakeUpdate();
    snakeDraw();
    foodDraw();

}

function gameDraw() {
    context.fillStyle = "rgb(0, 0, 0)";
    context.fillRect(0, 0, screenWidth, screenHeight);

    snakeDraw();

}

//snake functions

function snakeInitialize() {
    snake = [];
    snakeLength = 10;
    snakeSize = 19;
    snakeDirection = "down";

    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push({
            x: index,
            y: 0

        });
    }
}

function snakeDraw() {
    for (var index = 0; index < snake.length; index++) {
        context.fillStyle = "orange";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);

    }
}

function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;

    checkFoodCollisions(snakeHeadX, snakeHeadY);
    checkWallCollisions(snakeHeadX, snakeHeadY);

    if (snakeDirection === "down") {
        snakeHeadY++;
    }

    else if (snakeDirection === "right") {
        snakeHeadX++;
    }

    else if (snakeDirection === "up") {
        snakeHeadY--;
    }

    else if (snakeDirection === "left") {
        snakeHeadX--;
    }



    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}

//food functions

function foodInitialize() {
    food = {
        x: 0,
        y: 0

    };
    setFoodPosition();
}




function foodDraw() {
    context.fillStyle = "gray";
    context.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
}

function setFoodPosition() {

    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    food.x = Math.floor(randomX / snakeSize);
    food.y = Math.floor(randomY / snakeSize);

}

//game controls

function keyboardHandler(event) {
    console.log(event);

    //these are the controls for WASD    

    if ((event.keyCode == "68" || event.keyCode == "68") && snakeDirection != "Left") {
        snakeDirection = "right";

    }

    if (event.keyCode == "65" && snakeDirection != "Right") {
        snakeDirection = "left";

    }

    if (event.keyCode == "87" && snakeDirection != "Down") {
        snakeDirection = "Up";

    

    if (event.keyCode == "83" && snakeDirection != "Up") {
        snakeDirection = "down";

    }

    //these are the controls for arrow keys

    if (event.keyCode == "39" && snakeDirection != "Left") {
        snakeDirection = "right";

    }

   else if (event.keyCode == "37" && snakeDirection != "Right") {
        snakeDirection = "left";

    }

   else if (event.keyCode == "38" && snakeDirection != "Down") {
        snakeDirection = "up";

    }

   else if (event.keyCode == "40" && snakeDirection != "Up") {
        snakeDirection = "down";

    }

}

function checkFoodCollisions(snakeHeadX, snakeHeadY) {
    if (snakeHeadX == food.x && snakeHeadY == food.y) {
        snake.push({
            x: 0,
            y: 0
        });
        snakeLength++;

        var randomX = Math.floor(Math.random() * screenWidth);
        var randomY = Math.floor(Math.random() * screenHeight);

        food.x = Math.floor(randomX / snakeSize);
        food.y = Math.floor(randomY / snakeSize);
    }
}
function checkWallCollisions(snakeHeadX, snakeHeadY) {
    if (snakeHeadX * snakeSize >= screenWidth || snakeHeadX * snakeSize < 0) {
        setState("GAME OVER");
    }

    if (snakeHeadY * snakeSize >= screenHeight || snakeHeadY * snakeSize < 0) {
        setState("GAME OVER");
    }
}

checkSnakeCollisions(snakeHeadX, snakeHeadY);
setState(state);
displayMenu(menu);
centerMenuPositon(menu);


function checkSnakeCollisions(snakeHeadX, snakeHeadY) {

}
function setState(state) {
    gameState = state;
    showMenu(state);
}
function displayMenu(menu) {
    menu.style.visibility = "visible";
}
function showMenu(state) {
    if (state === "GAME OVER") {
        displayMenu(gameOverMenu);
    }
}

function centerMenuPosition(menu) {
    menu.style.top = (screenHeight / 2) - (menu.offetHeight / 2) + "px";
    menu.style.left = (screenWidth / 2) - (menu.offsetWidth / 2) + "px";
}