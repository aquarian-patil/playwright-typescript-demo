import { test, expect } from "../../../src/fixtures/uiFixtures";
import { EnvironmentManager } from "../../../src/config/EnvironmentManager";
import { DataHelper } from "../../../src/helpers/DataHelper";
import { allure } from "allure-playwright";

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

  test("should login successfully with valid credentials", async ({ sdLoginPage, sdProductsPage }) => {
    allure.epic("UI Authentication");
    allure.feature("Login");
    allure.severity("critical");
    allure.owner("nitpatil");
    allure.tags("Smoke", "UI", "SauceDemo");

    const validUser = usersData.saucedemo.validUser;
    
    await allure.step("Enter valid credentials and submit", async () => {
      await sdLoginPage.login(validUser.username, validUser.password);
    });

    await allure.step("Verify products page is displayed", async () => {
      await expect(sdProductsPage.pageTitle).toBeVisible();
      expect(await sdProductsPage.isProductsPageDisplayed()).toBe(true);
    });
  });

  test("should show error with invalid credentials", async ({ sdLoginPage }) => {
    allure.epic("UI Authentication");
    allure.feature("Login");
    allure.severity("normal");
    
    const invalidUser = usersData.saucedemo.invalidUser;

    await allure.step("Enter invalid credentials and submit", async () => {
      await sdLoginPage.login(invalidUser.username, invalidUser.password);
    });

    await allure.step("Verify error message", async () => {
      expect(await sdLoginPage.isErrorDisplayed()).toBe(true);
      const errorText = await sdLoginPage.getErrorMessage();
      expect(errorText).toContain("Username and password do not match");
    });
  });

  test("should logout successfully", async ({ page, sdLoginPage, sdProductsPage }) => {
    allure.epic("UI Authentication");
    allure.feature("Logout");
    allure.severity("critical");

    const validUser = usersData.saucedemo.validUser;
    
    await allure.step("Login first", async () => {
      await sdLoginPage.login(validUser.username, validUser.password);
    });

    await allure.step("Perform logout", async () => {
      await sdProductsPage.logout();
    });

    await allure.step("Verify redirection to login page", async () => {
      await expect(page).toHaveURL(/.*saucedemo.com\/?$/);
    });
  });
});
