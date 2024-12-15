import { chromium, test } from "@playwright/test"

test("Login test demo",async() =>{

         const browser = await chromium.launch();
         const context = await browser.newContext(); 
         const page = await context.newPage();

         await page.goto("https://onlinelibrary.wiley.com/"),
         const getStarted = page.getByRole('link', { name: 'Login/ Register' });

        // Click it.
        await getStarted.click();
         //await page.click("text=Login/ Register")
})
/*
import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  const browser = await chromium.launch(
   // headless:false
  );
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://onlinelibrary.wiley.com/");
  await page.hover(
    "//html/body/div[2]/div/div[1]/header/div/div[2]/div/div/div/div[2]/div/div[2]/div/div[1]/button/span[2]"
  );
  await page.click("Login / Register");

  await browser.close(); // Optionally close the browser after the test
});*/
