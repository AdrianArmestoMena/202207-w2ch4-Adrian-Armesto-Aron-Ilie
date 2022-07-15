const SkylabArray = require("./SkylabArray");

describe("Given the method SkylabArray.push", () => {
  describe("When it's called, it receives the number 1", () => {
    test("Then method should show one element lenght to the array class", () => {
      const number = 1;
      const expectedResult = 1;
      const array = new SkylabArray(number);

      const result = array.lenght;

      expect(result).toBe(expectedResult);
    });
  });
});
