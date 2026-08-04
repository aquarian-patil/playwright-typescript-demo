import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/orangehrm/LoginPage";
import { DashboardPage } from "../../../src/pages/orangehrm/DashboardPage";
import { EnvironmentManager } from "../../../src/config/EnvironmentManager";
import { DataHelper } from "../../../src/helpers/DataHelper";

test.describe("OrangeHRM - Login Tests", () => {
  test.describe.configure({ retries: 2 }); // Demo site can be flaky

  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  const env = EnvironmentManager.getInstance();
  let usersData: any;

  test.beforeAll(() => {
    usersData = DataHelper.readJsonData<any>("users.json");
  });

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.navigate();
    await page.waitForLoadState("domcontentloaded");
  });

  test("should login successfully with valid credentials", async () => {
    const validUser = usersData.orangehrm.validUser;
    await loginPage.login(validUser.username, validUser.password);

    expect(await dashboardPage.isDashboardVisible()).toBe(true);
  });

  test("should show error with invalid credentials", async () => {
    await loginPage.login("invalid_user", "invalid_password");

    expect(await loginPage.isErrorDisplayed()).toBe(true);
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain("Invalid credentials");
  });

  test("should logout successfully", async ({ page }) => {
    const validUser = usersData.orangehrm.validUser;
    await loginPage.login(validUser.username, validUser.password);

    await dashboardPage.logout();
    await expect(page).toHaveURL(/.*\/auth\/login/);
  });
});
