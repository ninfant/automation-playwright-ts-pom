# automation-playwright-ts-pom

Automation QA portfolio project using Playwright with TypeScript, Page Object Model, and Slack failure alerts.

## Tech Stack

- Playwright Test
- TypeScript
- dotenv

## Project Structure

```text
.
├── pages/
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── scripts/
│   └── run-and-alert.js
├── tests/
│   └── saucedemo-login.spec.ts
├── utils/
│   ├── slack.js
│   └── test-data.ts
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

4. Run smoke test:

   ```bash
   npm run test:smoke
   ```

5. Run smoke test with Slack alert on failure:

   ```bash
   npm run smoke:alert
   ```

## Project Highlights

- Uses Page Object Model for maintainability and readability
- Uses TypeScript for stronger test safety and team collaboration
- Keeps credentials and URLs configurable through environment variables
- Captures screenshot and trace on failures for faster debugging

## Additional Tests

- `tests/saucedemo-cart.spec.ts`: adds backpack item and validates cart badge
- `tests/saucedemo-logout.spec.ts`: logs out from inventory and returns to login
