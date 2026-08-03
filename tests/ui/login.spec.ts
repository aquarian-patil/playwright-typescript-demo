import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';

test.describe('SauceDemo - UI Authentication Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.open();
  });

  test('successful login navigates to product inventory', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL('/inventory.html');
    const title = await inventoryPage.getHeaderTitle();
    expect(title).toBe('Products');
    
    const count = await inventoryPage.getItemCount();
    expect(count).toBeGreaterThan(0);
  });

  test('locked out user receives error message', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    const errorMsg = await loginPage.getErrorMessageText();
    expect(errorMsg).toContain('Epic sadface: Sorry, this user has been locked out.');
  });
});