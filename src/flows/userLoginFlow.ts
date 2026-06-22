import { LoginPage } from '@pages/LoginPage'

export async function userLoginFlow(page: LoginPage, username: string, password: string){
  await page.goto()
  await page.login(username, password)
}