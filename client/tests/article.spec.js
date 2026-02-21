import { test, expect } from '@playwright/test';
import Login from '../testPages/Login';
import ArticleWrite from '../testPages/ArticleWrite';

test.beforeEach(async ({ page }) => {
    await page.goto('https://quick-ai-eight-nu.vercel.app/')
})

test('Generate Article', async ({ page }) => {
    const login = new Login(page);
    const articleWrite = new ArticleWrite(page);
    await login.login('test@example.com', '12345@Nav');
    await articleWrite.generateArticle('What is the future of artificial intelligence?');
    await expect(page.getByText('Enter a topic and click "Generate article " to get started')).not.toBeVisible();
});