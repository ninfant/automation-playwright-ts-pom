import { expect, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.getByTestId("title")).toHaveText("Products");
  }

  async addBackpackToCart(): Promise<void> {
    await this.page.getByTestId("add-to-cart-sauce-labs-backpack").click();
  }

  async addProductToCartByTestId(productTestId: string): Promise<void> {
    await this.page.getByTestId(productTestId).click();
  }

  async expectCartCount(count: number): Promise<void> {
    await expect(this.page.getByTestId("shopping-cart-badge")).toHaveText(
      String(count),
    );
  }

  async openCart(): Promise<void> {
    await this.page.getByTestId("shopping-cart-link").click();
  }

  async openMenu(): Promise<void> {
    await this.page.getByRole("button", { name: "Open Menu" }).click();
  }

  async logout(): Promise<void> {
    await this.openMenu();
    await this.page.getByTestId("logout-sidebar-link").click();
  }
}
