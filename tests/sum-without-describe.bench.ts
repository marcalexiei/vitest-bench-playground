import { it } from "vitest";

it("sum", async ({ bench }) => {
  await bench("bench 1", () => 1 + 1).run();
});
