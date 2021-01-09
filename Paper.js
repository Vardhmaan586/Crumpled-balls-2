class Paper{
    constructor(x,y,width,height){

        var options = {
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.4,
        }
        
        this.image = loadImage("PaperImage.png")
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    
    display(){
    
       push();
       fill("magenta");
       var pos = this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y+10,50,50)
       pop();
    
    }
}