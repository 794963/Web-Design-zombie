/*
**Platform Game
**
**
*/


//  Global variables

var zGame,bbg,bg,fg,backgrounds,hero,enemy,intro,end;
var moveRight = [];
var moveLeft = [];
var enemyLeft = [];
var enemyRight = [];
var pf = [];


// put setup code here
function setup() {

  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  zGame = new Game();
  backgrounds = new backgrounds();
  // var lvl1H = [200,100,250,400,200,300,400,500,650,400,500,300,200,200,300];
  // var lvl1W = [4,5,3,6,2,3,5,7,8,2,9,4,6,3,6];
  //
  // zGame.initGame(lvl1H,lvl1W);
  loadMyImages();
}

function draw() {
  //background(10, 10, 20);

  backgrounds.run();
  zGame.run();
  //  Add text to element with id demoDiv
  //document.getElementById("demoDiv").innerHTML = "PlayerStats /n/t x vel = " + zGame.hero.vel.x + "/n/t y vel = " + zGame.hero.vel.y;
}

// function keyReleased(){
//        zGame.curKey = "";  //clear curr key
//
// }


function keyPressed(){
   console.log(keyCode);
  if(keyCode === 68) {//  right arrow
     zGame.curKey = "MoveRight";
  }
  if(keyCode === 65) {//  right arrow
     zGame.curKey = "MoveLeft";
  }
}
  loadMyImages= function(){
    intro= loadImage("images/intro.png");
    end= loadImage("images/end.png")
    bbg = loadImage("images/sky.png"); //sky
    bg = loadImage("images/bbg.png"); //mountains
    fg = loadImage("images/bg.png"); //trees
    hero =loadImage("images/heroright/h0.png");
    enemy = loadImage("images/zright/z0.png");
    for(var i =1; i<6;i++){
      pf.push(loadImage("images/platforms/pf"+i+".png"));
    }
    for(var i =0; i<11;i++){
      moveRight.push(loadImage("images/heroright/h"+i+".png"));
    }
    for(var i =0; i<11;i++){
      moveLeft.push(loadImage("images/heroleft/h"+i+".png"));
    }
    for(var i =0; i<11;i++){
      enemyRight.push(loadImage("images/zright/z"+i+".png"));
    }
    for(var i =0; i<11;i++){
      enemyLeft.push(loadImage("images/zleft/z"+i+".png"));
    }
  }
