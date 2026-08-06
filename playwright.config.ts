import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 120 * 1000,
  expect: {
    timeout: 15000,
  },
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  reporter: [
    ["monocart-reporter", { 
      name: "Playwright Enterprise QA Dashboard",
      outputFile: "./monocart-report/index.html",
      theme: "dark",
      customData: {
          metadata: {
              "Project": "Playwright E2E Framework",
              "Environment": process.env.CI ? "CI Pipeline" : "Local",
              "Run ID": process.env.GITHUB_RUN_ID || "Local Run",
              "Commit ID": process.env.GITHUB_SHA || "N/A"
          }
      }
    }],
    ["list"],
    ["json", { outputFile: "reports/test-results.json" }],
    ["junit", { outputFile: "reports/junit-results.xml" }],
    ["playwright-ctrf-json-reporter", {}],
  ],
  use: {
    baseURL: process.env.BASE_URL ?? "https://www.saucedemo.com",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 30000,
    navigationTimeout: 60000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
  outputDir: "test-results/",
});
