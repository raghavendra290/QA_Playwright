const {test, expect}=require('@playwright/test');
class CartPage{
    constructor(page){
        this.page=page;
        this.cartproducts=page.locator("div li").first();
        this.checkout=page.locator("text=Checkout");
    }
   async VerifyProductsItemsDisplayed(productname){
        await this.cartproducts.waitFor();
        const bool = this.getProductName(productname).isVisible();
        await expect(bool).toBeTruthy();
    }

    getProductName(productname){
        return this.page.locator("h3:has-text('"+productname+"')");
    }
async navigatetocheckout(){
await this.checkout.click();
}
}
module.exports={CartPage}