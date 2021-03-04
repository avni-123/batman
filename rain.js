class Rain{

    constructor(x, y, radius, maxSides, angle){

        var options = {

            'restitution': 0.8,

            'friction': 0.1,

            'density': 1.0,

            isStatic : false

        }

        this.body = Bodies.circle(x, y, radius, options, maxSides);

       this.radius = radius;

       this.maxSides = maxSides;

       this.drop = [];

        World.add(world, this.body);

      }

      display(){

        if(this.body.position.y > height){

          var Posi = [this.body.position.x, this.body.position.y];

         this.drop.push(Posi);

          

        }

        var maxDrops = 100;

        for(var i = 0; i < maxDrops; i = i ++){

          circle(0, 0, this.radius, this.maxSides);


        }

        var angle = this.body.angle;

        console.log(this.body.velocity.x);

        push();

        translate(this.body.position.x, this.body.position.y);

        rotate(angle);

        strokeWeight(2);

        stroke(50, 50, 50);

        fill("blue");

        circle(RADIUS);

        circle(0, 0, this.radius, this.maxSides);

        pop();

      }
}
