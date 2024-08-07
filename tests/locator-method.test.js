import { test } from "@playwright/test";

test("check & uncheck method test: can be used for radio buttons & checkboxes", async ({ page }) => {
  // go to https://practice.cydeo.com/checkboxes
  await page.goto("https://practice.cydeo.com/checkboxes");

  // create locator variable named checkBox1 with this xpath //input[@id='box1']
  const checkBox1 = await page.locator('//input[@id="box1"]');

 

  await checkBox1.check();




  // create locator variable named checkBox2 with this xpath //input[@id='box2']
  const checkBox2 = await page.locator('//input[@id="box2"]');

  await page.waitForTimeout(3000);

  await checkBox2.uncheck();

  await page.waitForTimeout(3000);


});


test('selectOptions method test: can be used for dropdowns', async ({ page }) => {
    
    // go to https://practice.cydeo.com/dropdown
        
    await page.goto('https://practice.cydeo.com/dropdown');

    const simpleDropDown = page.locator("//select[@id='dropdown']");

 
    await simpleDropDown.selectOption( {label: 'Option 1'} );

    // to get all options from drop down
    const options = await simpleDropDown.evaluate((select) => {
        return Array.from(select.options).map(option => ({
          text: option.text,
          value: option.value
        }));
      });
      
      console.log(options);

});