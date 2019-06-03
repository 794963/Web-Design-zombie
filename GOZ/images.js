function backgrounds(){
  this.offsetX1=0;
  this.offsetX2=0;
  this.offsetX3=0;
  this.run=function(){
    this.update();
    this.render();
  }

    this.update= function(){
    if (keyIsDown(68)){
      this.offsetX1-=1*zGame.sprint;
      this.offsetX2-=2*zGame.sprint;
      this.offsetX3-=4*zGame.sprint;
    }


    if (keyIsDown(65)){
      this.offsetX1+=1*zGame.sprint;
      this.offsetX2+=2*zGame.sprint;
      this.offsetX3+=4*zGame.sprint;
    }

    if(this.offsetX1 <= -width){
      this.offsetX1 = 0;
    }

    if(this.offsetX1 >= width){
      this.offsetX1 = 0;
    }

    if(this.offsetX2 <= -width){
      this.offsetX2 = 0;
    }

    if(this.offsetX2 >= width){
      this.offsetX2 = 0;
    }

    if(this.offsetX3 <= -width){
      this.offsetX3 = 0;
    }

    if(this.offsetX3 >= width){
      this.offsetX3 = 0;
    }
  }

  this.render=function(){
    image(bbg,this.offsetX1,0);
    image(bbg,this.offsetX1 - width,0);
    image(bbg,this.offsetX1 + width,0);

    image(bg,this.offsetX2,800-bg.height);
    image(bg,this.offsetX2 - width,800-bg.height);
    image(bg,this.offsetX2 + width,800-bg.height);

    image(fg,this.offsetX3,800-fg.height);
    image(fg,this.offsetX3 - width,800-fg.height);
    image(fg,this.offsetX3 + width,800-fg.height);
  }

}
