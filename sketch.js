//-----------------------------------------------------------------------------------------------------//
Log( "Log" , "Creating Variables & Constants" );
//--------------------------------//
//constants
//--------------------------------//
//variables

//outer wall
var track1 , track2 , track3 , track4 , track5 , track6 , track7 , track8;

//inner wall
var track9 , track10 , track11 , track12 , track13 , track14 , track15 , track16 ;

//Player
var Car , Name;

//Check Points
var check1 , check2;

//Game Assets
var GameMode , Rounds , hexChange;

//Timer
var sc , mn ;
//--------------------------------//
Log( "Log" , "Created Variables & Constants" );
//-----------------------------------------------------------------------------------------------------//
Log( "Log" , "Preloading" );
//--------------------------------//
//preload
function preload()
{

}
//--------------------------------//
Log( "Log" , "Preload Complete" );
//-----------------------------------------------------------------------------------------------------//
//setup
function setup()
{
  //--------------------------------//
  Log( "Log" , "Setting Up" );
  //--------------------------------//
  createCanvas( displayWidth , displayHeight );
  //--------------------------------//
  Car = createSprite( 100 , 300 , 25 , 25 );

  //exterior walls
  track1 = createSprite( 500 , 700 , 900 , 10 );
  track2 = createSprite( 50 , 360 , 10 , 700 );
  track3 = createSprite( 500 , 10 , 900 , 10 );
  track4 = createSprite( 950 , 160 , 10 , 300 );
  track5 = createSprite( 750 , 310 , 400 , 10 );
  track6 = createSprite( 550 , 410 , 10 , 200 );
  track7 = createSprite( 750 , 510 , 400 , 10 );
  track8 = createSprite( 950 , 600 , 10 , 200 );

  //interior walls
  track9 = createSprite( 500 , 650 , 800 , 10 );
  track10 = createSprite( 100 , 360 , 10 , 600 );
  track11 = createSprite( 500 , 60 , 800 , 10 );
  track12 = createSprite( 900 , 160 , 10 , 200 );
  track13 = createSprite( 700 , 260 , 400 , 10 );
  track14 = createSprite( 500 , 410 , 10 , 300 );
  track15 = createSprite( 700 , 560 , 400 , 10 );
  track16 = createSprite( 900 , 600 , 10 , 100 );

  //Check Points
  check1 = createSprite( 75 , 300 , 50 , 5 );
  check2 = createSprite( 525 , 380 , 50 , 5 );

  //Attributing
  Car.shapeColor = "red";
  push();
  hexChange = rgb( 0 , 0 , 255 );
  track1.shapeColor = hexChange;
  track2.shapeColor = hexChange;
  track3.shapeColor = hexChange;
  track4.shapeColor = hexChange;
  track5.shapeColor = hexChange;
  track6.shapeColor = hexChange;
  track7.shapeColor = hexChange;
  track8.shapeColor = hexChange;
  track9.shapeColor = hexChange;
  track10.shapeColor = hexChange;
  track11.shapeColor = hexChange;
  track12.shapeColor = hexChange;
  track13.shapeColor = hexChange;
  track14.shapeColor = hexChange;
  track15.shapeColor = hexChange;
  track16.shapeColor = hexChange;
  pop();
  check1.depth = -1;
  check1.shapeColor = "green";
  check2.visible = false;

  //Valuing
  GameMode = 0;
  Rounds = 0;
  sc = 0;
  mn = 0;
  Name = prompt( "Name Yourself" );

  //--------------------------------//
  Log( "Log" , "Setup Done" );
  //--------------------------------//
}
//-----------------------------------------------------------------------------------------------------//
//loop
function draw()
{
  needs( "black" );

  //track
  Car.bounceOff( track1 );
  Car.bounceOff( track2 );
  Car.bounceOff( track3 );
  Car.bounceOff( track4 );
  Car.bounceOff( track5 );
  Car.bounceOff( track6 );
  Car.bounceOff( track7 );
  Car.bounceOff( track8 );
  Car.bounceOff( track9 );
  Car.bounceOff( track10 );
  Car.bounceOff( track11 );
  Car.bounceOff( track12 );
  Car.bounceOff( track13 );
  Car.bounceOff( track14 );
  Car.bounceOff( track15 );
  Car.bounceOff( track16 );

  //Name display
  if( Name!=undefined )
  {
    STRING( Name , Car.x-3*Name.length , Car.y - 30 , 15 , "white" );
  }

  //check points
  /*
  GameMode = 0 , The Car is in the first part of the track
  GameMode = 1 , The Car is in the second part of the track
  */
  if( GameMode === 1 && Car.isTouching( check1 ) )
  {
    Rounds++;
  }
  if( Car.isTouching( check1 ) )
  {
    GameMode = 0;
  }
  if( Car.isTouching( check2 ) )
  {
    GameMode = 1
  }

  //Score Board
  STRING( "Number of rounds : " + Rounds , 200 , 300 , 20 , "green" );

  //12:56
  if( mn > 9 && sc > 9 )
  {
    STRING( "Timer : " + mn + ":" + sc , 200 , 340 , 20 , "green" );
    // Answer : 12:56
  }
  //3:40
  if( mn <= 9 && sc > 9 )
  {
    STRING( "Timer : 0" + mn + ":" + sc , 200 , 340 , 20 , "green" );
    //Answer : 03:40
  }
  //10:8
  if( mn > 9 && sc <= 9 )
  {
    STRING( "Timer : " + mn + ":0" + sc , 200 , 340 , 20 , "green" );
    //Answer : 10:08
  }
  //0:0
  if( mn <= 9 && sc <= 9 )
  {
    STRING( "Timer : 0" + mn + ":0" + sc , 200 , 340 , 20 , "green" );
    //Answer : 00:00
  }

  //timer
  if( frameCount%24 === 0 )
  {
    sc++;
  }
  if( sc === 60 )
  {
    mn++;
    sc = 0;
  }

  //Wall color changing
  if( Rounds < 255/30 )
  {
    hexChange = rgb( 0 , Rounds*30 , 255 );
  }
  else
  {
    var d = 255/3;
    var c = Rounds%d;
    hexChange = rgb( 0 , c*30 , 255 );
  }
  track1.shapeColor = hexChange;
  track2.shapeColor = hexChange;
  track3.shapeColor = hexChange;
  track4.shapeColor = hexChange;
  track5.shapeColor = hexChange;
  track6.shapeColor = hexChange;
  track7.shapeColor = hexChange;
  track8.shapeColor = hexChange;
  track9.shapeColor = hexChange;
  track10.shapeColor = hexChange;
  track11.shapeColor = hexChange;
  track12.shapeColor = hexChange;
  track13.shapeColor = hexChange;
  track14.shapeColor = hexChange;
  track15.shapeColor = hexChange;
  track16.shapeColor = hexChange;

}
//-----------------------------------------------------------------------------------------------------//
function keyTyped()
{
  if( key === 'w' )
  {
    Car.velocityY = Car.velocityY - 4;
  }
  if( key === 's' )
  {
    Car.velocityY = Car.velocityY + 4;
  }
  if( key === 'a' )
  {
    Car.velocityX = Car.velocityX - 4;
  }
  if( key === 'd' )
  {
    Car.velocityX = Car.velocityX + 4;
  }
}
//-----------------------------------------------------------------------------------------------------//