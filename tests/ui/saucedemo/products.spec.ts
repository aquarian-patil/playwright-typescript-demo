import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/saucedemo/LoginPage";
import { ProductsPage } from "../../../src/pages/saucedemo/ProductsPage";
import { EnvironmentManager } from "../../../src/config/EnvironmentManager";

test.describe("SauceDemo - Products Tests", () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  const env = EnvironmentManager.getInstance();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.navigate();
    await loginPage.login(
      env.getSauceDemoUsername(),
      env.getSauceDemoPassword(),
    );
  });

  test("should display all products", async () => {
    const productCount = await productsPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);
  });

  test("should add product to cart", async () => {
    await productsPage.addProductToCart("sauce-labs-backpack");

    const cartCount = await productsPage.getCartItemCount();
    expect(cartCount).toBe(1);
  });
});
