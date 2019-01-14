const ARROW_RIGHT = "ArrowRight"
const ARROW_LEFT = "ArrowLeft"

const createDiv = function (document, parent, element, className, id, tabIndex) {
  let createdDiv = document.createElement(element);
  createdDiv.className = className;
  createdDiv.id = id;
  createdDiv.tabIndex = tabIndex;
  parent.appendChild(createdDiv);
  return createdDiv;
}

const addPixelSuffix = value => value + "px";

const drawWall = function (wall, wallDiv) {
  wallDiv.style.width = addPixelSuffix(wall.width);
  wallDiv.style.height = addPixelSuffix(wall.height);
}

const drawPaddle = function (paddle, paddleDiv) {
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.left = addPixelSuffix(paddle.position.X);
  paddleDiv.style.bottom = addPixelSuffix(paddle.position.Y);
}

const drawBrick = function (brick, brickDiv) {
  brickDiv.style.width = addPixelSuffix(brick.width);
  brickDiv.style.height = addPixelSuffix(brick.height);
}

const drawBall = function (ball, ballDiv) {
  ballDiv.style.width = addPixelSuffix(ball.radius);
  ballDiv.style.height = addPixelSuffix(ball.radius);
  ballDiv.style.left = addPixelSuffix(ball.position.X);
  ballDiv.style.bottom = addPixelSuffix(ball.position.Y);
}

const movePaddle = function (document, game) {
  let paddleDiv = document.getElementById("paddle_1");
  if (event.key == ARROW_LEFT) {
    game.paddle.moveLeft();
  }
  if (event.key == ARROW_RIGHT) {
    game.paddle.moveRight();
  }
  game.validatePaddlePosition();
  drawPaddle(game.paddle, paddleDiv);
}

const moveBall = function (document, game) {
  setInterval(() => {
    let ballDiv = document.getElementById("ball_1");
    game.validateBallMovement();
    game.ball.moveBall();
    drawBall(game.ball, ballDiv);
  }, 1);

}

const initializeBrick = function (document, viewport) {
  let brick = new Brick(100, 50);
  let brickDiv = createDiv(document, viewport, "div", "brick", "brick_1");
  drawBrick(brick, brickDiv);
}

const createElementsAndInitialize = function (document, wall, paddle, ball) {
  let body = document.getElementById("main");
  let wallDiv = createDiv(document, body, "main", "wall", "viewport", "0");
  let viewport = document.getElementById("viewport");
  let paddleDiv = createDiv(document, viewport, "div", "paddle", "paddle_1");
  let ballDiv = createDiv(document, viewport, "div", "ball", "ball_1");
  drawWall(wall, wallDiv);
  drawPaddle(paddle, paddleDiv);
  drawBall(ball, ballDiv);
}

const initialize = function () {
  let wall = new Wall(960, 680);
  let paddle = new Paddle(150, 25, new Position(405, 10));
  let velocity = new Velocity(1, -1);
  let ball = new Ball(30, new Position(460, 35), velocity);
  createElementsAndInitialize(document, wall, paddle, ball);
  let game = new Game(wall, paddle, ball);
  let viewport = document.getElementById("viewport");
  viewport.focus();
  viewport.onkeydown = movePaddle.bind(null, document, game);
  moveBall(document, game);
}

window.onload = initialize;