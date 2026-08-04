import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/orangehrm/LoginPage";
import { DashboardPage } from "../../../src/pages/orangehrm/DashboardPage";
import { EnvironmentManager } from "../../../src/config/EnvironmentManager";

test.describe("OrangeHRM - Login Tests", () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  const env = EnvironmentManager.getInstance();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.navigate();
  });

  test("should login successfully with valid credentials", async () => {
    await loginPage.login(
      env.getOrangeHrmUsername(),
      env.getOrangeHrmPassword(),
    );

    expect(await dashboardPage.isDashboardVisible()).toBe(true);
  });

  test("should show error with invalid credentials", async () => {
    await loginPage.login("invalid_user", "invalid_password");

    expect(await loginPage.isErrorDisplayed()).toBe(true);
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain("Invalid credentials");
  });

  test("should logout successfully", async ({ page }) => {
    await loginPage.login(
      env.getOrangeHrmUsername(),
      env.getOrangeHrmPassword(),
    );

    await dashboardPage.logout();
    await expect(page).toHaveURL(/.*\/auth\/login/);
  });
});
