# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\saucedemo\e2e.spec.ts >> SauceDemo E2E Tests >> should add and remove products from cart
- Location: tests\ui\saucedemo\e2e.spec.ts:45:7

# Error details

```
TypeError: Cannot set property pageTitle of #<ProductsPage> which has only a getter
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - combobox [ref=e18]:
          - option "Name (A to Z)" [selected]
          - option "Name (Z to A)"
          - option "Price (low to high)"
          - option "Price (high to low)"
    - generic [ref=e22]:
      - generic [ref=e23]:
        - link [ref=e25] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e26]
        - generic [ref=e27]:
          - generic [ref=e28]:
            - link "Sauce Labs Backpack" [ref=e29] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e31]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e32]:
            - generic [ref=e33]: $29.99
            - button "Add to cart" [ref=e34] [cursor=pointer]
      - generic [ref=e35]:
        - link [ref=e37] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e38]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - link "Sauce Labs Bike Light" [ref=e41] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e43]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e44]:
            - generic [ref=e45]: $9.99
            - button "Add to cart" [ref=e46] [cursor=pointer]
      - generic [ref=e47]:
        - link [ref=e49] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e50]
        - generic [ref=e51]:
          - generic [ref=e52]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e53] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e55]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e56]:
            - generic [ref=e57]: $15.99
            - button "Add to cart" [ref=e58] [cursor=pointer]
      - generic [ref=e59]:
        - link [ref=e61] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e62]
        - generic [ref=e63]:
          - generic [ref=e64]:
            - link "Sauce Labs Fleece Jacket" [ref=e65] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e67]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e68]:
            - generic [ref=e69]: $49.99
            - button "Add to cart" [ref=e70] [cursor=pointer]
      - generic [ref=e71]:
        - link [ref=e73] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - link "Sauce Labs Onesie" [ref=e77] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e79]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e80]:
            - generic [ref=e81]: $7.99
            - button "Add to cart" [ref=e82] [cursor=pointer]
      - generic [ref=e83]:
        - link [ref=e85] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e86]
        - generic [ref=e87]:
          - generic [ref=e88]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e89] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e91]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e92]:
            - generic [ref=e93]: $15.99
            - button "Add to cart" [ref=e94] [cursor=pointer]
  - contentinfo [ref=e95]:
    - list [ref=e96]:
      - listitem [ref=e97]:
        - link "Twitter" [ref=e98] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e99]:
        - link "Facebook" [ref=e100] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e101]:
        - link "LinkedIn" [ref=e102] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e103]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | import { Logger } from '../config/Logger';
  3   | 
  4   | /**
  5   |  * BasePage - Abstract base class for all page objects
  6   |  * 
  7   |  * Implements:
  8   |  * - Common page operations (click, fill, select, etc.)
  9   |  * - Wait strategies
  10  |  * - Element interaction methods
  11  |  * - Navigation helpers
  12  |  * - Screenshot and logging utilities
  13  |  * 
  14  |  * Follows:
  15  |  * - Single Responsibility Principle
  16  |  * - DRY (Don't Repeat Yourself)
  17  |  * - Page Object Model pattern
  18  |  */
  19  | export abstract class BasePage {
  20  |   protected page: Page;
  21  |   protected logger: Logger;
  22  |   protected abstract pageUrl: string;
> 23  |   protected abstract pageTitle: string;
      |                               ^ TypeError: Cannot set property pageTitle of #<ProductsPage> which has only a getter
  24  | 
  25  |   constructor(page: Page) {
  26  |     this.page = page;
  27  |     this.logger = Logger.getInstance();
  28  |   }
  29  | 
  30  |   /**
  31  |    * Navigate to the page
  32  |    */
  33  |   async navigate(): Promise<void> {
  34  |     this.logger.info(`Navigating to ${this.pageUrl}`);
  35  |     await this.page.goto(this.pageUrl, { waitUntil: 'domcontentloaded' });
  36  |     await this.waitForPageLoad();
  37  |   }
  38  | 
  39  |   /**
  40  |    * Wait for page to be fully loaded
  41  |    */
  42  |   async waitForPageLoad(): Promise<void> {
  43  |     await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  44  |     this.logger.info('Page loaded successfully');
  45  |   }
  46  | 
  47  |   /**
  48  |    * Get page title
  49  |    */
  50  |   async getTitle(): Promise<string> {
  51  |     const title = await this.page.title();
  52  |     this.logger.debug(`Page title: ${title}`);
  53  |     return title;
  54  |   }
  55  | 
  56  |   /**
  57  |    * Get current URL
  58  |    */
  59  |   async getUrl(): Promise<string> {
  60  |     const url = this.page.url();
  61  |     this.logger.debug(`Current URL: ${url}`);
  62  |     return url;
  63  |   }
  64  | 
  65  |   /**
  66  |    * Click on an element
  67  |    */
  68  |   async click(locator: Locator | string, options?: { force?: boolean; timeout?: number }): Promise<void> {
  69  |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  70  |     this.logger.debug(`Clicking element: ${element.toString()}`);
  71  |     await element.click(options);
  72  |   }
  73  | 
  74  |   /**
  75  |    * Double click on an element
  76  |    */
  77  |   async doubleClick(locator: Locator | string): Promise<void> {
  78  |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  79  |     this.logger.debug(`Double clicking element: ${element.toString()}`);
  80  |     await element.dblclick();
  81  |   }
  82  | 
  83  |   /**
  84  |    * Right click on an element
  85  |    */
  86  |   async rightClick(locator: Locator | string): Promise<void> {
  87  |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  88  |     this.logger.debug(`Right clicking element: ${element.toString()}`);
  89  |     await element.click({ button: 'right' });
  90  |   }
  91  | 
  92  |   /**
  93  |    * Fill text in an input field
  94  |    */
  95  |   async fill(locator: Locator | string, text: string, options?: { force?: boolean }): Promise<void> {
  96  |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  97  |     this.logger.debug(`Filling text '${text}' in element: ${element.toString()}`);
  98  |     await element.fill(text, options);
  99  |   }
  100 | 
  101 |   /**
  102 |    * Type text with delay (simulates human typing)
  103 |    */
  104 |   async type(locator: Locator | string, text: string, delay: number = 50): Promise<void> {
  105 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  106 |     this.logger.debug(`Typing text '${text}' in element: ${element.toString()}`);
  107 |     await element.type(text, { delay });
  108 |   }
  109 | 
  110 |   /**
  111 |    * Clear input field
  112 |    */
  113 |   async clear(locator: Locator | string): Promise<void> {
  114 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  115 |     this.logger.debug(`Clearing element: ${element.toString()}`);
  116 |     await element.clear();
  117 |   }
  118 | 
  119 |   /**
  120 |    * Select option from dropdown by value
  121 |    */
  122 |   async selectByValue(locator: Locator | string, value: string): Promise<void> {
  123 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
```