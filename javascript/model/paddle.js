class Paddle {
  constructor(width, height, position) {
    this.width = width;
    this.height = height;
    this.position = position;
  }
  moveLeft() {
    this.position.X -= 10;
  }
  moveRight() {
    this.position.X += 10;
  }
  changeVelocity(velocity) {
    velocity.negateY();
  }
}
