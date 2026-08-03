import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  private readonly titleContainer: Locator;
  private readonly inventoryItems: Locator;

  constructor(page: Page) {
    super(page);
    this.titleContainer = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
  }

  // ✅ Fixed: added <string> to Promise
  async getHeaderTitle(): Promise<string> {
    return (await this.titleContainer.textContent()) || '';
  }

  // ✅ Fixed: added <number> to Promise
  async getItemCount(): Promise<number> {
    return await this.inventoryItems.count();
  }
}