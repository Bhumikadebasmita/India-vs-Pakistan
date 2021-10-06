class Bullet
{
    constructor() {
        this.x = 100;
		this.y=500;
		this.spt=createSprite(this.x, this.y, 350,100);
		this.spt.shapeColor="red";
        this.spt.scale=0.15;
        this.spt.velocityX=9
    }

    
}