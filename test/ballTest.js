describe('ball', function () {
  const expect = chai.expect;
  const velocity = new Velocity(2, 2);
  const position = new Position(460, 35);
  const ball = new Ball(30, position, velocity);
  describe('moveBall', function () {
    it('should update the position of ball for a specific velocity', function () {
      ball.moveBall();
      expect(ball.position.X).to.be.equal(462);
      expect(ball.position.Y).to.be.equal(37);
    });
  });
});