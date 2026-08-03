import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // ✅ Fixed: added <void> to Promise
  async open(): Promise<void> {
    await this.navigateTo('/');
  }

  // ✅ Fixed: added <void> to Promise
  async login(user: string, pass: string): Promise<void> {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }

  // ✅ Fixed: added <string> to Promise
  async getErrorMessageText(): Promise<string> {
    return (await this.errorMessage.textContent()) || '';
  }
}