# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\orangehrm\login.spec.ts >> OrangeHRM Login Tests >> should display error with invalid credentials
- Location: tests\ui\orangehrm\login.spec.ts:21:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - img "company-branding" [ref=e8]
  - generic [ref=e9]:
    - img "orangehrm-logo" [ref=e11]
    - heading "Login" [level=5] [ref=e12]
    - generic [ref=e13]:
      - generic [ref=e15]:
        - paragraph [ref=e16]: "Username : Admin"
        - paragraph [ref=e17]: "Password : admin123"
      - generic [ref=e18]:
        - generic [ref=e20]:
          - generic [ref=e21]:
            - generic [ref=e22]: 
            - generic [ref=e23]: Username
          - textbox "username" [ref=e25]: invalid
        - generic [ref=e27]:
          - generic [ref=e28]:
            - generic [ref=e29]: 
            - generic [ref=e30]: Password
          - textbox "password" [ref=e32]: invalid
        - button "Login" [ref=e34] [cursor=pointer]
        - paragraph [ref=e36] [cursor=pointer]: Forgot Your Password?
    - generic [ref=e37]:
      - generic [ref=e38]:
        - link [ref=e39]:
          - /url: https://www.linkedin.com/company/orangehrm/mycompany/
        - link [ref=e42]:
          - /url: https://www.facebook.com/OrangeHRM/
        - link [ref=e45]:
          - /url: https://twitter.com/orangehrm?lang=en
        - link [ref=e48]:
          - /url: https://www.youtube.com/c/OrangeHRMInc
      - generic [ref=e51]:
        - paragraph [ref=e52]: OrangeHRM OS 5.9
        - paragraph [ref=e53]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=e54]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '../../../src/fixtures/baseFixtures';
  2  | 
  3  | test.describe('OrangeHRM Login Tests', () => {
  4  |   test.beforeEach(async ({ orangeHRMLoginPage }) => {
  5  |     await orangeHRMLoginPage.navigate();
  6  |   });
  7  | 
  8  |   test('should login successfully with valid credentials', async ({
  9  |     orangeHRMLoginPage,
  10 |     orangeHRMDashboardPage,
  11 |   }) => {
  12 |     await orangeHRMLoginPage.login();
  13 |     
  14 |     const isDashboardDisplayed = await orangeHRMDashboardPage.isDashboardDisplayed();
  15 |     expect(isDashboardDisplayed).toBeTruthy();
  16 |     
  17 |     const dashboardTitle = await orangeHRMDashboardPage.getDashboardTitle();
  18 |     expect(dashboardTitle).toBe('Dashboard');
  19 |   });
  20 | 
  21 |   test('should display error with invalid credentials', async ({ orangeHRMLoginPage }) => {
  22 |     await orangeHRMLoginPage.login('invalid', 'invalid');
  23 |     
  24 |     const isErrorDisplayed = await orangeHRMLoginPage.isErrorDisplayed();
> 25 |     expect(isErrorDisplayed).toBeTruthy();
     |                              ^ Error: expect(received).toBeTruthy()
  26 |   });
  27 | 
  28 |   test('should logout successfully', async ({
  29 |     authenticatedOrangeHRMPage,
  30 |     orangeHRMDashboardPage,
  31 |     orangeHRMLoginPage,
  32 |   }) => {
  33 |     await orangeHRMDashboardPage.logout();
  34 |     
  35 |     const currentUrl = await authenticatedOrangeHRMPage.url();
  36 |     expect(currentUrl).toContain('login');
  37 |   });
  38 | });
  39 | 
```