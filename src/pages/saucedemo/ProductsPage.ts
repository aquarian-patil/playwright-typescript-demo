import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../base/BasePage";

/**
 * ProductsPage - SauceDemo products page object
 */
export class ProductsPage extends BasePage {
  protected readonly url: string = "https://www.saucedemo.com/inventory.html";
  private readonly inventoryContainer: Locator;
  private readonly inventoryItems: Locator;
  private readonly cartBadge: Locator;
  private readonly menuButton: Locator;
  private readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);

    // Locators
    this.inventoryContainer = page.locator(".inventory_container");
    this.inventoryItems = page.locator(".inventory_item");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.menuButton = page.locator("#react-burger-menu-btn");
    this.logoutLink = page.locator("#logout_sidebar_link");
  }

  /**
   * Get page title
   */
  get pageTitle(): Locator {
    return this.page.locator(".title");
  }

  /**
   * Check if products page is displayed
   */
  async isProductsPageDisplayed(): Promise<boolean> {
    return await this.isVisible(this.inventoryContainer);
  }

  /**
   * Get product count
   */
  async getProductCount(): Promise<number> {
    return await this.inventoryItems.count();
  }

  /**
   * Add product to cart by name
   */
  async addProductToCart(productName: string): Promise<void> {
    const addButton = this.page.locator(
      `[data-test="add-to-cart-${productName.toLowerCase().replace(/\s+/g, "-")}"]`,
    );
    await this.click(addButton);
  }

  /**
   * Get cart item count
   */
  async getCartItemCount(): Promise<number> {
    const isVisible = await this.isVisible(this.cartBadge);
    if (!isVisible) return 0;
    const text = await this.getText(this.cartBadge);
    return parseInt(text, 10);
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    await this.click(this.menuButton);
    await this.waitForVisible(this.logoutLink);
    await this.click(this.logoutLink);
  }
}
