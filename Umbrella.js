class Umbrella {
    constructor(x, y) {
        var options = {
            //restitution: 1,
            //friction: 0,
            isStatic:true
        }
        this.r = 70;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
   
    display() {

      
    }

};