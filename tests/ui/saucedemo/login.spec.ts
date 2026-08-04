import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/saucedemo/LoginPage";
import { ProductsPage } from "../../../src/pages/saucedemo/ProductsPage";
import { EnvironmentManager } from "../../../src/config/EnvironmentManager";

test.describe("SauceDemo - Login Tests", () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  const env = EnvironmentManager.getInstance();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.navigate();
  });

  test("should login successfully with valid credentials", async () => {
    await loginPage.login(
      env.getSauceDemoUsername(),
      env.getSauceDemoPassword(),
    );

    await expect(productsPage.pageTitle).toBeVisible();
    expect(await productsPage.isProductsPageDisplayed()).toBe(true);
  });

  test("should show error with invalid credentials", async () => {
    await loginPage.login("invalid_user", "invalid_password");

    expect(await loginPage.isErrorDisplayed()).toBe(true);
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain("Username and password do not match");
  });

  test("should logout successfully", async ({ page }) => {
    await loginPage.login(
      env.getSauceDemoUsername(),
      env.getSauceDemoPassword(),
    );

    await productsPage.logout();
    await expect(page).toHaveURL(/.*saucedemo.com\/?$/);
  });
});
