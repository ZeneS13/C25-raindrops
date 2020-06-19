var drop = [100];

function setup() {
  createCanvas(500,500);
  
  for(var i=0;i<100;i++){
     drop[i] = new rainDrops;
  }
}

function draw() {
  background(0);
  for(var i=0;i<100;i++){
    drop[i].display();  
    drop[i].fall();
  }
}