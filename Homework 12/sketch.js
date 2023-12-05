//character
var characterX = 50;
var characterY = 25;

//define Arrow key codes
var leftArrow = 37;
var upArrow = 38;
var rightArrow = 39;
var downArrow = 40;

//obstacle - blue circle
var circleX = 400;
var circleY = 500;
var circleXSpeed;
var circleYSpeed;

//obstacle - red circle
var redCircleX;
var redCircleY = 400;
var redCircleSpeed;

//circle - mouse clicked
var mouseCircleX;
var mouseCircleY;

function setup() 
{
    createCanvas(800, 800);
    //set random speed for circle obstacle
    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    redCircleSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    //createCharacter();

    //red circle starting point
    redCircleX = 400;
    
}

function draw() 
{
    background(40, 199, 183); //teal

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

//create green circle character
function createCharacter() 
{
    //character
    characterX = 50;
    characterY = 25;
}

//draw green character
function drawCharacter() 
{
    fill(177, 247, 2); //green
    circle(characterX, characterY, 30);
}

//move green character
//keys - Arrows
function characterMovement() 
{
    if (keyIsDown(upArrow)) {
        characterY -= 15;
    }
    if (keyIsDown(downArrow)) {
        characterY += 15;
    }
    if (keyIsDown(leftArrow)) {
        characterX -= 15;
    }
    if (keyIsDown(rightArrow)) {
        characterX += 15;
    }
}

//draw four rectangles and two circles
function drawRectObstacles() 
{
    //obstacles (rectangles)
    fill(255, 150, 2); //orange
    //top right block
    rect(450, 200, 350, 100);
    //top left block
    rect(0, 50, 350, 100);
    //bottom right block
    rect(450, 650, 350, 100);
    //bottom left block
    rect(0, 500, 350, 100);
}

//create blue circle
function drawBlueCircle() 
{
    // blue circle enemy
    fill(59, 21, 227); // blue
    circle(circleX, circleY, 50);
}

//create red circle
function drawRedCircle() 
{
    //red circle enemy
    fill(242, 4, 4);
    circle(redCircleX, redCircleY, 60);
}

//blue circle movement
function moveBlueCircle() 
{
    //blue circle enemy speed
    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);

    //move blue circle enemy
    circleX += circleXSpeed;
    circleY += circleYSpeed;

    //blue goes out of bounds?
    if (circleX > 800) {
        circleX = 0;
    } else if (circleX < 0) {
        circleX = 800;
    }
    if (circleY > 800) {
        circleY = 0;
    } else if (circleY < 0) {
        circleY = 800;
    }
}

//red circle movement along x axis
function moveRedCircle() 
{
    redCircleX += redCircleSpeed;

    //if red circle hits edge
    if (redCircleX > 800 || redCircleY < 0) {
        redCircleX = 400;
    }
}

//white circle when mouse is clicked
function mouseClicked() 
{
    mouseCircleX = mouseX;
    mouseCircleY = mouseY;

    //white circle when mouseclicked
    fill(255, 255, 255); //white 
    circle(mouseCircleX, mouseCircleY, 50);
}

//exit
function drawExit() 
{
    fill(255); //white
    textSize(22);
    text("EXIT", 745, 785);
}

//character leaves out the Exit and "Winner, Winner!" is displayed
function displayMessage() 
{
    if (characterX > 800 && characterY > 800 - 50) {
        fill(0);
        stroke(15);
        textSize(30);
        text("Winner, Winner!", 400, 400);
    }
}