import { Page, Locator } from "@playwright/test";
import { Logger } from "../config/Logger";

/**
 * BasePage - Base class for all page objects
 * Provides common page interaction methods
 */
export abstract class BasePage {
  protected page: Page;
  protected logger: Logger;
  protected abstract readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.logger = Logger.getInstance();
  }

  /**
   * Navigate to page URL
   */
  async navigate(): Promise<void> {
    const maxRetries = 3;
    for (let i = 0; i < maxRetries; i++) {
      try {
        this.logger.info(`Navigating to: ${this.url}`);
        await this.page.goto(this.url, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });
        return;
      } catch (error) {
        this.logger.warn(`Navigation attempt ${i + 1} failed: ${error}`);
        if (i === maxRetries - 1) throw error;
        await this.page.waitForTimeout(2000 * (i + 1));
      }
    }
  }

  /**
   * Click element
   */
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  /**
   * Fill input field
   */
  async fill(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  /**
   * Get text from element
   */
  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent()) || "";
  }

  /**
   * Wait for element to be visible
   */
  async waitForVisible(
    locator: Locator,
    timeout: number = 10000,
  ): Promise<void> {
    await locator.waitFor({ state: "visible", timeout });
  }

  /**
   * Check if element is visible
   */
  async isVisible(locator: Locator): Promise<boolean> {
    try {
      return await locator.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Get current URL
   */
  async getUrl(): Promise<string> {
    return this.page.url();
  }
}
