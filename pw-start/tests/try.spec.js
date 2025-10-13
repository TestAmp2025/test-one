const { test, expect } = require('@playwright/test');

test('comprehensive locator strategies', async ({ page }) => {
    console.log('=== Playwright Locator Strategies ===');

    await page.goto('https://mini-bank.testamplify.com/');
    console.log('\n--- By Role (Accessibility) ---');

    // 1. By Role (Accessibility-friendly)
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeEnabled();
    console.log('✅ Role locators working');

    // 2. By Text Content
    console.log('\n--- By Text Content ---');
    const heading = page.getByText('Manage Your Finances Seamlessly');
    await expect(heading).toBeVisible();
    console.log('✅ Text locators working');

    // 3. By Placeholder
    console.log('\n--- By Placeholder ---');
    loginButton.click();
    const usernameByPlaceholder = page.getByPlaceholder('you@example.com');
    const passwordByPlaceholder = page.getByPlaceholder('Enter your password');
    
    await expect(usernameByPlaceholder).toBeVisible();
    await expect(passwordByPlaceholder).toBeVisible();
    console.log('✅ Placeholder locators working');

    await usernameByPlaceholder.fill('testuser2@yopmail.com');
    await passwordByPlaceholder.fill('Pass2005#');
    
    // 4. By XPath (Advanced)
    console.log('\n--- By XPath (Advanced) ---');
    const loginButtonByXPath = page.locator('xpath=//button[@type="submit"]');
    await loginButtonByXPath.click();
    const titleByXPath = page.locator('xpath=//h2[text()= "Overview"]') 
    await expect(titleByXPath).toBeVisible();
    console.log('✅ XPath locators working');

    //    5. By CSS Selector
    console.log('\n--- By CSS Selector ---');
    const titleById = page.locator('div.flex.justify-between.items-center small.text-gray-400');
    await expect(titleById).toBeVisible();
    console.log('✅ CSS Selectors locators working');
});