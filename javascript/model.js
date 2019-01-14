class Wall {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  changeVelocity(velocity) {
    velocity.negateX();
  }
}

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

class Brick {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Position {
  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
  }
  setPositionX(position) {
    this.X = position;
  }

  setPositionY(position) {
    this.Y = position;
  }
}

class Velocity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  negateX() {
    this.x *= -1;
  }
  negateY() {
    this.y *= -1;
  }
}

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

}