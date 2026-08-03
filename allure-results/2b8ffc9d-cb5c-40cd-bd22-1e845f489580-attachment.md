# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\orangehrm\login.spec.ts >> OrangeHRM Login Tests >> should logout successfully
- Location: tests\ui\orangehrm\login.spec.ts:28:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: Carlos Boretti
              - generic [ref=f2e128]: 
            - menu [ref=f2e129]:
              - listitem [ref=f2e130]:
                - menuitem "About" [ref=f2e131]
              - listitem [ref=f2e132]:
                - menuitem "Support" [ref=f2e133]
              - listitem [ref=f2e134]:
                - menuitem "Change Password" [ref=f2e135]
              - listitem [ref=f2e136]:
                - menuitem "Logout" [ref=f2e137]
      - navigation "Topbar Menu" [ref=f2e139]:
        - list [ref=f2e140]:
          - button "" [ref=f2e142] [cursor=pointer]
  - generic [ref=f2e144]:
    - generic [ref=f2e146]:
      - generic [ref=f2e148]:
        - generic [ref=f2e150]:
          - generic [ref=f2e151]: 
          - paragraph [ref=f2e152]: Time at Work
        - separator [ref=f2e153]
        - generic [ref=f2e155]:
          - generic [ref=f2e156]:
            - img "profile picture" [ref=f2e158]
            - generic [ref=f2e159]:
              - paragraph [ref=f2e160]: Punched Out
              - paragraph [ref=f2e161]: "Punched Out: Today at 04:17 PM (GMT 2)"
          - generic [ref=f2e162]:
            - generic [ref=f2e163]: 0h 2m Today
            - button "" [ref=f2e164] [cursor=pointer]
          - separator [ref=f2e166]
          - generic [ref=f2e167]:
            - generic [ref=f2e168]:
              - paragraph [ref=f2e169]: This Week
              - paragraph [ref=f2e170]: Aug 03 - Aug 09
            - generic [ref=f2e171]:
              - generic [ref=f2e172]: 
              - paragraph [ref=f2e173]: 0h 2m
      - generic [ref=f2e177]:
        - generic [ref=f2e179]:
          - generic [ref=f2e180]: 
          - paragraph [ref=f2e181]: My Actions
        - separator [ref=f2e182]
        - generic [ref=f2e184]:
          - generic [ref=f2e185]:
            - button [ref=f2e186] [cursor=pointer]
            - paragraph [ref=f2e192] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f2e193]:
            - button [ref=f2e194] [cursor=pointer]
            - paragraph [ref=f2e203] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f2e205]:
        - generic [ref=f2e207]:
          - generic [ref=f2e208]: 
          - paragraph [ref=f2e209]: Quick Launch
        - separator [ref=f2e210]
        - generic [ref=f2e212]:
          - generic [ref=f2e213]:
            - button "Assign Leave" [ref=f2e214] [cursor=pointer]
            - generic "Assign Leave" [ref=f2e217]:
              - paragraph [ref=f2e218]: Assign Leave
          - generic [ref=f2e219]:
            - button "Leave List" [ref=f2e220] [cursor=pointer]
            - generic "Leave List" [ref=f2e227]:
              - paragraph [ref=f2e228]: Leave List
          - generic [ref=f2e229]:
            - button "Timesheets" [ref=f2e230] [cursor=pointer]
            - generic "Timesheets" [ref=f2e236]:
              - paragraph [ref=f2e237]: Timesheets
          - generic [ref=f2e238]:
            - button "Apply Leave" [ref=f2e239] [cursor=pointer]
            - generic "Apply Leave" [ref=f2e242]:
              - paragraph [ref=f2e243]: Apply Leave
          - generic [ref=f2e244]:
            - button "My Leave" [ref=f2e245] [cursor=pointer]
            - generic "My Leave" [ref=f2e250]:
              - paragraph [ref=f2e251]: My Leave
          - generic [ref=f2e252]:
            - button "My Timesheet" [ref=f2e253] [cursor=pointer]
            - generic "My Timesheet" [ref=f2e256]:
              - paragraph [ref=f2e257]: My Timesheet
      - generic [ref=f2e259]:
        - generic [ref=f2e261]:
          - generic [ref=f2e262]: 
          - paragraph [ref=f2e263]: Buzz Latest Posts
        - separator [ref=f2e264]
        - generic [ref=f2e266]:
          - generic [ref=f2e267]:
            - generic [ref=f2e268] [cursor=pointer]:
              - img "profile picture" [ref=f2e270]
              - generic [ref=f2e271]:
                - paragraph [ref=f2e272]: Carlos Lenora Boretti
                - paragraph [ref=f2e273]: 03-08-2026 11:26 AM
            - separator [ref=f2e274]
            - paragraph [ref=f2e275]: Content posted for testing
          - generic [ref=f2e276]:
            - generic [ref=f2e277] [cursor=pointer]:
              - img "profile picture" [ref=f2e279]
              - generic [ref=f2e280]:
                - paragraph [ref=f2e281]: Carlos Lenora Boretti
                - paragraph [ref=f2e282]: 03-08-2026 11:17 AM
            - separator [ref=f2e283]
            - paragraph [ref=f2e284]: Content posted for testing
          - generic [ref=f2e285]:
            - generic [ref=f2e286] [cursor=pointer]:
              - img "profile picture" [ref=f2e288]
              - generic [ref=f2e289]:
                - paragraph [ref=f2e290]: Carlos Lenora Boretti
                - paragraph [ref=f2e291]: 03-08-2026 10:20 AM
            - separator [ref=f2e292]
            - paragraph [ref=f2e293]: Content posted for testing
          - generic [ref=f2e294]:
            - generic [ref=f2e295] [cursor=pointer]:
              - img "profile picture" [ref=f2e297]
              - generic [ref=f2e298]:
                - paragraph [ref=f2e299]: Carlos Lenora Boretti
                - paragraph [ref=f2e300]: 03-08-2026 10:04 AM
            - separator [ref=f2e301]
            - iframe [ref=f2e303]:
              - generic [ref=f3e1]:
                - generic "YouTube Video Player" [ref=f3e3]
                - generic [ref=f3e5]:
                  - generic:
                    - generic:
                      - generic [ref=f3e6] [cursor=pointer]
                      - button "Play video" [ref=f3e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f3e14] [cursor=pointer]
          - generic [ref=f2e304]:
            - generic [ref=f2e305] [cursor=pointer]:
              - img "profile picture" [ref=f2e307]
              - generic [ref=f2e308]:
                - paragraph [ref=f2e309]: Carlos Lenora Boretti
                - paragraph [ref=f2e310]: 03-08-2026 10:04 AM
            - separator [ref=f2e311]
            - iframe [ref=f2e313]:
              - generic [ref=f4e1]:
                - generic "YouTube Video Player" [ref=f4e3]
                - generic [ref=f4e5]:
                  - generic:
                    - generic:
                      - generic [ref=f4e6] [cursor=pointer]
                      - button "Play video" [ref=f4e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f4e14] [cursor=pointer]
      - generic [ref=f2e315]:
        - generic [ref=f2e316]:
          - paragraph [ref=f2e321]: Employees on Leave Today
          - generic [ref=f2e322] [cursor=pointer]: 
        - separator [ref=f2e323]
        - generic [ref=f2e325]:
          - img "profile picture" [ref=f2e327]
          - generic [ref=f2e328]:
            - paragraph [ref=f2e329]: Carlos Boretti
            - paragraph [ref=f2e330]: CAN - Bereavement (Half Day - Morning)
          - paragraph [ref=f2e331]: "171"
      - generic [ref=f2e333]:
        - generic [ref=f2e335]:
          - generic [ref=f2e336]: 
          - paragraph [ref=f2e337]: Employee Distribution by Sub Unit
        - separator [ref=f2e338]
        - list [ref=f2e343]:
          - listitem [ref=f2e344] [cursor=pointer]:
            - generic "Human Resources" [ref=f2e346]
          - listitem [ref=f2e347] [cursor=pointer]:
            - generic "Unassigned" [ref=f2e349]
      - generic [ref=f2e351]:
        - generic [ref=f2e353]:
          - generic [ref=f2e354]: 
          - paragraph [ref=f2e355]: Employee Distribution by Location
        - separator [ref=f2e356]
        - list [ref=f2e361]:
          - listitem [ref=f2e362] [cursor=pointer]:
            - generic "Texas R&D" [ref=f2e364]
          - listitem [ref=f2e365] [cursor=pointer]:
            - generic "Unassigned" [ref=f2e367]
    - generic [ref=f2e368]:
      - paragraph [ref=f2e369]: OrangeHRM OS 5.9
      - paragraph [ref=f2e370]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e371]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  23  |   protected abstract pageTitle: string;
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
  35  |     try {
  36  |       await this.page.goto(this.pageUrl, { 
  37  |         waitUntil: 'domcontentloaded',
  38  |         timeout: 60000 // Increase timeout to 60 seconds for slow networks
  39  |       });
  40  |       await this.waitForPageLoad();
  41  |     } catch (error) {
  42  |       this.logger.error(`Navigation failed: ${error}`);
  43  |       // Retry once if navigation fails
  44  |       this.logger.info('Retrying navigation...');
  45  |       await this.page.goto(this.pageUrl, { 
  46  |         waitUntil: 'load',
  47  |         timeout: 60000
  48  |       });
  49  |     }
  50  |   }
  51  | 
  52  |   /**
  53  |    * Wait for page to be fully loaded
  54  |    */
  55  |   async waitForPageLoad(): Promise<void> {
  56  |     try {
  57  |       await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  58  |       this.logger.info('Page loaded successfully');
  59  |     } catch (error) {
  60  |       // If networkidle times out, check if page is at least loaded
  61  |       this.logger.warn('Network idle timeout, checking if page is loaded...');
> 62  |       await this.page.waitForLoadState('load', { timeout: 10000 });
      |                       ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  63  |       this.logger.info('Page loaded (without network idle)');
  64  |     }
  65  |   }
  66  | 
  67  |   /**
  68  |    * Get page title
  69  |    */
  70  |   async getTitle(): Promise<string> {
  71  |     const title = await this.page.title();
  72  |     this.logger.debug(`Page title: ${title}`);
  73  |     return title;
  74  |   }
  75  | 
  76  |   /**
  77  |    * Get current URL
  78  |    */
  79  |   async getUrl(): Promise<string> {
  80  |     const url = this.page.url();
  81  |     this.logger.debug(`Current URL: ${url}`);
  82  |     return url;
  83  |   }
  84  | 
  85  |   /**
  86  |    * Click on an element
  87  |    */
  88  |   async click(locator: Locator | string, options?: { force?: boolean; timeout?: number }): Promise<void> {
  89  |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  90  |     this.logger.debug(`Clicking element: ${element.toString()}`);
  91  |     await element.click(options);
  92  |   }
  93  | 
  94  |   /**
  95  |    * Double click on an element
  96  |    */
  97  |   async doubleClick(locator: Locator | string): Promise<void> {
  98  |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  99  |     this.logger.debug(`Double clicking element: ${element.toString()}`);
  100 |     await element.dblclick();
  101 |   }
  102 | 
  103 |   /**
  104 |    * Right click on an element
  105 |    */
  106 |   async rightClick(locator: Locator | string): Promise<void> {
  107 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  108 |     this.logger.debug(`Right clicking element: ${element.toString()}`);
  109 |     await element.click({ button: 'right' });
  110 |   }
  111 | 
  112 |   /**
  113 |    * Fill text in an input field
  114 |    */
  115 |   async fill(locator: Locator | string, text: string, options?: { force?: boolean }): Promise<void> {
  116 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  117 |     this.logger.debug(`Filling text '${text}' in element: ${element.toString()}`);
  118 |     await element.fill(text, options);
  119 |   }
  120 | 
  121 |   /**
  122 |    * Type text with delay (simulates human typing)
  123 |    */
  124 |   async type(locator: Locator | string, text: string, delay: number = 50): Promise<void> {
  125 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  126 |     this.logger.debug(`Typing text '${text}' in element: ${element.toString()}`);
  127 |     await element.type(text, { delay });
  128 |   }
  129 | 
  130 |   /**
  131 |    * Clear input field
  132 |    */
  133 |   async clear(locator: Locator | string): Promise<void> {
  134 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  135 |     this.logger.debug(`Clearing element: ${element.toString()}`);
  136 |     await element.clear();
  137 |   }
  138 | 
  139 |   /**
  140 |    * Select option from dropdown by value
  141 |    */
  142 |   async selectByValue(locator: Locator | string, value: string): Promise<void> {
  143 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  144 |     this.logger.debug(`Selecting option with value '${value}' from: ${element.toString()}`);
  145 |     await element.selectOption({ value });
  146 |   }
  147 | 
  148 |   /**
  149 |    * Select option from dropdown by label
  150 |    */
  151 |   async selectByLabel(locator: Locator | string, label: string): Promise<void> {
  152 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  153 |     this.logger.debug(`Selecting option with label '${label}' from: ${element.toString()}`);
  154 |     await element.selectOption({ label });
  155 |   }
  156 | 
  157 |   /**
  158 |    * Check checkbox or radio button
  159 |    */
  160 |   async check(locator: Locator | string): Promise<void> {
  161 |     const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
  162 |     this.logger.debug(`Checking element: ${element.toString()}`);
```