const SkylabArray = require("./SkylabArray");

describe("Given the method SkylabArray.some", () => {
  describe("When it's called and it recieved 3, 8, 10, 2 and a condition function to prove if some number is 8", () => {
    test("Then method should return true", () => {
      const fisrtNumber = 3;
      const secondNumber = 8;
      const thirdNumber = 10;
      const forthNumber = 2;
      const expectedResult = true;

      const receivedResult = new SkylabArray(
        fisrtNumber,
        secondNumber,
        thirdNumber,
        forthNumber
      ).some((element) => element === 8);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});
