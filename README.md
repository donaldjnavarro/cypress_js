# Cypress JavaScript Template

Example Cypress framework

## Tech Stack

- **Language**: Javascript
- **Runtime**: NodeJS
- **Package Manager**: NPM
- **Test automation**: Cypress
- **Linter**: ESLint
- **Assertions**: Chai (default)
- **Test reports**: Mochawesome

## Usage

### Our custom commands

See `package.json` file's `scripts` for our custom commands that can be run with `npm run <script>`

### Common Cypress commands

Run the Cypress GUI:
```bash
npx cypress open
```

Run the entire test suite:
```bash
npx cypress run
```

Run a test from commandline but still display the automated browser head:
```bash
npx cypress run --headed --browser chrome --spec "cypress/e2e/my_test_spec.js"
```

Run a specific test file:
```bash
npx cypress run --spec "cypress/e2e/example_spec.js"
```

Run component tests (and not e2e tests)
```bash
npx cypress run --component
```

Run e2e tests (and not component tests)
```bash
npx cypress run --e2e
```

## Cypress approach

### XPath

We use a Cypress package to support xpath references to elements. XPath is a more reliable and transparent approach than using the default CSS selectors.

### Page Object Models

In `cypress/pages` are page models which standardize automation for particular functionality and store a dictionary of xpath locators for a given page.

### Test results

**HTML**: Test results are generated in HTML in the `reports/` folder.

**Screenshots**: Screenshots from any failures are automatically included in the HTML report.
