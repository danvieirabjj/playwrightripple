import {chromium, test} from "@playwright/test"
//@scenario login at ripple website and handling new pages
test("ripple valid mail validation", async ()=> {

    const browser = await chromium.launch({
        headless: false
    });
    
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto('https://www.rippleoperations.com');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Login' }).click();
    //to work in the new tab we had to use the page1promise and to interact with the new page we had to use page1.
    const page1 = await page1Promise;
    await page1.getByTestId('Username').fill('Daniel');
    await page1.getByTestId('Password').fill('Daniel');
    await page1.locator('button:text("Login")').click();
  
    

    

  
   

    
    

})