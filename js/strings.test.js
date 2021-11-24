test("There is no X in Dog word", () => {
  expect("Dog").not.toMatch(/X/);
});

test("The is sky word in skyscraper", () => {
  expect("skyscraper").toMatch(/sky/);
});
