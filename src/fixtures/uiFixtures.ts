import { test as base } from "@playwright/test";
import { LoginPage as SDLoginPage } from "../pages/saucedemo/LoginPage";
import { ProductsPage } from "../pages/saucedemo/ProductsPage";
import { LoginPage as HRMLoginPage } from "../pages/orangehrm/LoginPage";
import { DashboardPage } from "../pages/orangehrm/DashboardPage";

type UIFixtures = {
  sdLoginPage: SDLoginPage;
  sdProductsPage: ProductsPage;
  hrmLoginPage: HRMLoginPage;
  hrmDashboardPage: DashboardPage;
};

export const test = base.extend<UIFixtures>({
  sdLoginPage: async ({ page }, use) => {
    await use(new SDLoginPage(page));
  },
  sdProductsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  hrmLoginPage: async ({ page }, use) => {
    await use(new HRMLoginPage(page));
  },
  hrmDashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  }
});
export { expect } from "@playwright/test";
