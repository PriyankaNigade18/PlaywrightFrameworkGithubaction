
export class OverviewPage{

    #page;
    #paymentDetails;
    #finishBtn;
    #successMsg;

    constructor(page)
    {
        this.#page=page;
        this.#finishBtn=page.locator("//button[text()='Finish']");
        this.#paymentDetails=page.locator("//div[@class='summary_info']//div[contains(@class,'summary')]")
        this.#successMsg=page.locator("//h2[@class='complete-header']");
    }

    async getDetails()
    {
       let data=await this.#paymentDetails.all();
       for(let i of data)
       {
        console.log(await i.innerText());
        
       }

    }
    async doFinish()
    {
        await this.#finishBtn.click()
       return await this.#successMsg.innerText();
    }




}