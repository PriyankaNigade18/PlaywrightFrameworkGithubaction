
import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test("Test for Checkout process",async({page})=>{
let loginpage=new LoginPage(page);
    let invpage=new InventoryPage(page);
    let cartpage=new CartPage(page);   
    let check=new CheckoutPage(page);
    await loginpage.gotoUrl();
    invpage=await loginpage.doLogin("standard_user","secret_sauce");
    await invpage.addProduct("Sauce Labs Fleece Jacket");
    cartpage=await invpage.goToCartPage();
    check=await cartpage.doCheckout();
    await check.doCheckout("Jay","Nigade","411047");
    await page.waitForTimeout(2000);

})