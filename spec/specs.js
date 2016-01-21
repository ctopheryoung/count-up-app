describe("countUp", function() {
  it("counts up 1 to the number 5", function() {
    expect(countUp(5, 1)).to.eql([1, 2, 3, 4, 5])
  });

  it("counts up to 10 by 2", function() {
    expect(countUp(10, 2)).to.eql([2, 4, 6, 8, 10])
  });

  it("counts up to 18 by 3", function() {
    expect(countUp(18, 3)).to.eql([3, 6, 9, 12, 15, 18])
  });

});
