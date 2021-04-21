class Slingshot
{
    constructor(pointA,bodyB)
    {
        var options={
            
                bodyB: bodyB,
                pointA: pointA,
                stiffness: 0.01,
                length: 10
                    }
            this.pointA=pointA;
            this.slingshot=Constraint.create(options);
            World.add(world,this.slingshot);
            this.bodyB=bodyB;
    }
        fly(){
            this.slingshot.bodyB = null;
            }
        attach(body){
            this.slingshot.bodyB=body;
            }
            
           display(){
            
            if(this.slingshot.bodyB!=null){
                line(this.pointA.x,this.pointA.y,this.bodyB.position.x,this.bodyB.position.y);
            }
            }
}
        
    
