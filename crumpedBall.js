class crumpedBall{
    constructor(){
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        ball = createSprite(40,300,10,0,options);
        this.height = 10;
        this.width = 10;
        World.add(wprld,crumpedball);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,pos.x, this.width);
    }
}