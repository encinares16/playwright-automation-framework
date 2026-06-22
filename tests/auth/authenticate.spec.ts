import { test } from '@/src/fixtures/test.fixture'
import { accounts } from '@/src/test-data/auth.data' 
import { userLoginFlow } from '@/src/flows/userLoginFlow'

test.describe('Authentication', async () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto()
  })

  test('should authenticate user with valid credentials @p1 @smoke', async ({ page, assertion }) => {
    const { username, password } = accounts.standardUser
    
    await userLoginFlow(page, username, password)
    await assertion.verifyUserDashboard()
  })

  test('should allow the user to log out @p1 @smoke', async ({ page, assertion, sidenav }) => {
    const { username, password } = accounts.standardUser
    await userLoginFlow(page, username, password)
    await assertion.verifyUserDashboard()
    await sidenav.logout()
  })

  test('should reject authentication with an invalid username @p1 @regression', async ({ page, assertion }) => {
    const { password } = accounts.standardUser
    await userLoginFlow(page, 'invalid-username', password)
    await assertion.verifyMessageInvalidCred()
  })

  test('should reject authentication with an invalid password @p1 @regression', async ({ page, assertion }) => {
    const { username } = accounts.standardUser
    await userLoginFlow(page, username, 'invalid-password')
    await assertion.verifyMessageInvalidCred()
  })

  test('should reject authentication for a locked account @p1 @regression', async ({ page, assertion }) => {
    const { username, password } = accounts.lockedOutUser
    await userLoginFlow(page, username, password)
    await assertion.verifyMessageUserLockedOut()
  })

  test('should reject authentication when username is empty @p2 @regression', async ({ page, assertion }) => {
    const { password } = accounts.standardUser
    await userLoginFlow(page, '', password)
    await assertion.verifyMessageMissingField()
  })

  test('should reject authentication when password is empty @p2 @regression', async ({ page, assertion }) => {
    const { username } = accounts.standardUser
    await userLoginFlow(page, username, '')
    await assertion.verifyMessageMissingField()
  })

  test('should reject authentication when both username and password are empty @p2 @regression', async ({ page, assertion }) => {
    await userLoginFlow(page, '', '')
    await assertion.verifyMessageMissingField()
  })

  test('should allow login by pressing the Enter key @p3 @smoke', async ({ loginPage, assertion }) => {
    const { username, password } = accounts.standardUser
    await loginPage.loginPressEnter(username, password);
    await assertion.verifyUserDashboard()
  })

  test('should display the login logo and login fields @p3', async ({ loginPage, assertion }) => {
    await loginPage.goto()
    await assertion.verifyFieldsVisible()
  })
})