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

  isBallCollideWithHorizontalWall() {
    const maxLeftPosition = this.wall.width - 2 * this.ball.radius;
    return this.ball.position.X >= maxLeftPosition || this.ball.position.X <= 0;
  }
  isBallCollideWithVerticalWall() {
    const maxBottomPosition = this.wall.height - 2 * this.ball.radius;
    return this.ball.position.Y >= maxBottomPosition || this.ball.position.Y <= 0;
  }

  isBallInRangeOf(element) {
    const collidalRange = element.position.X + element.width;
    const collidalPositionOfBall = this.ball.position.X + this.ball.radius;
    return element.position.X <= collidalPositionOfBall
      && collidalPositionOfBall <= collidalRange;
  }

  isBallCollidedWithPaddle() {
    const maxCollidalLength = this.paddle.position.Y + this.paddle.height;
    return this.ball.position.Y <= maxCollidalLength && this.isBallInRangeOf(this.paddle);
  }

  validateBallMovement() {
    if (this.isBallCollideWithVerticalWall()) this.wall.changeVelocityVertically(this.ball.velocity);
    if (this.isBallCollideWithHorizontalWall()) this.wall.changeVelocityHorizontally(this.ball.velocity);
    if (this.isBallCollidedWithPaddle()) this.paddle.changeVelocity(this.ball.velocity);
  }
}