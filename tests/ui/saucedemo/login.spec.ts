import { test, expect } from "../../../src/fixtures/uiFixtures";
import { EnvironmentManager } from "../../../src/config/EnvironmentManager";
import { DataHelper } from "../../../src/helpers/DataHelper";

test.describe("SauceDemo - Login Tests", () => {
  const env = EnvironmentManager.getInstance();
  let usersData: any;

  test.beforeAll(() => {
    // Read data for data-driven testing
    usersData = DataHelper.readJsonData<any>("users.json");
  });

  test.beforeEach(async ({ sdLoginPage }) => {
    await sdLoginPage.navigate();
  });

  test("[UI] [SauceDemo] should login successfully with valid credentials", async ({ sdLoginPage, sdProductsPage }) => {
    test.info().annotations.push({ type: 'epic', description: "UI Authentication" });
    test.info().annotations.push({ type: 'feature', description: "Login" });
    test.info().annotations.push({ type: 'severity', description: "critical" });
    test.info().annotations.push({ type: 'owner', description: "nitpatil" });
    test.info().annotations.push({ type: 'tag', description: "Smoke" });
    test.info().annotations.push({ type: 'tag', description: "UI" });
    test.info().annotations.push({ type: 'tag', description: "SauceDemo" });

    const validUser = usersData.saucedemo.validUser;
    
    await test.step("Enter valid credentials and submit", async () => {
      await sdLoginPage.login(validUser.username, validUser.password);
    });

    await test.step("Verify products page is displayed", async () => {
      await expect(sdProductsPage.pageTitle).toBeVisible();
      expect(await sdProductsPage.isProductsPageDisplayed()).toBe(true);
    });
  });

  test("[UI] [SauceDemo] should show error with invalid credentials", async ({ sdLoginPage }) => {
    test.info().annotations.push({ type: 'epic', description: "UI Authentication" });
    test.info().annotations.push({ type: 'feature', description: "Login" });
    test.info().annotations.push({ type: 'severity', description: "normal" });
    
    const invalidUser = usersData.saucedemo.invalidUser;

    await test.step("Enter invalid credentials and submit", async () => {
      await sdLoginPage.login(invalidUser.username, invalidUser.password);
    });

    await test.step("Verify error message", async () => {
      expect(await sdLoginPage.isErrorDisplayed()).toBe(true);
      const errorText = await sdLoginPage.getErrorMessage();
      expect(errorText).toContain("Username and password do not match");
    });
  });

  test("[UI] [SauceDemo] should logout successfully", async ({ page, sdLoginPage, sdProductsPage }) => {
    test.info().annotations.push({ type: 'epic', description: "UI Authentication" });
    test.info().annotations.push({ type: 'feature', description: "Logout" });
    test.info().annotations.push({ type: 'severity', description: "critical" });

    const validUser = usersData.saucedemo.validUser;
    
    await test.step("Login first", async () => {
      await sdLoginPage.login(validUser.username, validUser.password);
    });

    await test.step("Perform logout", async () => {
      await sdProductsPage.logout();
    });

    await test.step("Verify redirection to login page", async () => {
      await expect(page).toHaveURL(/.*saucedemo.com\/?$/);
    });
  });
});
