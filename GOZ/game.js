

/*
**  Game Constructor Function
**  eettlin
**  March. 14, 2019
*/

function Game(){
  this.gameState=0;
  this.starting=0;
  this.gameElements = [];  // all game elements
  this.platforms = [];
  this.curKey = 0;
  this.worldX = 0;
  this.worldXSpeed = 2;
  this.hero;
  this.score=0;
  this.zscore=0;
  this.elev=[];
  this.numPlatforms=[];
  this.clr=color(255,255,255);
  this.sprint=1;

  // var numPlatforms = 10;

  this.initGame = function(h,w){
    this.gameElements = [];  // all game elements
    this.platforms = [];
    this.elev=[];
    this.numPlatforms=[];
    for(var i = 0; i < h.length; i++){
      this.elev.push(h[i]);
      this.numPlatforms.push(w[i]);
    }
    for(let i = 0; i < this.numPlatforms.length; i++){
      this.platforms.push(new Platform(this.numPlatforms[i], this.elev[i],i,this.numPlatforms.length));
    }
    var heroXLoc = width/2;
    var heroYLoc = 30 ;
    this.hero = new Hero(createVector(heroXLoc + 20, heroYLoc));
    this.gameElements.push(this.hero);
  }

  this.run = function(){
     this.update();
     this.render();
  }

  this.update = function(){
     this.setWorldX();
     translate(this.worldX, 0 );
     for(var i = 0; i < this.gameElements.length; i++){
        this.gameElements[i].update();
     }

     for(var i = 0; i < this.platforms.length; i++){
        this.platforms[i].update();
     }
   }

   this.render = function(){
     if(this.gameState===0){
       fill(0,0,0);
       rect(0,0,windowWidth,windowHeight);
       fill(255,255,255);
       textSize(100);
       textAlign(CENTER);
       text('GAME',width/2,height/2);
       image(intro,0,0);
       if(mouseX>400 && mouseX<800 && mouseY<600 && mouseY>500){
         this.clr=color(200,200,200);
       } else{
         this.clr=color(255,255,255);
       }
       fill(this.clr);
       rect(400,500,400,100);
       fill(0,0,0);
       textSize(50);
       text('START',width/2,height/2+175)
       textAlign(LEFT);
       if(mouseIsPressed && mouseX>400 && mouseX<800 && mouseY<600 && mouseY>500){
         this.gameState+=1;
         this.starting=1;
       }
     } else if(this.gameState===1){
       if(this.starting===1){
         var lvl1H = [200,100,250,400,200,300,400,500,650,400,500,300,200,200,300,300];
         var lvl1W = [4,5,3,6,2,3,5,7,8,2,9,4,6,3,6,1];
         this.initGame(lvl1H,lvl1W);
         this.starting=0;
       }

       for(var i = 0; i < this.platforms.length; i++){
         this.platforms[i].render();
       }

       for(var i = 0; i < this.gameElements.length; i++){
         this.gameElements[i].render();
       }
       fill(255,255,0);
       textSize(32);
       text('Coins: '+this.score,0,32);
       fill(0,255,0);
       text('Score: '+this.zscore,0,74);
     } else if(this.gameState===2){
       if(this.starting===1){
         var lvl1H = [200,200,200,200,200,200];
         var lvl1W = [1,2,3,4,5,1];
         this.initGame(lvl1H,lvl1W);
         this.starting=0;
       }

       for(var i = 0; i < this.platforms.length; i++){
         this.platforms[i].render();
       }

       for(var i = 0; i < this.gameElements.length; i++){
         this.gameElements[i].render();
       }
       fill(255,255,0);
       textSize(32);
       text('Coins: '+this.score,0,32);
       fill(0,255,0);
       text('Score: '+this.zscore,0,74);
     } else if(this.gameState===3){
       if(this.starting===1){
         var lvl1H = [300,300,300,300,300,300];
         var lvl1W = [5,4,3,2,2,1];
         this.initGame(lvl1H,lvl1W);
         this.starting=0;
       }
       for(var i = 0; i < this.platforms.length; i++){
         this.platforms[i].render();
       }

       for(var i = 0; i < this.gameElements.length; i++){
         this.gameElements[i].render();
       }
       fill(255,255,0);
       textSize(32);
       text('Coins: '+this.score,0,32);
       fill(0,255,0);
       text('Score: '+this.zscore,0,74);
     } else{
       fill(0,0,0);
       rect(0,0,windowWidth,windowHeight);
       fill(255,0,0);
       textAlign(CENTER);
       textSize(100);
       text('Game Over',width/2,height/2);
       image(end,0,0);
       if(mouseX>400 && mouseX<800 && mouseY<600 && mouseY>500){
         this.clr=color(200,200,200);
       } else{
         this.clr=color(255,255,255);
       }
       fill(this.clr);
       rect(400,500,400,100);
       fill(0,0,0);
       textSize(50);
       text('RESTART',width/2,height/2+175)
       textAlign(LEFT);
       if(mouseIsPressed && mouseX>400 && mouseX<800 && mouseY<600 && mouseY>500){
         this.gameState=1;
         this.starting=1;
         this.score=0;
         this.zscore=0;
       }
     }
   }

   this.setWorldX = function(){

      if(keyIsDown(68)){
        for(var i = 0; i < this.platforms.length; i++){
           this.platforms[i].loc.x-=5*this.sprint;
        }
      }
      if(keyIsDown(65)){
        for(var i = 0; i < this.platforms.length; i++){
           this.platforms[i].loc.x+=5*this.sprint;
        }
      }
   }
}//  End of Game constructor function
