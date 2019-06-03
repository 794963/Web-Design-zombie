

/*
**  Ball Constructor Function
**  eettlin
**  Sept. 14, 2018
*/

function Enemy(leftEdge,rightEdge,x,y){
  this.leftEdge=leftEdge;
  this.rightEdge=rightEdge;
  this.loc = createVector(x,y);
  this.vel = createVector(random(3,5),0);
  this.acc = createVector(0,0);
  this.de_troy=false;
  this.finished=0;
  this.scored=0;
  this.count=1;
  this.delay=1;
  this.dead=0;
  this.timer=0;
  this.turn=0;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){
    this.isColliding(zGame.hero);
    if (this.scored===1){
      zGame.zscore+=100;
      this.scored=0;
      this.finished=1;
    }
    if(this.loc.x < this.leftEdge){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > this.rightEdge - enemy.width ){
      this.vel.x = -this.vel.x;
    }
    if(this.turn===1){
      this.vel.x = -this.vel.x;
    }

    this.loc.add(this.vel);
    this.vel.add(this.acc);

    if(keyIsDown(65)){
      this.loc.x+=5*zGame.sprint;
      this.leftEdge+=5*zGame.sprint;
      this.rightEdge+=5*zGame.sprint;
    }
    if(keyIsDown(68)){
      this.loc.x-=5*zGame.sprint;
      this.leftEdge-=5*zGame.sprint;
      this.rightEdge-=5*zGame.sprint;
    }
  }

  this.render = function(){
    if(this.dead===0){
      if (this.vel.x>0){
        image(enemyRight[this.count-1],this.loc.x,this.loc.y);
        if(this.delay%5===0)this.count++;
        if(this.count>5)this.count=1;
        if(this.delay>2000000)this.delay=1;
        this.delay++;
      } else{
        image(enemyLeft[this.count-1],this.loc.x,this.loc.y);
        if(this.delay%5===0)this.count++;
        if(this.count>5)this.count=1;
        if(this.delay>2000000)this.delay=1;
        this.delay++;
      }
    } else{
      image(enemy,this.loc.x,this.loc.y);
    }
    if(this.timer>2000000)this.timer=0;
    this.timer++;
  }
  this.checkEdges = function(){

  }

  this.isColliding = function(h){
    if (h.loc.y >= this.loc.y && h.loc.y <= this.loc.y + enemy.height && h.loc.x >= this.loc.x && h.loc.x<= this.loc.x+ enemy.width){
      if (h.vel.y > 0){
        h.vel.y=-5;
        this.dead=1;
        this.vel.x=0;
        this.vel.y=10;
        this.acc.y=.5;
        this.timer=0;
        if (this.finished===0){
          this.scored=1;
        }
      } else {
        if(this.timer > 30 && h.vel.y <= 0){
          this.turn=1;
          h.health-=25;
          this.timer=0;
        }
      }
      return true;
    }else{
      this.turn=0;
      return false;
    }
  }



}//  End of Ball constructor function
