describe("countUp", function() {
  it("counts up to the number inputed by the user", function() {
    expect(countUp(6)).to.equal[1, 2, 3, 4, 5, 6]
  });

  it("counts up to the first number input by the user by the second number input by the user", function() {
    expect(countUp(10, 2)).to.equal[2, 4, 6, 8, 10]
  });
});
