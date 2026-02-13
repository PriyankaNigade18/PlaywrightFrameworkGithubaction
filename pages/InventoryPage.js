import { CartPage } from "./CartPage";

export class InventoryPage{

    #page;
    #allProducts;
    #addToCartButton;
    #cartIcon;

    constructor(page)
    {
        this.#page=page;
        this.#addToCartButton=page.locator("//button[text()='Add to cart']");
        this.#allProducts=page.locator("//div[@class='inventory_item_name ']");
        this.#cartIcon=page.locator(".shopping_cart_link");
    }


    async getTotalProductCount()
    {
        return await this.#allProducts.all();
    }

    async getProductDetails()
    {
    let allProducts=await this.#allProducts.all();
    for(let i of allProducts)
    {
        console.log(await i.innerText());
        
    }
    }
    

    async addProduct(pname)
    {
    let allProducts=await this.#allProducts.all();
    for(let i of allProducts)
    {
        if((await i.innerText()).includes(pname))
        {
            await i.click();
            break;
        }
        
    }
    //add to cart
    await this.#addToCartButton.click();
    console.log("Product added into cart: "+pname);
    
    }

    async goToCartPage()
    {
        await this.#cartIcon.click();
        return new CartPage(this.#page);
    }
}