class Chain {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness : 0.75,
            length : 10
    
    
        }
        this.pointB = pointB;

        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);

    }
    display(){
    if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);    
    }
       
    }
    fly (){
        this.chain.bodyA = null
    }
}