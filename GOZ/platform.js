

/*
**  Platform Constructor Function
**  eettlin
**  March. 14, 2019
*/

function Platform(numSegs, elev,id,l){
   this.numSegs = numSegs;
   this.numZombs = float(numSegs/2);
   this.elev=800-elev;
   this.id=id;
   this.gap=100;
   this.loc=createVector(0,this.elev);
   this.rightEdge=0;
   this.placement=1;
   this.x=1;
   this.end=l;
   this.number=0;

   if(this.id===0){
     this.loc.x=300
   }else{
     this.loc.x= zGame.platforms[this.id-1].rightEdge + this.gap;
   }
   this.rightEdge = this.loc.x + this.numSegs*200;

   if (this.numSegs > 1 && this.id > 0){
     for(var i=0; i<this.numZombs ; i++){
       if(this.x===1){
         this.placement=this.loc.x;
       } else{
         this.placement+=200;
       }
       zGame.gameElements.push(new Enemy(this.loc.x,this.rightEdge,this.placement, this.loc.y - enemy.height));
       this.x+=1;
     }
   }
   for(var i=0; i<this.numSegs ; i++){
    if(random(0, 1)< 0.5) {//  each platform 50% chanve of containg its own coin
      zGame.gameElements.push(new Coin(random(this.loc.x,this.rightEdge), this.loc.y - 22));
    }
  }
  this.run = function(){

  }

  this.update = function(){

   }

   this.render = function(){
      fill(200, 30, 50);
      //rect(this.loc.x, this.loc.y, this.w, this.h);
      for(var i=0 ; i < this.numSegs; i++){
      image(pf[this.number],this.loc.x+i*190,this.loc.y-22);
    }
   }





}//  End of Game constructor function
