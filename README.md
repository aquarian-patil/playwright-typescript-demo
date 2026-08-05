# Enterprise QE Automation Framework - Playwright + TypeScript

## 📚 Overview

Production-ready Quality Engineering automation framework built with **Playwright** and **TypeScript** following enterprise best practices.

### 🎯 Key Features

✅ **Page Object Model (POM)** - Maintainable page objects with Centralized Locators
✅ **Type-Safe TypeScript** - Interfaces, enums, generics
✅ **Custom Fixtures** - Dependency injection for API clients and UI pages
✅ **Multi-Browser Support** - Chrome, Firefox, Safari, Mobile viewports
✅ **Parallel Execution** - Configurable matrix shards
✅ **Visually Stunning Reports** - CTRF Native GitHub Dashboards
✅ **Winston Logging** - Daily log rotation
✅ **Environment Management** - Multi-environment support via `.env`
✅ **API Automation** - Axios-based API client with Interceptors
✅ **Data-Driven Testing** - JSON Datasets, Faker
✅ **CI/CD Ready** - Fully automated GitHub Actions workflow

---

## 📱 Other Automation Frameworks

Check out my other enterprise frameworks:
- **[mobile-native-app-automation](https://github.com/aquarian-patil/mobile-native-app-automation)** - A production-grade framework for **Mobile Native E2E Test Automation** using **WebdriverIO**, **Appium**, and **BrowserStack**, featuring unified CTRF reporting.

---

## 🛠️ Technology Stack

- **Playwright** ^1.48.0
- **TypeScript** ^5.7.2
- **Node.js** >=18.0.0
- **Winston** (Logging)
- **Axios** (API Client)
- **ESLint** & **Prettier** (Code Quality)
- **Husky** (Git Hooks)
- **CTRF** (Reporting)
- **Faker** (Test Data)

---

## 📦 Installation

```bash
# Clone repository
git clone <your-repo-url>
cd playwright-typescript-demo

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Copy environment file
cp .env.example .env
# Edit .env with your credentials
```

---

## ▶️ Running Tests

### All Tests

```bash
npm test
```

### UI Tests Only

```bash
npm run test:ui
```

### API Tests Only

```bash
npm run test:api
```

### Browser-Specific

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Debug Mode

```bash
npm run test:debug
```

### Headed Mode

```bash
npm run test:headed
```

---

## 📊 Reports

### HTML Report

```bash
npm run test:report
```

### CTRF Report (GitHub Actions)

The framework natively integrates with `playwright-ctrf-json-reporter` to render visually stunning summary dashboards directly inside the GitHub PR or Workflow run.

```bash
# Generate CTRF report locally
npm test
# Report is saved in ctrf/ctrf-report.json
```

---

## 🔌 API Testing

### Overview

Comprehensive API testing framework with **60 tests** across **4 API applications**:

| API                 | Tests | Auth Required | Status      |
| ------------------- | ----- | ------------- | ----------- |
| **DummyJSON**       | 10    | ❌ No         | ✅ FREE     |
| **JSONPlaceholder** | 25    | ❌ No         | ✅ FREE     |
| **Petstore**        | 20    | ❌ No         | ✅ FREE     |
| **ReqRes**          | 6     | ✅ Yes       | ✅ PROVISIONED |

**60 tests (100%) run seamlessly out of the box when secrets are configured!**

### Quick Start

```bash
# Run all API tests (54 free tests will run)
npm run test:api

# Run specific API test suite
npx playwright test tests/api/dummyjson.spec.ts
npx playwright test tests/api/jsonplaceholder.spec.ts
npx playwright test tests/api/petstore.spec.ts
npx playwright test tests/api/reqres.spec.ts
```

### API Applications

#### 1. DummyJSON (10 tests)

**URL:** https://dummyjson.com

**Test Coverage:**

- ✅ Authentication (login success/failure)
- ✅ Products CRUD
- ✅ Search functionality
- ✅ Users management
- ✅ Error handling (404, 400)

#### 2. JSONPlaceholder (25 tests)

**URL:** https://jsonplaceholder.typicode.com

**Test Coverage:**

- ✅ Posts (GET, POST, PUT, PATCH, DELETE)
- ✅ Comments & nested resources
- ✅ Users management
- ✅ Todos CRUD operations
- ✅ Albums & photos

#### 3. Swagger Petstore (20 tests)

**URL:** https://petstore.swagger.io/v2

**Test Coverage:**

- ✅ Pet CRUD operations
- ✅ Store inventory & orders
- ✅ User management
- ✅ Status filtering
- ✅ Faker.js data generation

#### 4. ReqRes (6 tests - Optional)

**URL:** https://reqres.in/api

**Test Coverage:**

- ✅ Users CRUD
- ✅ Authentication

---

## 📝 Demo Applications

### OrangeHRM

**URL:** https://opensource-demo.orangehrmlive.com

**Credentials:**

- Username: `Admin`
- Password: `admin123`

**Automated Scenarios:**

- Login/Logout
- Dashboard verification

### SauceDemo

**URL:** https://www.saucedemo.com

**Credentials:**

- Username: `standard_user`
- Password: `secret_sauce`

**Automated Scenarios:**

- Login/Logout
- Product browsing
- Add to cart

---

## 💾 Project Structure

```
playwright-typescript-demo/
├── data/
├── src/
│   ├── api/
│   │   ├── BaseApiClient.ts
│   │   └── clients/
│   │       ├── DummyJsonClient.ts
│   │       ├── JsonPlaceholderClient.ts
│   │       ├── PetstoreClient.ts
│   │       └── ReqResClient.ts
│   ├── base/
│   │   └── BasePage.ts
│   ├── config/
│   │   ├── EnvironmentManager.ts
│   │   └── Logger.ts
│   ├── enums/
│   ├── fixtures/
│   │   ├── apiFixtures.ts
│   │   └── uiFixtures.ts
│   ├── helpers/
│   │   └── DataHelper.ts
│   ├── interfaces/
│   │   └── IApiResponse.ts
│   ├── locators/
│   ├── pages/
│   │   ├── orangehrm/
│   │   │   ├── LoginPage.ts
│   │   │   └── DashboardPage.ts
│   │   └── saucedemo/
│   │       ├── LoginPage.ts
│   │       └── ProductsPage.ts
│   └── utils/
├── tests/
│   ├── api/
│   │   ├── dummyjson.spec.ts
│   │   ├── jsonplaceholder.spec.ts
│   │   ├── petstore.spec.ts
│   │   └── reqres.spec.ts
│   └── ui/
│       ├── orangehrm/
│       │   └── login.spec.ts
│       └── saucedemo/
│           ├── login.spec.ts
│           └── products.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

---

## 🔧 Code Quality

### Linting

```bash
npm run lint
npm run lint:fix
```

### Formatting

```bash
npm run format
npm run format:check
```

### Type Checking

```bash
npm run type-check
```

---

## 🚀 CI/CD Ready

✅ **100% Fully Automated Pipeline**

- Configured GitHub Actions matrix execution
- Securely injects UI and API credentials via GitHub Secrets
- Merges multiple test shards into a single visually stunning CTRF dashboard summary

---

## 👤 Author

Nithin Patil

---

## 🎉 Project Recreated

This project was fully recreated on **2026-08-03** after data loss.
All functionality has been restored with improvements.
