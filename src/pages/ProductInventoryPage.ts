import { Page, Locator } from '@playwright/test'

export class ProductInventoryPage {
  readonly page: Page
  readonly header: Locator
  readonly logout: Locator

  constructor(page: Page) {
    this.page = page
    this.header = page.getByText('Swag Labs')
    this.logout = page.getByRole('menuitem', { name: 'Logout' })
  }

  async userLogout(){
    await this.logout.click();
  }

  async goto(path = '/') {
    await this.page.goto(path)
  }
}