class Paper{
constructor(x, y){
var options = {

    //isStatic : false,
    restitution : 1,
    friction : 0.5,
    density : 1.2,
}
this.body = Bodies.rectangle(x,y,30,30,options);
this.width = 30;
this.height = 30;
World.add(world, this.body);
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    rotate(angle);
    fill("white");
    rect(0,0,this.width,this.height);
    pop(); 
}
}