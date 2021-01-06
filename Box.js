class Box{
    constructor(x,y,width,height,r,g,b){
        var options = {
            'restitution':0.3,
            'friction':0.3,
            'density':0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(2);
        stroke(0);
        fill(this.r,this.b,this.g);
        rect(pos.x,pos.y,this.width,this.height);
    }
}