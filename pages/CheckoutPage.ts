import { expect, type Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillCustomerData(
    firstName: string,
    lastName: string,
    postalCode: string,
  ): Promise<void> {
    await this.page.getByTestId("firstName").fill(firstName);
    await this.page.getByTestId("lastName").fill(lastName);
    await this.page.getByTestId("postalCode").fill(postalCode);
    await this.page.getByTestId("continue").click();
  }

  async finishOrder(): Promise<void> {
    await this.page.getByTestId("finish").click();
  }

  async expectCheckoutComplete(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-complete/);
    await expect(this.page.getByTestId("complete-header")).toContainText(
      "Thank you for your order",
    );
  }
}
