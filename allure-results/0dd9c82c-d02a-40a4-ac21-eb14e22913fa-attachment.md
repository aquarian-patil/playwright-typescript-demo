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
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Login" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e12]:
          - alert [ref=f1e13]:
            - generic [ref=f1e14]:
              - generic [ref=f1e15]: 
              - paragraph [ref=f1e16]: Invalid credentials
          - generic [ref=f1e18]:
            - paragraph [ref=f1e19]: "Username : Admin"
            - paragraph [ref=f1e20]: "Password : admin123"
        - generic [ref=f1e21]:
          - generic [ref=f1e23]:
            - generic [ref=f1e24]:
              - generic [ref=f1e25]: 
              - generic [ref=f1e26]: Username
            - textbox "username" [active] [ref=f1e28]
          - generic [ref=f1e30]:
            - generic [ref=f1e31]:
              - generic [ref=f1e32]: 
              - generic [ref=f1e33]: Password
            - textbox "password" [ref=f1e35]
          - button "Login" [ref=f1e37] [cursor=pointer]
          - paragraph [ref=f1e39] [cursor=pointer]: Forgot Your Password?
      - generic [ref=f1e40]:
        - generic [ref=f1e41]:
          - link [ref=f1e42]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e45]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e48]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e51]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e54]:
          - paragraph [ref=f1e55]: OrangeHRM OS 5.9
          - paragraph [ref=f1e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e57]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e59]
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