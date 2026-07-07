import { expect, test } from "./fixtures";

test("@smoke @regression SauceDemo logout flow", async ({
  authenticatedPage,
  inventoryPage,
}) => {
  await authenticatedPage.waitForLoadState("domcontentloaded");
  await inventoryPage.logout();

  await expect(authenticatedPage).toHaveURL(/saucedemo\.com\/?$/);
  await expect(authenticatedPage.getByTestId("login-button")).toBeVisible();
});
