//import {test,expect} from "@playwright/test"
import {test} from "../fixtures/auth.fixture.js"
import {LoginPage} from "../pages/LoginPage.js"
import {expect} from "@playwright/test"


test("Test login with valid credentials @smoke",async({page})=>{

    const loginpage=new LoginPage(page);
    await loginpage.gotoUrl();
   await  loginpage.fillUserName("standard_user");
    await loginpage.fillPassword("secret_sauce");
    await loginpage.clickLogin();

    await page.waitForTimeout(2000);
})

test("Test login with fixture @smoke",async({page,loginUser})=>{

    await page.waitForTimeout(2000);
})

test("Test login with fixture json @smoke",async({page,loginUserJson})=>{

    await page.waitForTimeout(2000);
})

test("Test login with username and without password",async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.gotoUrl();
    await  loginpage.fillUserName("standard_user");
    await loginpage.clickLogin();
    const message=await loginpage.captureErroMessage();
    await expect(message).toHaveText("Epic sadface: Password is required")
    await page.waitForTimeout(2000);

})

test("Test login without username and with password",async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.gotoUrl();
   await loginpage.fillPassword("secret_sauce")
    await loginpage.clickLogin();
    const message=await loginpage.captureErroMessage();
    await expect(message).toHaveText("Epic sadface: Username is required")
    await page.waitForTimeout(2000);

})

test("Test login with baseUrl and metadata from config file",async({page,loginUserWithMetaData})=>{

    
    await page.waitForTimeout(2000);
})

test.only("Test login from csv data",async({page,loginPageCSV})=>{
    await page.waitForTimeout(2000);
})