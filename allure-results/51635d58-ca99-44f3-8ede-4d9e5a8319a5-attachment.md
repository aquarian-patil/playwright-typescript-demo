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
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link [ref=e26]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30]:
              - /url: "#"
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link [ref=e38]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42]:
              - /url: "#"
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link [ref=e50]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54]:
              - /url: "#"
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link [ref=e62]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66]:
              - /url: "#"
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link [ref=e74]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78]:
              - /url: "#"
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link [ref=e86]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90]:
              - /url: "#"
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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