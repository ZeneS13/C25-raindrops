class rainDrops{
  constructor(){
    this.x = random(width);
    this.y = random(-50,-10)
    this.yspeed = random(3,7);
  }
  fall(){
    this.y = this.y+this.yspeed;
  }
  display(){
    fill("blue");
    ellipse(this.x,this.y,random(1,10),random(1,10));
    if(this.y>height){
      this.y = -10;
    }
  }
}