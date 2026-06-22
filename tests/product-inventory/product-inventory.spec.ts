import { test } from '@/src/fixtures/test.fixture'
import { accounts } from '@/src/test-data/auth.data' 
import { userLoginFlow } from '@/src/flows/userLoginFlow'

test.describe('Product Inventory', async () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto()
  })

  test('should authenticate user with valid credentials @p1 @smoke', async ({ page, assertion }) => {
    const { username, password } = accounts.standardUser
    
    await userLoginFlow(page, username, password)
    await assertion.verifyUserDashboard()
  })
})