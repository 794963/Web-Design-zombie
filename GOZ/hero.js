

/*
**  Game Constructor Function
**  eettlin
**  March. 14, 2019
*/
var state = {
  inAir:true,
  mRight:false,
  mLeft:false
};

function Hero(location){

  this.loc = location;
  this.vel = createVector(0,0);
  this.acc = createVector(0,.3);
  this.health = 100;
  this.curKey = 0;
  this.truth=0;
  this.doubleJump=0;
  this.timer=0;
  this.count=1;
  this.delay=1;
  this.facingr=1;

  this.run = function(){
    this.update();
    this.render();

  }

  this.update = function(){
    if (keyIsDown(16)){
      zGame.sprint=3;
    }else{
      zGame.sprint=1;
    }
    for(var i = 0; i < zGame.platforms.length; i++){
      this.isColliding(zGame.platforms[i]);
    }
    if (this.truth === zGame.platforms.length){
      inAir=true;
    } else {
      inAir=false;
    }
    this.truth=0;
    if (inAir){
      this.acc.y=.25;
      if(keyIsDown(32) && this.doubleJump===1 && this.timer < 0){
        this.vel.y=-5;
        this.doubleJump=0;
      }
    }
    if (!inAir){
      this.acc.y=0;

      if (keyIsDown(32)){
        this.vel.y=-7;
        this.acc.y=.1;
        inAir=true;
      }
    }
    if (this.loc.y>height){
      this.health=0;
    }
    this.vel.y+=this.acc.y;
    this.loc.add(this.vel);
    this.timer-=1;
  }

  this.render = function(){
    if(this.health > 0){
      fill(50, 230, 30);
      var x = this.loc.x;
      var y = this.loc.y;
      if (keyIsDown(68) && !keyIsDown(65)){
        image(moveRight[this.count-1],this.loc.x-20,this.loc.y-50);
        if(this.delay%5/zGame.sprint===0)this.count++;
        if(this.count>10)this.count=1;
        if(this.delay>2000000)this.delay=1;
        this.delay++;
        this.facingr=1;
      } else if (keyIsDown(65) && !keyIsDown(68)){
        image(moveLeft[this.count-1],this.loc.x-20,this.loc.y-50);
        if(this.delay%5/zGame.sprint===0)this.count++;
        if(this.count>10)this.count=1;
        if(this.delay>2000000)this.delay=1;
        this.delay++;
        this.facingr=0;
      } else if(this.facingr===1 && !keyIsDown(68)){
        this.count=1;
        this.delay=1;
        image(moveRight[this.count-1],this.loc.x-20,this.loc.y-50);
      } else{
        this.count=1;
        this.delay=1;
        image(moveLeft[this.count-1],this.loc.x-20,this.loc.y-50);
      }
      noStroke();
      fill(255,0,0);
      rect(this.loc.x-25,this.loc.y-55,50,7.5);
      fill(0,255,0);
      rect(this.loc.x-25,this.loc.y-55,this.health/2,7.5);
    } else{
      zGame.gameState=4;
    }
  }

  this.isColliding = function(p){
    if (this.loc.y >= p.loc.y && this.loc.y <= p.loc.y+ pf.height && this.loc.x>= p.loc.x && this.loc.x<=p.loc.x+ pf.width*p.numSegs && this.vel.y>0){
      if(p.id===p.end-1){
        zGame.gameState+=1;
        zGame.starting=1;
      }
      this.loc.y=p.loc.y;
      this.vel.y=0;
      this.acc.y=0;
      this.doubleJump=1;
      this.timer=30;
      return true;
    }else{
      this.truth+=1;
      return false;
    }
  }


}//  End of Game constructor function
