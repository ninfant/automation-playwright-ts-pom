import { expect, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/cart/);
    await expect(this.page.getByTestId("title")).toHaveText("Your Cart");
  }

  async proceedToCheckout(): Promise<void> {
    await this.page.getByTestId("checkout").click();
  }
}
