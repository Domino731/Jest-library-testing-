// testing zero value
test("Testing sum function", () => {
  const foo = 0;
  expect(foo).toEqual(0);
  expect(null).toBeNull();
  expect(foo).toBeDefined();
  expect(foo).not.toBeUndefined();
});
