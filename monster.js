class Monster {
    constructor(x, y) {
      var options = {
          isStatic:true
          
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;
      this.height = 40;
      this.image = loadImage("images/monster.png");
      this.Visibility = 255;
      
    
      
      World.add(world, this.body);
    }

   



    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, 200, 200);
      pop();
      
    }
  
};  