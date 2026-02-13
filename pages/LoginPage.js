import { InventoryPage } from "./InventoryPage";

export class LoginPage{

    #username;
    #password;
    #loginButton;
    #page;
    #errorMessage;
constructor(page)
{
    this.#page=page;
    this.#username=page.locator("#user-name");
    this.#password=page.locator("#password");
    this.#loginButton=page.locator("#login-button");
    this.#errorMessage=page.locator("//h3[@data-test='error']");

}

async gotoUrl()
{
await this.#page.goto("https://www.saucedemo.com/",{waitUntil:'domcontentloaded',waitUntil:'networkidle'});
await this.#page.waitForTimeout(1000);
}

async openUrl(baseUrl)
{
await this.#page.goto(baseUrl,{waitUntil:'domcontentloaded'});
await this.#page.waitForTimeout(1000);
}

async captureErroMessage()
{
    return await this.#errorMessage;
}
async fillUserName(un)
{
    await this.#username.fill(un);
}

async fillPassword(psw)
{
    await this.#password.fill(psw);
}

async clickLogin()
{
    await this.#loginButton.click();
     return new InventoryPage(this.#page);
}

async doLogin(un,psw)
{
    await this.#username.fill(un);
    await this.#password.fill(psw);
    await this.#loginButton.click();
    return new InventoryPage(this.#page);
}



}

