import { seasonify } from "./seasonify";

test("greet returns a string, greeting the passed name", () => {
  expect(seasonify("1", "1", "Hello World")).toBe("S01E01 - Hello World");
  expect(seasonify("1", "10", "Hello World")).toBe("S01E10 - Hello World");
  expect(seasonify("10", "10", "Hello World")).toBe("S10E10 - Hello World");
  expect(seasonify("7", "10", "Hello World!")).toBe("S07E10 - Hello World!");
  expect(seasonify("10", "5", "Hello World")).toBe("S10E05 - Hello World");
});
