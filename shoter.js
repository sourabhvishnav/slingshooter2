class Shoter{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':0.8
        }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world,this.body);
}
  
 display(){
     var pos = this.body.position;
     ellipseMode(CENTER);
     fill("blue");
     ellipse(pos.x,pos.y,this.width,this.height);
 }
}