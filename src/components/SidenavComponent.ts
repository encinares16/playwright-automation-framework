import { Page, Locator } from '@playwright/test'

export class Sidenav {
  readonly page: Page
  readonly logoutButton: Locator
  readonly openMenuButton: Locator

  constructor(page: Page) {
    this.page = page
    this.logoutButton = page.locator('[data-test="logout-sidebar-link"]')
    this.openMenuButton = page.getByRole('button', { name: 'Open Menu' })
  }

  async logout(){
    await this.openMenuButton.click()
    await this.logoutButton.click()
  }
}