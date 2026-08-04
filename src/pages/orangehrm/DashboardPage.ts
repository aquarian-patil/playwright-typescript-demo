import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../base/BasePage";
import { EnvironmentManager } from "../../config/EnvironmentManager";
import { OrangeHrmLocators } from "../../locators/OrangeHrmLocators";

/**
 * DashboardPage - OrangeHRM dashboard page object
 */
export class DashboardPage extends BasePage {
  protected readonly url: string;
  private readonly dashboardHeader: Locator;
  private readonly userDropdown: Locator;
  private readonly logoutLink: Locator;
  private readonly mainMenu: Locator;

  constructor(page: Page) {
    super(page);
    const env = EnvironmentManager.getInstance();
    this.url = `${env.getOrangeHrmUrl()}/web/index.php/dashboard/index`;

    // Locators
    this.dashboardHeader = page.locator(OrangeHrmLocators.DASHBOARD.HEADER_TITLE);
    this.userDropdown = page.locator(OrangeHrmLocators.HEADER.USER_DROPDOWN);
    this.logoutLink = page.locator(OrangeHrmLocators.HEADER.LOGOUT_LINK);
    this.mainMenu = page.locator(OrangeHrmLocators.DASHBOARD.MAIN_MENU);
  }

  /**
   * Check if dashboard is visible
   */
  async isDashboardVisible(): Promise<boolean> {
    try {
      // Explicitly wait for the dashboard header or main menu to become visible
      // This is much more reliable than networkidle or domcontentloaded
      await Promise.any([
        this.dashboardHeader.waitFor({ state: "visible", timeout: 15000 }),
        this.mainMenu.waitFor({ state: "visible", timeout: 15000 })
      ]);
      return true;
    } catch (error) {
      this.logger.warn(`Dashboard visibility check failed: ${error}`);
      return false;
    }
  }

  /**
   * Logout from application
   */
  async logout(): Promise<void> {
    try {
      this.logger.info("Logging out from OrangeHRM");

      // Wait for user dropdown to be visible
      await this.userDropdown.waitFor({ state: "visible", timeout: 15000 });
      await this.userDropdown.click({ force: true });

      // Wait for logout link to appear
      await this.logoutLink.waitFor({ state: "visible", timeout: 10000 });
      await this.logoutLink.click({ force: true });

      // Wait for navigation
      await this.page.waitForURL("**/auth/login", { timeout: 15000 });
    } catch (error) {
      this.logger.error(`Logout failed: ${error}`);
      throw error;
    }
  }
}
