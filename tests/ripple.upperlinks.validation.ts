import {chromium, test} from "@playwright/test"
//@Scenario - Validate all upperlinks at ripple website
test("ripple website upperlinks validation", async ()=> {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.rippleoperations.com/")
    await page.click("text=The Suite")
    await page.click("text=Ripple Onboard")
    await page.click("text=Products")
    await page.click("text=Why Ripple")
    await page.click("text=Login")
    await page.click("text=Schedule a Demo")

})