class Ball {
  constructor(radius, position, velocity) {
    this.radius = radius;
    this.position = position;
    this.velocity = velocity;
  }

  moveBall() {
    this.position.X += this.velocity.x;
    this.position.Y += this.velocity.y;
  }

  changeVelocityHorizontally(velocity) {
    velocity.negateX();
  }

  changeVelocityVertically(velocity) {
    velocity.negateY();
  }

}