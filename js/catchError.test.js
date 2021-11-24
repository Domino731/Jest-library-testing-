const fetchData = () => {
  throw new Error("The target resource doesnt existing");
};

test("fetchData() is working in order", () => {
  expect(fetchData()).toThrow();
  expect(fetchData()).toThrow(Error);
});
