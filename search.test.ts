/*import { chromium, test } from "@playwright/test"

test("Login test demo",async() =>{

         const browser = await chromium.launch();
         const context = await browser.newContext(); 
         const page = await context.newPage();

         await page.goto("https://onlinelibrary.wiley.com/"),
         await page.click("text=Login/ Register")
})
*/
import { test, expect } from '@playwright/test';

test('Verify search functionality', async ({ page }) => {
  // Navigate to the Wiley Online Library homepage
  await page.goto('https://onlinelibrary.wiley.com/');

  // Enter a search term and perform the search
  await page.fill('search', 'Science');
  await page.press('search', 'Enter');

  // Wait for the search results to load
  await page.waitForSelector('.search-results');
