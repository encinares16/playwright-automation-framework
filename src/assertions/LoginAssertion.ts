import { ErrorComponent } from "@components/ErrorComponent"
import { LoginPage } from "@pages/LoginPage"
import { ProductInventoryPage } from "@pages/ProductInventoryPage"
import { expect, Page } from "@playwright/test"

export class LoginAssertion {

  private readonly loginPage: LoginPage
  private readonly productPage: ProductInventoryPage
  private readonly message: ErrorComponent

  constructor(private readonly page: Page) {
    this.loginPage = new LoginPage(page)
    this.productPage = new ProductInventoryPage(page)
    this.message = new ErrorComponent(page)
  }

  async verifyUserDashboard() {
    await expect(this.page).toHaveTitle(/Swag Labs/)
    await expect(this.productPage.header).toBeVisible()
  }

  async verifyMessageInvalidCred(){
    await expect(this.message.errorMessage).toHaveText(/^Epic sadface: Username and password do not match any user in this service$/);
  }

  async verifyMessageUserLockedOut(){
    await expect(this.message.errorMessage).toHaveText(/^Epic sadface: Sorry, this user has been locked out.$/);
  }

   async verifyMessageMissingField(){
    await expect(this.message.errorMessage).toHaveText(/^Epic sadface: (?:Username|Password) is required$/);
  }

  async verifyFieldsVisible(){
    await expect(this.page).toHaveTitle(/Swag Labs/)
    await expect(this.loginPage.logo).toBeVisible()
    await expect(this.loginPage.username).toBeVisible()
    await expect(this.loginPage.password).toBeVisible()
    await expect(this.loginPage.buttonLogin).toBeVisible()
  }
}

export default LoginAssertion