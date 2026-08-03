# Enterprise QE Automation Framework - Playwright + TypeScript

## 📚 Overview

Production-ready Quality Engineering automation framework built with **Playwright** and **TypeScript** following enterprise best practices.

### 🎯 Key Features

✅ **Page Object Model (POM)** - Maintainable page objects
✅ **Type-Safe TypeScript** - Interfaces, enums, generics
✅ **Multi-Browser Support** - Chrome, Firefox, Safari
✅ **Parallel Execution** - Configurable workers
✅ **Multiple Reporters** - HTML, Allure, JSON, JUnit
✅ **Winston Logging** - Daily log rotation
✅ **Environment Management** - Multi-environment support
✅ **API Automation** - Axios-based API client
✅ **Data-Driven Testing** - JSON, Faker
✅ **CI/CD Ready** - GitHub Actions compatible

---

## 🛠️ Technology Stack

- **Playwright** ^1.48.0
- **TypeScript** ^5.7.2
- **Node.js** >=18.0.0
- **Winston** (Logging)
- **Axios** (API Client)
- **Allure** (Reporting)
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
npm run report
```

### Allure Report
```bash
npm run allure:generate
npm run allure:open
```

---

## 🔌 API Testing

### Overview

Comprehensive API testing framework with **60 tests** across **4 API applications**:

| API | Tests | Auth Required | Status |
|-----|-------|---------------|--------|
| **DummyJSON** | 10 | ❌ No | ✅ FREE |
| **JSONPlaceholder** | 25 | ❌ No | ✅ FREE |
| **Petstore** | 20 | ❌ No | ✅ FREE |
| **ReqRes** | 6 | ✅ Yes* | ⚠️ Optional |

**54 tests (90%) run without any configuration!**

*ReqRes tests skip gracefully if no API key is configured.

### Quick Start

```bash
# Run all API tests (54 free tests will run)
npm run test:api

# Run specific API test suite
npx playwright test tests/api/dummyjson.spec.ts
npx playwright test tests/api/jsonplaceholder.spec.ts
npx playwright test tests/api/petstore.spec.ts
npx playwright test tests/api/reqres.spec.ts  # Skips if no API key
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

**Note:** Requires API key. Tests skip gracefully if not configured.

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
│   ├── interfaces/
│   │   └── IApiResponse.ts
│   └── pages/
│       ├── orangehrm/
│       │   ├── LoginPage.ts
│       │   └── DashboardPage.ts
│       └── saucedemo/
│           ├── LoginPage.ts
│           └── ProductsPage.ts
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

✅ **54 API tests run without any configuration**
- No environment variables required
- No API keys needed  
- Perfect for CI/CD pipelines

⏭️ **6 ReqRes tests skip gracefully** when API key not configured

---

## 📝 License

ISC

---

## 👤 Author

Nitin Patil

---

## 🎉 Project Recreated

This project was fully recreated on **2026-08-03** after data loss.
All functionality has been restored with improvements.
