import { test, expect } from '@playwright/test';

test('Verify publication view functionality', async ({ page }) => {
  // Navigate to the Wiley Online Library homepage
  await page.goto('https://onlinelibrary.wiley.com/');

  

  // Perform a search for a publication
  await page.fill('search', 'Artificial Intelligence');
  await page.press('search', 'Enter');

  // Click on the publication link
  await page.click('text=Artificial Intelligence');

  // Wait for the PDF viewer to load and verify its visibility
  const pdfViewer = await page.locator('pdf-viewer');
  await expect(pdfViewer).toBeVisible();
});
