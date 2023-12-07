var characterX = 50;
var characterY = 25;

var leftArrow = 37;
var upArrow = 38;
var rightArrow = 39;
var downArrow = 40;

var circleX = 400;
var circleY = 500;
var circleXSpeed;
var circleYSpeed;

var redCircleX;
var redCircleY = 400;
var redCircleSpeed;

var mouseCircleX;
var mouseCircleY;

var squares = [];
var squareColors = ['red', 'orange', 'yellow', 'green', 'blue'];

function setup() {
    createCanvas(800, 800);
    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    redCircleSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);

    redCircleX = 400;

    for (var i = 0; i < 5; i++) {
        squares.push({
            x: Math.floor(Math.random() * 500),
            y: Math.floor(Math.random() * 500),
            size: Math.floor(Math.random() * 5) + 10,
            color: squareColors[i],
            xSpeed: Math.floor(Math.random() * 3) + 1,
            ySpeed: Math.floor(Math.random() * 3) + 1
        });
    }
}

function draw() {
    background(40, 199, 183);

    for (var i = 0; i < squares.length; i++) {
        drawSquare(squares[i]);
        moveSquare(squares[i]);
    }

    createCharacter();
    drawCharacter();
    characterMovement();

    drawRectObstacles();
    drawBlueCircle();
    moveBlueCircle();
    drawRedCircle();
    moveRedCircle();

    mouseClicked();
    drawExit();
    displayMessage();
}

function drawSquare(square) 
{
    fill(square.color);
    rect(square.x, square.y, square.size, square.size);
}

function moveSquare(square) 
{
    square.x += square.xSpeed;
    square.y += square.ySpeed;

    if (square.x > 800) 
    {
        square.x = 0 - square.size;
    } else if (square.x < 0 - square.size) 
    {
        square.x = 800;
    }
    if (square.y > 800) 
    {
        square.y = 0 - square.size;
    } else if (square.y < 0 - square.size) 
    {
        square.y = 800;
    }
}

function createCharacter() 
{
    // No need to redefine characterX and characterY here
}

function drawCharacter() 
{
    fill(177, 247, 2);
    circle(characterX, characterY, 30);
}

function characterMovement() 
{
    if (keyIsDown(upArrow)) 
    {
        characterY -= 15;
    }
    if (keyIsDown(downArrow)) 
    {
        characterY += 15;
    }
    if (keyIsDown(leftArrow)) 
    {
        characterX -= 15;
    }
    if (keyIsDown(rightArrow)) 
    {
        characterX += 15;
    }
}

function drawRectObstacles() 
{
    fill(255, 150, 2);
    rect(450, 200, 350, 100);
    rect(0, 50, 350, 100);
    rect(450, 650, 350, 100);
    rect(0, 500, 350, 100);
}

function drawBlueCircle() 
{
    fill(59, 21, 227);
    circle(circleX, circleY, 50);
}

function drawRedCircle() 
{
    fill(242, 4, 4);
    circle(redCircleX, redCircleY, 60);
}

function moveBlueCircle() {
    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);

    circleX += circleXSpeed;
    circleY += circleYSpeed;

    if (circleX > 800) 
    {
        circleX = 0;
    } else if (circleX < 0) 
    {
        circleX = 800;
    }
    if (circleY > 800) 
    {
        circleY = 0;
    } else if (circleY < 0) 
    {
        circleY = 800;
    }
}

function moveRedCircle() 
{
    redCircleX += redCircleSpeed;

    if (redCircleX > 800 || redCircleY < 0) 
    {
        redCircleX = 400;
    }
}

function mouseClicked()
 {
    mouseCircleX = mouseX;
    mouseCircleY = mouseY;

    fill(255, 255, 255);
    circle(mouseCircleX, mouseCircleY, 50);
}

function drawExit() 
{
    fill(255);
    textSize(22);
    text("EXIT", 745, 785);
}

function displayMessage()
 {
    if (characterX > 800 && characterY > 800 - 50) 
    {
        fill(0);
        stroke(15);
        textSize(30);
        text("Winner, Winner!", 400, 400);
    }
}
