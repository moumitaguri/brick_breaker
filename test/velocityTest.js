describe('velocity', function () {
  const expect = chai.expect;
  const velocity = new Velocity(2, -2);
  describe('negateX', function () {
    it('should update the value of x of velocity', function () {
      velocity.negateX();
      expect(velocity.x).to.be.equal(-2);
    });
  });
  describe('negateY', function () {
    it('should update the value of x of velocity', function () {
      velocity.negateY();
      expect(velocity.y).to.be.equal(2);
    });
  });
});