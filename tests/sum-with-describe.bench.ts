import { bench, describe } from "vitest";

describe("sum", () => {
  bench("a", () => {
    1 + 1;
  });
});
