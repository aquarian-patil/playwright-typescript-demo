# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\orangehrm\login.spec.ts >> OrangeHRM Login Tests >> should login successfully with valid credentials
- Location: tests\ui\orangehrm\login.spec.ts:8:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "username" [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "password" [ref=e30]: admin123
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot Your Password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
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
> 15 |     expect(isDashboardDisplayed).toBeTruthy();
     |                                  ^ Error: expect(received).toBeTruthy()
  16 |     
  17 |     const dashboardTitle = await orangeHRMDashboardPage.getDashboardTitle();
  18 |     expect(dashboardTitle).toBe('Dashboard');
  19 |   });
  20 | 
  21 |   test('should display error with invalid credentials', async ({ orangeHRMLoginPage }) => {
  22 |     await orangeHRMLoginPage.login('invalid', 'invalid');
  23 |     
  24 |     const isErrorDisplayed = await orangeHRMLoginPage.isErrorDisplayed();
  25 |     expect(isErrorDisplayed).toBeTruthy();
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