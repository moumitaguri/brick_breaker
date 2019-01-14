describe('paddle', function () {
  describe('moveLeft', function () {
    const expect = chai.expect;
    const position = new Position(405, 10);
    const paddle = new Paddle(150, 25, position);
    it ('should return updated position of the paddle' , function() {
      paddle.moveLeft();
      expect(paddle.position.X).to.be.equal(395);
    });
  });
  describe('moveRightt', function () {
    const expect = chai.expect;
    const position = new Position(405, 10);
    const paddle = new Paddle(150, 25, position);
    it ('should return updated position of the paddle' , function() {
      paddle.moveRight();
      expect(paddle.position.X).to.be.equal(415);
    });
  });
});