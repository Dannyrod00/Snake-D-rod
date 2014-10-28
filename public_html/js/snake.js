         
//these are my varables
            
            var snake;
            var snakeLength;
            var snakeSize;
            var snakeDirection;
            var food;


            var context;
            var screenWidth;
            var screenHeight;



          gameInitialize();
          snakeInitialize();
          setInterval(gameLoop, 1000/10);
          
//these are my functions


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
   snakeUpdate();
   snakeDraw();
    
}

function gameDraw() {
    context.fillStyle = "rgb (255, 255, 255)";
    context.fillRect (0, 0, screenWidth, screenHeight);
    
}

function snakeInitialize() {
    snake =[];  
    snakeLength = 7;
    snakeSize = 30;
    snakeDirection =- "down";
    
for (var index=  snakeLength -1; index >= 0; index--){
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

//function snakeUpdate() {
//var snakeHeadX =snake[0].x;
//var snakeHeadY =snake[0].y;
//
//if( snakeDirection == "down" ){
//    snakeHead++;
//}
//
//else if( snakeDirection == "right" ){
//    snakeHead++;
//}
//
//var snakeTail = snake.pop();
//snakeTail.x = snakeHeadx;
//snakeTail.y = snakeHeady;
//}
//
//function foodInitialize(){
//food = {
//    x:0,
//    y:0        
//
//};
//setFoodPositon();
//}
//
//function foodDraw() {
//contex.fillStyle = "white";
//contex.fillRect = (food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
//}
//
//function setFoodPosition() {
//var randomX = Math.floor(Math.random() * screenWidth); 
//var randomY = Math.floor(Math.random() * screenHeight);
//
//food.x = Math.floor(randomX / snakeSize);
//food.y = Math.floor(randomY / snakeSize)
//}