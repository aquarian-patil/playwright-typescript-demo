import { Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ✅ Fixed: added <void> to Promise
  async navigateTo(path: string = ''): Promise<void> {
    await this.page.goto(path);
  }

  // ✅ Fixed: added <string> to Promise
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}