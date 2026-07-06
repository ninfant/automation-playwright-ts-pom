import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { invalidCredentials } from "../utils/test-data";

test("SauceDemo invalid login shows error message", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(invalidCredentials.username, invalidCredentials.password);
  await loginPage.expectLoginErrorContains(
    "Username and password do not match any user",
  );
});
