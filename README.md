## Testing and Quality Assurance

This portfolio includes automated tests to support reliability, accessibility, and responsive behavior.

### Test stack

- **Vitest** for unit and component tests
- **React Testing Library** for user-focused component testing
- **jest-axe** for automated accessibility checks in the React testing environment
- **Playwright** for end-to-end tests in real browsers
- **@axe-core/playwright** for accessibility audits in browser-based E2E tests
- **ESLint** for static code analysis

### Available scripts

- `npm run test`: runs unit and component tests once.
- `npm run test:watch`: runs tests in watch mode.
- `npm run test:ui`: opens the Vitest visual interface.
- `npm run coverage`: runs tests and generates a coverage report.
- `npm run test:e2e`: runs Playwright end-to-end tests.
- `npm run test:e2e:ui`: opens the Playwright visual test runner.
- `npm run lint`: runs static code analysis.
- `npm run check`: runs the main validation pipeline before deployment.

### What is tested

The test suite covers:

- Portfolio data integrity
- Main page rendering
- Navigation structure
- External profile links
- Keyboard navigation
- Automated accessibility checks
- End-to-end rendering on desktop and mobile
- Browser-based accessibility audits

### Coverage targets

- Statements: 80%+
- Lines: 80%+
- Functions: 70%+
- Branches: 60%+

### Accessibility testing

Accessibility is tested at two levels:

1. Component/page-level checks using `jest-axe`
2. Browser-level checks using `@axe-core/playwright`

These automated tests help identify accessibility issues, but they do not replace manual review with keyboard navigation, screen readers, assistive technologies, and real user feedback.