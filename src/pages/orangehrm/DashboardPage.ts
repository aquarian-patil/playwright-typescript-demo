import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../base/BasePage";
import { EnvironmentManager } from "../../config/EnvironmentManager";

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
    this.dashboardHeader = page.locator(".oxd-topbar-header-breadcrumb");
    this.userDropdown = page.locator(".oxd-userdropdown-tab");
    this.logoutLink = page.locator('a[href="/web/index.php/auth/logout"]');
    this.mainMenu = page.locator(".oxd-main-menu");
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
      await this.userDropdown.waitFor({ state: "visible", timeout: 10000 });
      await this.click(this.userDropdown);

      // Wait for logout link to appear
      await this.logoutLink.waitFor({ state: "visible", timeout: 5000 });
      await this.logoutLink.click({ force: true });

      // Wait for navigation
      await this.page.waitForURL("**/auth/login", { timeout: 10000 });
    } catch (error) {
      this.logger.error(`Logout failed: ${error}`);
      throw error;
    }
  }
}
