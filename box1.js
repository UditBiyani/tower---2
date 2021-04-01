class Box1{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,30,40,options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
        if(this.body.speed<3){
          var angle = this.body.angle;
          push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#ADD8E6");
        strokeWeight(2);
        stroke("pink");
        rect(0, 0, this.width, this.height);
        pop();
        }
    
        else{
          var angle = this.body.angle;
        
          World.remove(world,this.body);
          push();
          this.Visiblity = this.Visiblity-5;
          tint(255, this.Visiblity);
          rect(this.body.position.x,this.body.position.y,30,40);
          pop();
        }
      
       
      }
}