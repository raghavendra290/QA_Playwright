const {test,expect}=require('@playwright/test')

class OrderReviewPage{

    constructor(page){
        this.page=page;
        this.country=page.getByPlaceholder("Select Country");
        this.dropdown=page.locator(".ta-results");
        this.emailId=page.locator(".user__name [type='text']").first();
        this.placeorder=page.locator(".action__submit");
        this.orderplaceText=page.locator(".hero-primary");
        this.orderID=page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async searchcountryandSelect(CountryCode,CountryName){
        await this.country.pressSequentially(CountryCode,{delay:150});
        console.log(await this.dropdown.textContent())
           //await dropdown.waitFor();
        const coun= await this.dropdown.locator("button").count();
        console.log(coun);
        
        for(let i=0; i<coun;++i){
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if(text.trim()===CountryName){
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }
   async VerifyEmailId(username){
        await expect(this.emailId).toHaveText(username)
    }
    async placeordergetOrderID(){
await this.placeorder.click();
await expect(this.orderplaceText).toHaveText(" Thankyou for the order. ")
return await this.orderID.textContent();
    }
}
module.exports={OrderReviewPage}