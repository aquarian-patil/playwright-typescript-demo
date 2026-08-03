import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../base/BasePage';
import { EnvironmentManager } from '../../config/EnvironmentManager';

/**
 * LoginPage - OrangeHRM login page object
 */
export class LoginPage extends BasePage {
  protected readonly url: string;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    const env = EnvironmentManager.getInstance();
    this.url = `${env.getOrangeHrmUrl()}/web/index.php/auth/login`;
    
    // Locators
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.oxd-alert-content-text');
  }

  /**
   * Login with credentials
   */
  async login(username: string, password: string): Promise<void> {
    this.logger.info(`Logging in to OrangeHRM with username: ${username}`);
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  /**
   * Check if error message is displayed
   */
  async isErrorDisplayed(): Promise<boolean> {
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      return await this.isVisible(this.errorMessage);
    } catch {
      return false;
    }
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string> {
    return await this.getText(this.errorMessage);
  }
}
