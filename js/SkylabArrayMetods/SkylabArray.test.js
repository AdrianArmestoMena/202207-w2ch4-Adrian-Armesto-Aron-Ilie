const SkylabArray = require("./SkylabArray");

describe("Given the function SkylabArray.constructor", () => {
  describe("When it's called and it recieved 'Marta', 'Luis', 'Pere'", () => {
    test("Then function should return { '0': 'Marta', '1': 'Luis', '2': 'Pere' }", () => {
      const fisrtName = "Marta";
      const secondName = "Luis";
      const thirdName = "Pere";
      const expectedResult = { 0: "Marta", 1: "Luis", 2: "Pere" };

      const receivedResult = new SkylabArray(fisrtName, secondName, thirdName);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
describe("Given the function SkylabArray.constructor", () => {
  describe("When it's called and it recieved 3, 8, 10, 2", () => {
    test("Then function should return { '0': 3, '1': 8, '2': 10, '3': 2 }", () => {
      const fisrtNumber = 3;
      const secondNumber = 8;
      const thirdNumber = 10;
      const forthNumber = 2;
      const expectedResult = { 0: 3, 1: 8, 2: 10, 3: 2 };

      const receivedResult = new SkylabArray(
        fisrtNumber,
        secondNumber,
        thirdNumber,
        forthNumber
      );

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
