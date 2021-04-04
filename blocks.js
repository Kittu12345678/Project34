class Block {
    constructor(x, y) {
      var options = {
          'restitution':0.4,
          'friction':1.0
          
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
    
      
    
      
      World.add(world, this.body);
    }

   



    display(){
      
            
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
      
      


    }
  }; 