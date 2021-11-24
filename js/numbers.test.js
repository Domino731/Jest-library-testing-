const sum = require("./sum");

test("two plus two", () => {
  const value = 2 + 2;
  expect(sum(1, 4)).toBeGreaterThan(3);
  expect(sum(1, 2.5)).toBeGreaterThanOrEqual(3.5);
  expect(sum(1, 1)).toBeLessThan(5);
  expect(sum(1, 1)).toBeLessThanOrEqual(4.5);
  expect(0.4 + 0.4).toBeCloseTo(0.8);

  // toBe === toEqual for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
