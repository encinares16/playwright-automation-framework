import { LoginPage } from "@pages/LoginPage"
import LoginAssertion from "@assertions/LoginAssertion"
import { ProductInventoryPage } from "@pages/ProductInventoryPage"
import { Sidenav } from "@components/SidenavComponent"
import { test as base } from "@playwright/test"

type TestFixtures = {
  loginPage: LoginPage
  assertion: LoginAssertion
  dashboard: ProductInventoryPage
  sidenav: Sidenav
}

export const test = base.extend<TestFixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },

  assertion: async ({ page }, use) => {
    await use(new LoginAssertion(page))
  },

  sidenav: async ({ page }, use) => {
    await use(new Sidenav(page))
  },
})

export { expect } from '@playwright/test'