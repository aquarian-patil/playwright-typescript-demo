import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../base/BasePage";
import { EnvironmentManager } from "../../config/EnvironmentManager";
import { SauceDemoLocators } from "../../locators/SauceDemoLocators";

/**
 * LoginPage - SauceDemo login page object
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
    this.url = env.getSauceDemoUrl();

    // Locators
    this.usernameInput = page.locator(SauceDemoLocators.LOGIN.USERNAME_INPUT);
    this.passwordInput = page.locator(SauceDemoLocators.LOGIN.PASSWORD_INPUT);
    this.loginButton = page.locator(SauceDemoLocators.LOGIN.LOGIN_BUTTON);
    this.errorMessage = page.locator(SauceDemoLocators.LOGIN.ERROR_MESSAGE);
  }

  /**
   * Login with credentials
   */
  async login(username: string, password: string): Promise<void> {
    this.logger.info(`Logging in with username: ${username}`);
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  /**
   * Check if error message is displayed
   */
  async isErrorDisplayed(): Promise<boolean> {
    return await this.isVisible(this.errorMessage);
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string> {
    return await this.getText(this.errorMessage);
  }
}
