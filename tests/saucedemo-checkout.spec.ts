import { test } from "@playwright/test";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";
import { checkoutData, credentials } from "../utils/test-data";

test("SauceDemo complete checkout flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(credentials.username, credentials.password);

  await inventoryPage.expectLoaded();
  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.expectLoaded();
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCustomerData(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode,
  );
  await checkoutPage.finishOrder();
  await checkoutPage.expectCheckoutComplete();
});
