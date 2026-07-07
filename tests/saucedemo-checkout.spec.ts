import { test } from "./fixtures";
import { checkoutData } from "../utils/test-data";

test("@regression SauceDemo complete checkout flow", async ({
  authenticatedPage,
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  await authenticatedPage.waitForLoadState("domcontentloaded");
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
