import { test, expect } from '@playwright/test'
import LoginPage from '../testPages/Login.js'

test.describe('Login tests', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://quick-ai-eight-nu.vercel.app/')
    })
    test('Login', async({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login('test@example.com', '12345@Nav')
        await loginPage.dashboardBtn()
        await expect(page).toHaveURL('https://quick-ai-eight-nu.vercel.app/ai')
    })
    test('invalid login' , async({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login('test@example.com', '1235@N')
        
        await expect(page.locator('.cl-formFieldErrorText')).toBeVisible()
        
        await expect(page).not.toHaveURL('https://quick-ai-eight-nu.vercel.app/ai')
    })
})
