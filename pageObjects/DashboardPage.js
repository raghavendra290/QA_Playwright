const {test}=require('@playwright/test');

class DashboardPage{

    
    constructor(page){
        this.page=page;
         this.products = page.locator(".card-body");
         this.product=page.locator(".card-body b");
         this.cart=page.locator("[routerlink='/dashboard/cart']");
         this.orderbutton=page.locator("button[routerlink='/dashboard/myorders']").first();

    }
   async SearchproductAddtoCart(productname){
        await this.product.first().waitFor();
        const titles=await this.product.allTextContents();
        console.log(titles);
        const count=await this.products.count();
        console.log(count);
        for(let i =0;i<count;++i){
            if(await this.products.nth(i).locator("b").textContent()===productname){
               await console.log("heello");
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
        
    }
async  navigatetocart(){
await this.cart.click();
}
async navigatetoOrders(){
    await this.orderbutton.click();
}
}
module.exports={DashboardPage};