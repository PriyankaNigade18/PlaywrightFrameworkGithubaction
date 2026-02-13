
import {test,expect} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage.js"
import { InventoryPage } from "../pages/InventoryPage.js";

test.describe("Test for Inventory page ",()=>{

    let loginpage;
    let invpage;
    
    test.beforeEach(async({page})=>{
     loginpage=new LoginPage(page);
    invpage=new InventoryPage(page);
    await loginpage.gotoUrl(); 
    invpage=await loginpage.doLogin("standard_user","secret_sauce"); 
    })
    test("Test for total product count",async({page})=>{
// let loginpage=new LoginPage(page);
// let invpage=new InventoryPage(page);
// await loginpage.gotoUrl();
// invpage=await loginpage.doLogin("standard_user","secret_sauce");
let allProducts=await invpage.getTotalProductCount();
console.log(await allProducts.length);
await page.waitForTimeout(2000);
})

test("Get the list of products details",async({page})=>{

// let loginpage=new LoginPage(page);
// let invpage=new InventoryPage(page);
// await loginpage.gotoUrl();
//invpage=await loginpage.doLogin("standard_user","secret_sauce");
await invpage.getProductDetails();
await page.waitForTimeout(2000);
})

test("Add product into Cart",async({page})=>{

// let loginpage=new LoginPage(page);
// let invpage=new InventoryPage(page);
// await loginpage.gotoUrl();
// invpage=await loginpage.doLogin("standard_user","secret_sauce");
await invpage.addProduct("Sauce Labs Fleece Jacket");
await invpage.goToCartPage();
await page.waitForTimeout(2000);
})

test("Launch cart page",async({page})=>{

// let loginpage=new LoginPage(page);
// let invpage=new InventoryPage(page);
// await loginpage.gotoUrl();
// invpage=await loginpage.doLogin("standard_user","secret_sauce");
await invpage.goToCartPage();
await page.waitForTimeout(2000);
})


})
