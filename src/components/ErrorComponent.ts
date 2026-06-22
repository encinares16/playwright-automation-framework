import { Page, Locator } from '@playwright/test'

export class ErrorComponent {
  readonly page: Page
  readonly errorMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.errorMessage = page.locator('[data-test="error"]')
  }
}