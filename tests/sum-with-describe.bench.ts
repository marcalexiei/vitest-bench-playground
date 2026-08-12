import { describe, it } from "vitest";

describe("sum", () => {
  it("sum", async ({ bench }) => {
    await bench("bench 1", () => 1 + 1).run();
  });
});
