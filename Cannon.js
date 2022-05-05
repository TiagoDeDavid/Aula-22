class Cannon {
  constructor(x, y, width, height, angle) {
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.image1 = loadImage ("assets/cannonBase.png");
    this.image2 = loadImage ("assets/canon.png");

      var options = {

        isStatic: true
      }

    this.Body = Matter.Bodies.rectangle (this.x, this.y, this.width, this.height, options);

    World.add (world, this.Body)
  }
    Display (){
    
      image(this.image1, this.Body.position.x, this.Body.position.y, this.width, this.height)
    }
}

