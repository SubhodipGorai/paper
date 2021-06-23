class paperr{
    constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=20;
		this.Height=20;
		
		this.image=loadImage("paper.png")

		World.add(world, this.body)
	}
	display()
	{
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
            if (keyDown("space")) {
				this.body.velocityX = +3;
				this.body.velocityY = -3;
			}
			pop()
			
	}
}