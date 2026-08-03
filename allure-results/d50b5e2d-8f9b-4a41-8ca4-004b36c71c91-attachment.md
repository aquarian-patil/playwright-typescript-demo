# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\saucedemo\e2e.spec.ts >> SauceDemo E2E Tests >> should complete full purchase flow
- Location: tests\ui\saucedemo\e2e.spec.ts:4:7

# Error details

```
TypeError: Cannot set property pageTitle of #<ProductsPage> which has only a getter
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