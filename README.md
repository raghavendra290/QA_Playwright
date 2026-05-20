# Playwright Automation Framework

## Project Overview

This project is an End-to-End UI Automation Framework developed using Playwright with JavaScript.

The framework automates the E-Commerce application available at:

https://rahulshettyacademy.com/client/#/auth/login

The framework follows the Page Object Model (POM) design pattern for better maintainability, reusability, and scalability.

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- VS Code
- Git & GitHub

---

## Application Under Test

Application URL:

https://rahulshettyacademy.com/client/#/auth/login

---

## Project Structure

```text
PWA
│
├── pageObjects
│   ├── CartPage.js
│   ├── DashboardPage.js
│   ├── LoginPage.js
│   ├── OrderPage.js
│   ├── OrderReviewPage.js
│   └── POMManager.js
│
├── tests
│   ├── basic.js
│   ├── calculator.spec.js
│   ├── clientApp.spec.js
│   ├── ClientApp1.spec.js
│   ├── ClientApp2.spec.js
│   ├── excel.js
│   ├── excelwithjs.spec.js
│   ├── starring.spec.js
│   └── uploaddownload.spec.js
│
├── playwright-report
├── test-results
├── node_modules
├── .gitignore
├── package.json
└── package-lock.json
```

---

## Framework Features

- Page Object Model Design Pattern
- End-to-End UI Automation
- Multiple Test Scenarios
- Excel File Handling
- Upload & Download Validation
- Reusable Page Classes
- Playwright HTML Reporting
- Screenshot Capturing
- Cross Browser Support

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/PWA.git
```

Navigate to project folder:

```bash
cd PWA
```

Install dependencies:

```bash
npm install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run specific test file:

```bash
npx playwright test tests/clientApp.spec.js
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in specific browser:

```bash
npx playwright test --project=chromium
```

---

## Generate HTML Report

```bash
npx playwright show-report
```

---

## Design Pattern Used

### Page Object Model (POM)

The framework uses POM architecture where:

- Page classes contain locators and methods
- Test classes contain test scenarios
- POMManager manages all page objects centrally

This improves:
- Code Reusability
- Maintainability
- Readability

---

## Git Commands Used

```bash
git init
git add .
git commit -m "Initial Playwright Framework Commit"
git branch -M main
git remote add origin https://github.com/your-username/PWA.git
git push -u origin main
```

---

## Author

Srinivas

Automation Test Engineer

---

## Future Enhancements

- Jenkins CI/CD Integration
- Allure Reporting
- API Testing Integration
- Docker Execution
- Parallel Execution
- Data Driven Framework
- Environment Configurations
