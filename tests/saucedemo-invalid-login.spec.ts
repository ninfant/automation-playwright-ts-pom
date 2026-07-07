import { test } from "./fixtures";
import { loginScenarios } from "../utils/test-data";

for (const scenario of loginScenarios) {
  test(`@regression SauceDemo login scenario: ${scenario.name}`, async ({
    loginPage,
    inventoryPage,
  }) => {
    await loginPage.goto();
    await loginPage.login(scenario.username, scenario.password);

    if (scenario.shouldLoginSucceed) {
      await inventoryPage.expectLoaded();
      return;
    }

    await loginPage.expectLoginErrorContains(scenario.expectedErrorText);
  });
}
