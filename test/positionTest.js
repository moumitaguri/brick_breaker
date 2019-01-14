describe('position', function () {
  const expect = chai.expect;
  const position = new Position(5, 5);
  it('should return the properties of position', function () {
    expect(position).to.have.property('X').to.equal(5);
    expect(position).to.have.property('Y').to.equal(5);
  });

  describe('setPositionX', function () {
    it('should update the value of X of position', function () {
      position.setPositionX(3);
      expect(position.X).to.be.equal(3);
    });
  });
  describe('setPositionY', function () {
    it('should update the value of Y of position', function () {
      position.setPositionY(3);
      expect(position.Y).to.be.equal(3);
    });
  });
});