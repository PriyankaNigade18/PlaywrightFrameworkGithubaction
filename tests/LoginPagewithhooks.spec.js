//import {test,expect} from "@playwright/test"
import {test} from "../fixtures/auth.fixture.js"
import {LoginPage} from "../pages/LoginPage.js"
import {expect} from "@playwright/test"

test.describe("This is login step",()=>{

    let loginpage;
    test.beforeEach(async({page})=>{
     loginpage=new LoginPage(page);
    await loginpage.gotoUrl();
    })

    test("Test login with valid credentials",async({page})=>{

    // const loginpage=new LoginPage(page);
    // await loginpage.gotoUrl();
   await  loginpage.fillUserName("standard_user");
    await loginpage.fillPassword("secret_sauce");
    await loginpage.clickLogin();

    await page.waitForTimeout(2000);
})


test("Test login with username and without password",async({page})=>{
    // const loginpage=new LoginPage(page);
    // await loginpage.gotoUrl();
    await  loginpage.fillUserName("standard_user");
    await loginpage.clickLogin();
    const message=await loginpage.captureErroMessage();
    await expect(message).toHaveText("Epic sadface: Password is required")
    await page.waitForTimeout(2000);

})

test("Test login without username and with password",async({page})=>{
    // const loginpage=new LoginPage(page);
    // await loginpage.gotoUrl();
   await loginpage.fillPassword("secret_sauce")
    await loginpage.clickLogin();
    const message=await loginpage.captureErroMessage();
    await expect(message).toHaveText("Epic sadface: Username is required")
    await page.waitForTimeout(2000);

})
})

test("Test login with fixture",async({page,loginUser})=>{

    await page.waitForTimeout(2000);
})

test("Test login with fixture json",async({page,loginUserJson})=>{

    await page.waitForTimeout(2000);
})