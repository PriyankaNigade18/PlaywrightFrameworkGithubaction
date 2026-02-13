import { InventoryPage } from "./InventoryPage";
import { CheckoutPage } from "./CheckoutPage";

export class CartPage{

    #page;
    #productName;
    #removeButton;
    #continueShopping;
    #checkoutButton;
constructor(page)
{
    this.#page=page;
    this.#productName=page.locator(".inventory_item_name");
    this.#removeButton=page.locator("button[id*='remove']");
    this.#continueShopping=page.locator("button[id='continue-shopping']");
    this.#checkoutButton=page.locator("button[id='checkout']");
    
}

async getProductName()
{
    return await this.#productName.innerText();
}

async doRemoveProduct()
{
   let pname=await this.#productName.innerText();
    await this.#removeButton.click();
    return await pname;
}

async doContinueShopping()
{
    await this.#continueShopping.click();
    return new InventoryPage(this.#page);
}

async doCheckout()
{
    await this.#checkoutButton.click();
    return new CheckoutPage(this.#page);
}
}