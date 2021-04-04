class Hero{

    constructor(x,y,r){
        var options ={
            'density':1,
            'frictionAir': 1
        }
        this.r = r;
        this.image = loadImage("images/superhero.png");
        this.body  = Bodies.circle(x, y, this.r);
        World.add(world, this.body);
        
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 200, 200);
        pop();

    }

}