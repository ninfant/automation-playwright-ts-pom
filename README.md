# Playwright TypeScript POM Portfolio Project

End-to-end QA automation project for SauceDemo using Playwright, TypeScript, and Page Object Model (POM).  
The goal is to demonstrate maintainable test architecture, CI execution, and practical failure debugging.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- dotenv
- GitHub Actions

## What This Project Validates

- Successful login flow
- Invalid login error handling
- Add product to cart and validate cart badge
- Logout flow from inventory page
- End-to-end checkout completion flow

## Why This Architecture

- **POM for maintainability:** selectors and UI actions are centralized in `pages/`
- **Specs for readability:** business scenarios stay clean in `tests/`
- **Shared test data:** reusable credentials and checkout data in `utils/test-data.ts`
- **Failure diagnostics:** screenshot and trace are retained on failed tests
- **Fast feedback:** CI runs the full suite on every push/PR

## Project Structure

```text
.
├── pages/
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── scripts/
│   └── run-and-alert.js
├── tests/
│   ├── saucedemo-cart.spec.ts
│   ├── saucedemo-checkout.spec.ts
│   ├── saucedemo-invalid-login.spec.ts
│   ├── saucedemo-login.spec.ts
│   └── saucedemo-logout.spec.ts
├── utils/
│   ├── slack.js
│   └── test-data.ts
├── .github/workflows/playwright.yml
├── playwright.config.ts
└── tsconfig.json
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install browser binaries (first run only):
   ```bash
   npx playwright install chromium
   ```
3. Copy environment template:
   ```bash
   cp .env.example .env
   ```
4. Run full suite:
   ```bash
   npm test
   ```

## Useful Commands

- `npm run test:smoke`: run login smoke only
- `npm run test:headed`: run all tests in headed mode
- `npm run test:ui`: run tests with Playwright UI mode
- `npm run test:debug`: run debug mode for step-by-step inspection
- `npm run test:report`: open HTML report
- `npm run smoke:alert`: run smoke and send Slack alert on failure

## Reporting and Artifacts

- HTML report: `playwright-report/index.html`
- Failure artifacts: `test-results/` (trace, screenshot, error context)
- Trace policy: `retain-on-failure` (configured in `playwright.config.ts`)

## Slack Alert Integration

Configure `SLACK_WEBHOOK_URL` in `.env`, then run:

```bash
npm run smoke:alert
```

The alert is triggered only when the smoke test fails.

## Portfolio Evidence

- CI workflow: `.github/workflows/playwright.yml`
- Example screenshots: `after-success.png`, `before-failure.png`
- Scalable test architecture: page objects + reusable test data + isolated specs
