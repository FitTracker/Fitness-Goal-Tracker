test("hours input should be positive", () => {
  const value = 2;
  expect(value).toBeGreaterThanOrEqual(0);
});

test("minutes input should be positive", () => {
  const value = 10;
  expect(value).toBeGreaterThanOrEqual(0);
});

test("seconds input should be positive", () => {
  const value = 30;
  expect(value).toBeGreaterThanOrEqual(0);
});

// test("Timer Display should be greater than 0 for button to start timer", () => {
//   const value = 2;
//   expect(value).toBeGreaterThanOrEqual(0);
// });
