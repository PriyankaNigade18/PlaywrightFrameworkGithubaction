import { OverviewPage } from "./OverviewPage";

export class CheckoutPage{

    #page;
    #fname;
    #lname;
    #zcode;
    #continueBtn;

    constructor(page)
    {
        this.#page=page;
        this.#fname=page.locator("#first-name");
        this.#lname=page.locator("#last-name");
        this.#zcode=page.locator("#postal-code");
        this.#continueBtn=page.locator("#continue");

    }


    async doCheckout(fn,ln,zc)
    {
        await this.#fname.fill(fn);
        await this.#lname.fill(ln);
        await this.#zcode.fill(zc);
        await this.#continueBtn.click();
        //navigation to next page
        return new OverviewPage(this.#page);
    }



}