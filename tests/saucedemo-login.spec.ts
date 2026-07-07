import { test } from "./fixtures";

test("@smoke @regression SauceDemo login smoke test", async ({
  authenticatedPage,
}) => {
  await authenticatedPage.screenshot({ path: "after-success.png" });
});
