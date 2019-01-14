describe('wall', function () {
  const expect = chai.expect;
  const wall = new Wall(960, 680);
  it('should return properties of the wall', function () {
    expect(wall).to.have.property('width').to.equal(960);
    expect(wall).to.have.property('height').to.equal(680);
  });
});