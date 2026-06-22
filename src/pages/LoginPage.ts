import { Page, Locator } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly logo: Locator
  readonly username: Locator
  readonly password: Locator
  readonly buttonLogin: Locator

  constructor(page: Page) {
    this.page = page
    this.logo = page.getByText('Swag Labs')
    this.username = page.locator('[data-test="username"]')
    this.password = page.locator('[data-test="password"]')
    this.buttonLogin = page.locator('[data-test="login-button"]')
  }

  async login(username: string, password: string) {   
    await this.username.fill(username)
    await this.password.fill(password)
    await this.buttonLogin.click()
  }

  async loginPressEnter(username: string, password: string){
    await this.username.fill(username)
    await this.password.fill(password)
    await this.password.press('Enter')
  }

  async goto(path = '/'){
    await this.page.goto(path)
  }
}