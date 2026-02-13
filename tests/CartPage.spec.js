import {test,expect} from "@playwright/test"
import { LoginPage} from "../pages/LoginPage.js"
import { InventoryPage } from "../pages/InventoryPage.js"
import { CartPage } from "../pages/CartPage.js";
import { CheckoutPage } from "../pages/CheckoutPage.js";


test.describe("Cart page testcases",()=>{
    let loginpage;
    let invpage;
    let cartpage;
test.beforeEach(async({page})=>{
    loginpage=new LoginPage(page);
    invpage=new InventoryPage(page);
    cartpage=new CartPage(page);
    await loginpage.gotoUrl();
    invpage=await loginpage.doLogin("standard_user","secret_sauce");
    await page.waitForTimeout(1000);
    await invpage.addProduct("Sauce Labs Fleece Jacket");
    cartpage=await invpage.goToCartPage();
     await page.waitForTimeout(1000);
})


test("Test for cart description",async({page})=>{

    // let loginpage=new LoginPage(page);
    // let invpage=new InventoryPage(page);
    // let cartpage=new CartPage(page);
    // invpage=await loginpage.doLogin("standard_user","secret_sauce");
    // await invpage.addProduct("Sauce Labs Fleece Jacket");
    // cartpage=await invpage.goToCartPage();
   let pname=await cartpage.getProductName();
   console.log(pname);
   
   await page.waitForTimeout(2000);
   

})

test("Test for Remove Product",async({page})=>{

//    let loginpage=new LoginPage(page);
//     let invpage=new InventoryPage(page);
//     let cartpage=new CartPage(page);
//     invpage=await loginpage.doLogin("standard_user","secret_sauce");
//     await invpage.addProduct("Sauce Labs Fleece Jacket");
//     cartpage=await invpage.goToCartPage();
    let pname=cartpage.doRemoveProduct();
    console.log("Product removed from cart: "+pname);
     await page.waitForTimeout(2000);
})

test("Test for Continue shopping",async({page})=>{

//    let loginpage=new LoginPage(page);
//     let invpage=new InventoryPage(page);
//     let cartpage=new CartPage(page);
//     invpage=await loginpage.doLogin("standard_user","secret_sauce");
//     await invpage.addProduct("Sauce Labs Fleece Jacket");
//     cartpage=await invpage.goToCartPage();
    invpage=await cartpage.doContinueShopping();
    await invpage.addProduct("Sauce Labs Bolt T-Shirt");
    cartpage=await invpage.goToCartPage();
     await page.waitForTimeout(2000);
})
test("Test for launch checkout page",async({page})=>{

//    let loginpage=new LoginPage(page);
//     let invpage=new InventoryPage(page);
//     let cartpage=new CartPage(page);
//     invpage=await loginpage.doLogin("standard_user","secret_sauce");
//     await invpage.addProduct("Sauce Labs Fleece Jacket");
//     cartpage=await invpage.goToCartPage();
    await cartpage.doCheckout();
 
     await page.waitForTimeout(2000);
})

})
