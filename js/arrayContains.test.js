const bikesList = ["yamaha", "ktm", "honda", "gas-gas", "husqvarna", "suzuki"];

test("The ktm bike is on list", () => {
  expect(bikesList).toContain("ktm");
});

test("bikesList length is equal to 101", () => {
  bikesList[100] = "sherco";
  expect(bikesList.length).toBe(101);
});
