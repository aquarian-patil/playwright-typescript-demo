# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\orangehrm\login.spec.ts >> OrangeHRM Login Tests >> should login successfully with valid credentials
- Location: tests\ui\orangehrm\login.spec.ts:8:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: Harry Bonaiuti
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Today at 04:17 PM (GMT 2)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 2m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Aug 03 - Aug 09
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 2m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - generic [ref=f1e176]:
            - button [ref=f1e177] [cursor=pointer]
            - paragraph [ref=f1e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e184]:
            - button [ref=f1e185] [cursor=pointer]
            - paragraph [ref=f1e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f1e196]:
        - generic [ref=f1e198]:
          - generic [ref=f1e199]: 
          - paragraph [ref=f1e200]: Quick Launch
        - separator [ref=f1e201]
        - generic [ref=f1e203]:
          - generic [ref=f1e204]:
            - button "Assign Leave" [ref=f1e205] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e208]:
              - paragraph [ref=f1e209]: Assign Leave
          - generic [ref=f1e210]:
            - button "Leave List" [ref=f1e211] [cursor=pointer]
            - generic "Leave List" [ref=f1e218]:
              - paragraph [ref=f1e219]: Leave List
          - generic [ref=f1e220]:
            - button "Timesheets" [ref=f1e221] [cursor=pointer]
            - generic "Timesheets" [ref=f1e227]:
              - paragraph [ref=f1e228]: Timesheets
          - generic [ref=f1e229]:
            - button "Apply Leave" [ref=f1e230] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e233]:
              - paragraph [ref=f1e234]: Apply Leave
          - generic [ref=f1e235]:
            - button "My Leave" [ref=f1e236] [cursor=pointer]
            - generic "My Leave" [ref=f1e241]:
              - paragraph [ref=f1e242]: My Leave
          - generic [ref=f1e243]:
            - button "My Timesheet" [ref=f1e244] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e247]:
              - paragraph [ref=f1e248]: My Timesheet
      - generic [ref=f1e250]:
        - generic [ref=f1e252]:
          - generic [ref=f1e253]: 
          - paragraph [ref=f1e254]: Buzz Latest Posts
        - separator [ref=f1e255]
        - generic [ref=f1e257]:
          - generic [ref=f1e258]:
            - generic [ref=f1e259] [cursor=pointer]:
              - img "profile picture" [ref=f1e261]
              - generic [ref=f1e262]:
                - paragraph [ref=f1e263]: Harry Andrew Bonaiuti
                - paragraph [ref=f1e264]: 03-08-2026 11:17 AM
            - separator [ref=f1e265]
            - paragraph [ref=f1e266]: Content posted for testing
          - generic [ref=f1e267]:
            - generic [ref=f1e268] [cursor=pointer]:
              - img "profile picture" [ref=f1e270]
              - generic [ref=f1e271]:
                - paragraph [ref=f1e272]: Harry Andrew Bonaiuti
                - paragraph [ref=f1e273]: 03-08-2026 10:20 AM
            - separator [ref=f1e274]
            - paragraph [ref=f1e275]: Content posted for testing
          - generic [ref=f1e276]:
            - generic [ref=f1e277] [cursor=pointer]:
              - img "profile picture" [ref=f1e279]
              - generic [ref=f1e280]:
                - paragraph [ref=f1e281]: Harry Andrew Bonaiuti
                - paragraph [ref=f1e282]: 03-08-2026 10:04 AM
            - separator [ref=f1e283]
            - iframe [ref=f1e285]:
              - generic [ref=f2e1]:
                - generic "YouTube Video Player" [ref=f2e3]
                - generic [ref=f2e5]:
                  - generic:
                    - generic:
                      - generic [ref=f2e6] [cursor=pointer]
                      - button "Play video" [ref=f2e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f2e14] [cursor=pointer]
          - generic [ref=f1e286]:
            - generic [ref=f1e287] [cursor=pointer]:
              - img "profile picture" [ref=f1e289]
              - generic [ref=f1e290]:
                - paragraph [ref=f1e291]: Harry Andrew Bonaiuti
                - paragraph [ref=f1e292]: 03-08-2026 10:04 AM
            - separator [ref=f1e293]
            - iframe [ref=f1e295]:
              - generic [ref=f3e1]:
                - generic "YouTube Video Player" [ref=f3e3]
                - generic [ref=f3e5]:
                  - generic:
                    - generic:
                      - generic [ref=f3e6] [cursor=pointer]
                      - button "Play video" [ref=f3e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f3e14] [cursor=pointer]
          - generic [ref=f1e296]:
            - generic [ref=f1e297] [cursor=pointer]:
              - img "profile picture" [ref=f1e299]
              - generic [ref=f1e300]:
                - paragraph [ref=f1e301]: Harry Andrew Bonaiuti
                - paragraph [ref=f1e302]: 07-10-2020 11:38 PM
            - separator [ref=f1e303]
            - paragraph [ref=f1e304]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
      - generic [ref=f1e306]:
        - generic [ref=f1e307]:
          - paragraph [ref=f1e312]: Employees on Leave Today
          - generic [ref=f1e313] [cursor=pointer]: 
        - separator [ref=f1e314]
        - generic [ref=f1e316]:
          - img "profile picture" [ref=f1e318]
          - generic [ref=f1e319]:
            - paragraph [ref=f1e320]: Harry Bonaiuti
            - paragraph [ref=f1e321]: CAN - Bereavement (Half Day - Morning)
          - paragraph [ref=f1e322]: "172"
      - generic [ref=f1e324]:
        - generic [ref=f1e326]:
          - generic [ref=f1e327]: 
          - paragraph [ref=f1e328]: Employee Distribution by Sub Unit
        - separator [ref=f1e329]
        - list [ref=f1e334]:
          - listitem [ref=f1e335] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e337]
          - listitem [ref=f1e338] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e340]
      - generic [ref=f1e342]:
        - generic [ref=f1e344]:
          - generic [ref=f1e345]: 
          - paragraph [ref=f1e346]: Employee Distribution by Location
        - separator [ref=f1e347]
        - list [ref=f1e352]:
          - listitem [ref=f1e353] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e355]
          - listitem [ref=f1e356] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e358]
    - generic [ref=f1e359]:
      - paragraph [ref=f1e360]: OrangeHRM OS 5.9
      - paragraph [ref=f1e361]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e362] [cursor=pointer]:
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