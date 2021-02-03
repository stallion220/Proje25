class Paper {  
  constructor(x, y, radius){
      var options = {
          isStatic:false,
          restitution:0.2,
          friction:0.3,
          density:1.0
      }
      this.radius = radius
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
World.add(world, this.body);
      
 }
 display(){
 var pos=this.body.position
 push();
 translate(pos.x,pos.y);
  imageMode(CENTER);
  image(this.image,0,0, this.radius, this.radius);
 pop();
 }
}