class Game {
  constructor(wall, paddle, ball) {
    this.wall = wall;
    this.paddle = paddle;
    this.ball = ball;
  }

  validatePaddlePosition() {
    const maxLeftPosition = this.wall.width - this.paddle.width;
    if (this.paddle.position.X <= 0)
      this.paddle.position.setPositionX(0);
    if (this.paddle.position.X >= maxLeftPosition)
      this.paddle.position.setPositionX(maxLeftPosition);
  }

  isBallCollideWithWall() {
    const maxLeftPosition = this.wall.width - 2 * this.ball.radius;
    return this.ball.position.X >= maxLeftPosition || this.ball.position.X <= 0;
  }

  validateBallMovement() {
    const maxBottomPosition = this.wall.height - 2 * this.ball.radius;
    if (this.isBallCollideWithWall()) this.wall.changeVelocity(this.ball.velocity);
    if (this.ball.position.Y >= maxBottomPosition) this.ball.velocity.negateY();
    // if (this.isBallCollidedWithPaddle()) this.paddle.changeVelocity(this.ball.velocity);
  }
}