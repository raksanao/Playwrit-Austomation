import test from "playwright/test";

test("Search for Playwright on google", async ({ page }) => {

   


        await page.goto("https://www.google.com/");

        await page.waitForTimeout(3000); // pauses for 3 seconds

        const searchBox = await page.locator("//textarea[@class='gLFyf']");

    
        await searchBox.fill('Playwright Automation');



        await searchBox.press('Enter');


});

