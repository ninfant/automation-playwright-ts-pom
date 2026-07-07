import { test } from "./fixtures";
import { cartScenarios } from "../utils/test-data";

for (const scenario of cartScenarios) {
  test(`@smoke @regression SauceDemo cart scenario: ${scenario.name}`, async ({
    authenticatedPage,
    inventoryPage,
  }) => {
    await authenticatedPage.waitForLoadState("domcontentloaded");
    await inventoryPage.addProductToCartByTestId(scenario.productTestId);
    await inventoryPage.expectCartCount(1);
  });
}
