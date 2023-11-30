//leftleg and rightleg on x axis moving back and forth at random speeds

var leftlegX = 210;
var leftlegDirection = 1;
var leftlegSpeed 

var rightlegX = 260;
var rightlegDirection = 1;
var rightlegSpeed 

//leftarm and rightarm on y axis moving back and forth at different speeds

var leftarmY = 190;
var leftarmDirection = 1;
var leftarmSpeed 

var rightarmY = 285;
var rightarmDirection = 1;
var rightarmSpeed 

//torso moving diagonally
var torsoX = 210;
var torsoY = 190;
var torsoXDirection = 1;
var torsoYDirection = 1;

//text gets bigger and smaller
var size = 16
var count = 0;
var sizeDirection = 5;

//make face bigger and smaller
var faceSize = 100

function setup() 
{
  createCanvas(500, 600);
  setSpeeds ();
}

function setSpeeds() 
{
  leftlegSpeed = randomSpeed ();
  rightlegSpeed = randomSpeed ();
  leftarmSpeed = randomSpeed ();
  rightarmSpeed = randomSpeed ();
}

function randomSpeed()
{
  return Math.random() * 4 +1;
}

function draw() 
{
  //teal background
    background (66, 231, 192)

  // Face
 //Make face get bigger and smaller continously
    fill(245, 225, 199); //skin
    circle(250, 130, faceSize);
    faceSize += sizeDirection *2;
    if(faceSize >120 || faceSize <80)
      {
        sizeDirection *= -1;
        
      }
  // Eyes
    fill(49, 43, 5) //brown
    circle(232, 115, 8) //left
    circle(268, 115, 8) //right

  // Nose
    fill(254,213,213) //skin
    triangle(245,135,250,130,255,135)
   

  // Mouth
    fill(172, 3, 3)
    triangle(240,155,250,165,260,155) //bottom lip
    triangle(240,155,250,155,245,148) //left top lip
    triangle(250,155,255,148,260,155) //right top lip

  //Neck
    fill(245, 225, 199); //skin
    square(244,180,13)

  //Torso
//move torso diagonally
    fill(12, 101, 244) //blue
    rect(torsoX,torsoY,80,150)
    torsoX += torsoXDirection * randomSpeed();
    if(torsoX >= 300 || torsoX <= 100 )
      {
        torsoXDirection *= -1;
      }
 
    torsoY += torsoYDirection * randomSpeed();
    if(torsoY >= 300 || torsoY <= 100)
      {
        torsoYDirection *= -1;
      }

  //Legs
    fill(21, 2, 2)
    rect(leftlegX,340,30,180) //left leg
    rect(rightlegX,340,30,180) //right leg
 
//move leftleg back and forth on x axis
    leftlegX += leftlegDirection * leftlegSpeed;
    if(leftlegX <= 210 || leftlegX >= 450)
      {
        leftlegDirection *=-1;
        leftlegSpeed = randomSpeed();
      }
 
//move rightleg back and forth on x axis
    rightlegX += rightlegDirection * rightlegSpeed;
    if(rightlegX <= 260 || rightlegX >= 450)
      {
        rightlegDirection *=-1;
        rightlegSpeed = randomSpeed();
      }
     
  //Arms
    fill(12, 101, 244) //blue
    rect(190,leftarmY,25,140) //left arm
    rect(285,rightarmY,25,140) //right arm
 
//move leftarm back and forth on y axis
    leftarmY += leftarmDirection * leftarmSpeed;
    if(leftarmY <= 260 || leftarmY >= 450)
      {
        leftarmDirection *=-1;
        leftarmSpeed = randomSpeed();
      }

//move rightarm back and forth on y axis
    rightarmY += rightarmDirection * rightarmSpeed;
    if(rightarmY <= 190 || rightarmY >= 450)
      {
        rightarmDirection *=-1;
        rightarmSpeed = randomSpeed();
      }
 

  // Hair
    fill(82, 37, 2)
    rect(205,75,90,30) //hair-bangs
    rect(193,75,25,155) //left side
    rect(282,75,25,155) //right side
   

  // Text
//make text large and small
    fill(0); // Black text
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
   
    text("Self Portrait", 210, 50)
    text("Lauren Ciampa", 195, 560);
}
