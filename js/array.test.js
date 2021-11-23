const cloneArray = require("./cloneArray.js");
test("Properly closeArray() working", () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  expect(cloneArray(data)).toEqual(data);
});
