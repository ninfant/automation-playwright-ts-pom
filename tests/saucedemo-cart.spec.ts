import { test } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";
import { credentials } from "../utils/test-data";

test("SauceDemo add backpack to cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(credentials.username, credentials.password);

  await inventoryPage.expectLoaded();
  await inventoryPage.addBackpackToCart();
  await inventoryPage.expectCartCount(1);
});
